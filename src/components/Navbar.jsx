import { NavLink } from "react-router-dom"

export default function Navbar(){
  return (
    <nav className="min-h-6 flex justify-between mx-20 mt-5">
      <div>
        <img src="/Main_page/logo.png" alt="" className='max-h-10'/>
      </div>
      <ul className='flex space-x-[10vw] font-normal text-sm font-afacad'>
        <NavLink className={({isActive}) => {
          return isActive ? 'text-blue-800' : '';
        }} to="/">
          <li className='overline hover:cursor-pointer'>
            <p className='underline underline-offset-[6px]'>MAIN</p>
          </li>
        </NavLink>
        <NavLink className={({isActive}) => {
          return isActive ? 'text-blue-800' : '';
        }} to="/gallery"><li className='hover:cursor-pointer'>GALLERY</li></NavLink>
        <NavLink className={({isActive}) => {
          return isActive ? 'text-blue-800' : '';
        }} to="/projects"><li className='hover:cursor-pointer'>PROJECTS</li></NavLink>
        <NavLink className={({isActive}) => {
          return isActive ? 'text-blue-800' : '';
        }} to="/certifications"><li className='hover:cursor-pointer'>CERTIFICATIONS</li></NavLink>
        <NavLink className={({isActive}) => {
          return isActive ? 'text-blue-800' : '';
        }} to="/contacts"><li className='hover:cursor-pointer'>CONTACTS</li></NavLink>
      </ul>
    </nav>
  )
}
