import Btns from './components/btns/Btns'
import Navbar from './components/navbar/Navbar'
import { FaHourglassHalf } from 'react-icons/fa'
import Todo from './components/todo/Todo'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const addTodo = (title, description, isCheck) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      isCheck,
      isCompleted: false,
    }

    setTodos([...todos, newTodo])
  }

  const completeTodo = (id) => {
    const updatetedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true
      }
      return todo
    })

    setTodos(updatetedTodos)
  }

  const removeTodo = (id) => {
    const removeTodo = todos.filter((todo) => todo.id !== id)

    setTodos(removeTodo)
  }

  const filteredTodos = () => {
    if (filter === 'all') return todos
    if (filter === 'completed') return todos.filter((todo) => todo.isCompleted)
    if (filter === 'not-completed')
      return todos.filter((todo) => !todo.isCompleted)
  }

  return (
    <div className="todolist-container">
      <Navbar />

      <div className="flex mt-40 text-3xl">
        <FaHourglassHalf />
        <p className="pr-3">مدیریت و برنامه ریزی</p>
      </div>

      <p className="mt-5 text-sm">
        ابزاری قدرتمند برای سازماندهی وظابف روزمره و افزایش بهره وری شماست. با
        رابط کاربری ساده و امکانات پیشرفته، از پیگیری وظایف تا همکاری تیمی را به
        اسانی مدیریت کنید{' '}
      </p>

      <div className="flex flex-end justify-end gap-5 mt-20">
        <Btns
          todos={todos}
          setFilter={setFilter}
          addTodo={addTodo}
          completeTodo={completeTodo}
        />
      </div>

      <hr />

      {todos.length ? (
        filteredTodos().map((todo) => (
          <>
            <h1 className="my-5">تسک های موجود :</h1>
            <Todo
              key={todo.id}
              {...todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          </>
        ))
      ) : (
        <div className="flex justify-center items-center bg-red-200 mt-20 rounded w-full h-10">
          {' '}
          تسکی وجود ندارد
        </div>
      )}

      {todos.filter((todo) => todo.isCompleted === true).length
        ? filteredTodos()
            .filter((todo) => todo.isCompleted === true)
            .map((todo) => (
              <>
                <h1 className="my-5 mt-40">تسک های تکمیل شده :</h1>
                <Todo
                  key={todo.id}
                  {...todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              </>
            ))
        : null}
    </div>
  )
}

export default App
