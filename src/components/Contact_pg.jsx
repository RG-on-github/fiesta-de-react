import Navbar from './Navbar'
import Footer from './Footer'

const Contact_pg = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen overflow-hidden box-border'>
      <Navbar/>
      <div className='flex justify-between mx-20'>
        <div className='flex flex-col justify-center text-5xl'>
          <h3 className='text-gray-400'>Contact</h3>
          <h1 className='font-bold mb-10'>Information</h1>
          <p className='text-sm font-bold mb-24'>
            Intellexa <br />
            Rajalakshmi Engineering College
          </p>
          <p className='text-sm font-light mb-4'>Intellexa@gmail.com</p>
          <div className='bg-neutral-800 flex justify-center items-center w-1/2 h-1/5'>
            <p className='text-white font-afacad text-xs tracking-widest'>CONTACT US</p>
          </div>
        </div>
        <div className='flex items-center'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4712.825913556548!2d80.0011155420524!3d13.00862216928393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528c9ebac84723%3A0x18e2bf88dfefa3ed!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1728658828251!5m2!1sen!2sin"
            width={600}
            height={350}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='border-2 border-black'
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact_pg