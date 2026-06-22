const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-2 border-gray-300 rounded-2xl w-full h-20">
      <div>
        <ul className="flex">
          <li className="pr-8 pl-8">
            <a href="">خانه</a>
          </li>
          <li className="pr-2 pl-8">
            <a href="">فروشگاه</a>
          </li>
          <li className="pr-2 pl-8">
            <a href="">اشتراک ویژه </a>
          </li>
          <li className="pr-2 pl-8">
            <a href="">درباره ما</a>
          </li>
          <li className="pr-2 pl-8">
            <a href="">تماس با ما</a>
          </li>
        </ul>
      </div>

      <div className="pl-8" >
        <img src="/images/pngtree-wolf-logo-png-image_2306634.jpg" alt="logo" className="rounded-[50%] w-20 h-18"/>
      </div>
    </div>
  )
}

export default Navbar
