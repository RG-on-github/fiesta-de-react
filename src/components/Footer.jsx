import facebook_logo from '../assets/company_logo/facebook_logo.png'
import twitter_logo from '../assets/company_logo/twitter_logo.png'
import linkedIn_logo from '../assets/company_logo/linkedIn_logo.png'
import pinterest_logo from '../assets/company_logo/pinterest_logo.png'

export default function Footer(){
  return (
    <div>
        <div className='bg-neutral-800 text-white flex justify-evenly'>
                <div className='flex flex-col justify-evenly'>
                    <img src="/Main_page/logo.png" alt="" className='max-h-20 filter invert brightness-0'/>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <ul className='flex flex-col font-light'>
                        <li className='font-semibold'>Connect with Us</li>
                        <li>Facebook</li>
                        <li>X/Twitter</li>
                        <li>Instagram</li>
                        <li>Whatsapp</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <p className='font-semibold'>Contact Details</p>
                    <div>
                        <img src="" alt="" />
                        <p className='font-thin'>Coordinates: 40.7128° N, 74.0060° W
                        Location: New York City, USA</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p className='font-thin'>+7()701 77 76
                            811
                        </p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p className='font-thin'>randomuser123@example.com</p>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly mx-4'>
                    <p className='text-center'>Social Media</p>
                    <div className='flex justify-evenly'>
                        <img className='filter invert brightness-0 max-h-6 mx-2' src={facebook_logo} alt="" />
                        <img className='filter invert brightness-0 max-h-6 mx-2' src={twitter_logo} alt="" />
                        <img className='filter invert brightness-0 max-h-6 mx-2' src={linkedIn_logo} alt="" />
                        <img className='filter invert brightness-0 max-h-6 mx-2' src={pinterest_logo} alt="" />
                    </div>
                </div>
        </div>
        <div className='bg-neutral-800 min-h-10 flex justify-center items-center border-t border-t-gray-500 border-opacity-30'>
            <p className='text-white'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}
