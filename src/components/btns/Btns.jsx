import { FaPlus } from 'react-icons/fa6'
import Modal from '../modal/Modal'
import { useState } from 'react'

const Btns = ({todos, addTodo, setFilter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <form className="">
        <select
          onChange={(e)=>setFilter(e.target.value)}
          id="small"
          className="block bg-neutral-secondary-medium shadow-xs mb-4 px-3 py-2.5 border border-default-medium focus:border-brand rounded rounded-base focus:ring-brand w-full text-heading placeholder:text-body text-sm"
        >
       
          <option value="all" >همه </option>
          <option value="completed" >تکمیل شده ها</option>
          <option value="not-completed" >در انتظار انجام</option>
        </select>
      </form>

      <button
        onClick={() => setIsModalOpen(true)}
        type="button"
        className="flex items-center gap-2 bg-black px-2 rounded h-11.25 text-white text-sm"
      >
        <p>ایجاد جدید</p>
        <FaPlus />
      </button>

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} addTodo={addTodo} todos={todos}  />}
    </>
  )
}

export default Btns
