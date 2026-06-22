import { IoClose } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

const Todo = ({
  title,
  isCheck,
  description,
  id,
  isCompleted,
  completeTodo,
  removeTodo
}) => {
  return (
    <div className="flex justify-between items-center mb-10 px-5 border border-gray-300 rounded w-full h-25">
      <div>
        {' '}
        <h1 className="font-bold">{title}</h1>
        <h3 className="pt-2 text-sm">{description}</h3>
      </div>
      <div className="flex items-center gap-5">
        {isCompleted && (
          <p className="bg-green-600 p-2 rounded text-white text-sm"> تکمیل شده </p>
        )}
        {isCheck && <p className="bg-yellow-300 p-2 rounded text-sm"> مهم </p>}
        <FaCircleCheck className='text-green-600' onClick={() => completeTodo(id)}  />
        <IoClose className='text-red-600' onClick={() => removeTodo(id)} />
      </div>
    </div>
  )
}

export default Todo
