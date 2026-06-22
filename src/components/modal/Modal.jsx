import { IoCloseCircleSharp } from 'react-icons/io5'
import { FaRegCheckSquare } from 'react-icons/fa'
import { useState } from 'react'

const Modal = ({ setIsModalOpen , addTodo}) => {
  const [title, setTitle] = useState('')
  const [description, setDiscription] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  


  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/10 backdrop-blur-xs">
      <div className="flex flex-col justify-center items-center bg-gray-100 rounded w-120 h-120">
        <div className="flex justify-end items-center p-3 w-full text-red-900">
          <IoCloseCircleSharp
            onClick={() => setIsModalOpen(false)}
            className="flex"
          />
        </div>

        <h1 className="text-center">ایجاد برنامه جدید</h1>

        <form action="" className="flex flex-col"   onSubmit={(e) => {
    e.preventDefault()
    addTodo(title, description, isCheck)
    setIsModalOpen(false)
  }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="عنوان تسک را وارد نمایید..."
            className="pr-2 border-2 border-gray-300 rounded w-98 h-10 text-sm"
          />
          <textarea
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
            placeholder="توضیحات تسک را وارد نمایید..."
            className="mt-10 p-2 border-2 border-gray-300 rounded w-98 h-40 text-sm"
            name=""
            id=""
          ></textarea>
          <div className="flex gap-2 mt-3">
            {' '}
            <input
              type="checkbox"
              checked={isCheck}
              onChange={() => setIsCheck(!isCheck)}
            />
            <p>مهم</p>
          </div>

          <div className="flex gap-2 bg-orange-200 mt-3 p-2 rounded w-98 text-sm">
            <FaRegCheckSquare />
            <p>لطفا تمامی فیلدهارا تکمیل بفرمایید.</p>
          </div>

          <div className="flex justify-end my-5">
            <button type='submit'  className="flex justify-end bg-blue-600 p-2 rounded w-20 text-white text-sm">
              ایجاد کنید
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal





