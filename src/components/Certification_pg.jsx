import Navbar from './Navbar'
import Footer from './Footer'

const Certification_pg = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen overflow-hidden box-border'>
        <Navbar/>
        <div className='pt-20 text-5xl pl-20 pb-60'>
            <h3 className='text-gray-400'>COMPANY</h3>
            <h1 className='font-bold'>Certifications</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Certification_pg

