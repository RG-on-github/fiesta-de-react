import Navbar from './Navbar'
import Footer from './Footer'

const Main_pg = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex justify-between m-[5vw]">
        <div className="flex flex-col justify-center text-5xl">
          <h3 className="text-gray-400">PROJECT</h3>
          <h1 className="font-bold mb-10">Lorem</h1>
        </div>
        <div className="relative">
          <img className="max-w-[50vw]" src="/Main_page/main.png" alt="" />
          <div className="flex items-center justify-evenly absolute bottom-0 left-0 bg-white w-1/4 h-[7%] hover:cursor-pointer">
            <p className="text-xs font-afacad font-light">VIEW PROJECT</p>
            <img className="h-[40%]" src="/right_arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 m-[5vw]">
        <div>
          <img className="max-w-[50vw] mb-5" src="/Main_page/about_1.png" alt="" />
          <img className="max-w-[50vw]" src="/Main_page/about_3.png" alt="" />
        </div>
        <div className="hidden lg:flex">
          <img className="max-w-[50vw]" src="/Main_page/about_2.png" alt="" />
        </div>
        <div className="flex flex-col justify-evenly">
          <h3 className="text-gray-300 text-5xl">About</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque fugit mollitia totam, nulla ducimus a nesciunt dolore. Dolores fuga laborum deserunt obcaecati, sequi et nam nostrum! Sed aperiam laborum tenetur ipsam officiis, maxime consequuntur explicabo laudantium veniam exercitationem neque esse enim, quae ratione, sequi facilis. Blanditiis quo assumenda totam ex?</p>
          <div className="flex items-center justify-evenly bg-white w-1/4 h-[7%] hover:cursor-pointer">
            <p className="text-xs font-afacad font-light">READ MORE</p>
            <img className="h-[80%]" src="/right_arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col m-[5vw]">
        <h3 className="text-gray-300 text-5xl">Main Focus/Mission Statement</h3>
        <div className="flex justify-between mt-5">
          <div className="flex items-center max-w-[20vw]">
            <h1 className="text-gray-200 text-8xl">1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repudiandae!</p>
          </div>
          <div className="flex items-center max-w-[20vw]">
            <h1 className="text-gray-200 text-8xl">2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repudiandae!</p>
          </div>
        </div>
      </div>
      <div className="m-[5vw] relative">
        <h3 className="text-gray-300 text-5xl">Our Projects</h3>
        <div className="mt-5">
          <div className="flex h-[30vh] mb-5">
            <div className='w-[46%] mr-8 relative'>
              <img className=" brightness-50 w-[100%] h-[100%]" src="/Main_page/project_4.png"/>
              <div className='absolute left-5 top-5 text-white'>
                <h1 className='text-5xl'>Sample Project</h1>
                <div className='flex mt-4'>
                  <p className='text-sm mr-2'>View More</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 self-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
            <img className="w-[46%] ml-5" src="/Main_page/project_2.png" alt="" />
          </div>
          <div className="flex">
            <img className="w-[30%] mr-5" src="/Main_page/project_3.png" alt="" />
            <img className="w-[30%] mx-5" src="/Main_page/project_1.png" alt="" />
            <img className="w-[30%] ml-5" src="/Main_page/project_5.png" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-evenly bg-neutral-800 w-1/6 h-[7%] hover:cursor-pointer absolute right-11 mt-5">
          <p className="text-white text-xs font-afacad font-light">ALL PROJECTS</p>
          <img className="filter invert brightness-0 h-[60%]  " src="/right_arrow.png" alt="" />
        </div>
      </div>
      <div className="mt-32 m-[5vw]">
        <h3 className="text-gray-300 text-5xl mb-5">Contact Us</h3>
        <div className="flex">
          <div className="w-1/3 min-h-[30vh] mr-5 relative">
            <div className="bg-gray-200 h-[15%] mb-[2%] rounded-sm flex items-center">
              <p className="absolute left-5 text-gray-500">Name</p>
            </div>
            <div className="bg-gray-200 h-[15%] mb-[2%] rounded-sm flex items-center">
              <p className="absolute left-5 text-gray-500">E-Mail <span className="text-red-500">*</span></p>
            </div>
            <div className="bg-gray-200 h-[15%] mb-[2%] rounded-sm flex items-center">
              <p className="absolute left-5 text-gray-500">Phone Number <span className="text-red-500">*</span></p>
            </div>
            <div className="bg-gray-200 h-[15%] mb-[2%] rounded-sm flex items-center">
              <p className="absolute left-5 text-gray-500">Interested In</p>
            </div>
            <div className="bg-gray-200 h-[34%] rounded-sm relative">
              <p className="absolute left-5 top-5 text-gray-500">Message <span className="text-red-500">*</span></p>
            </div>
          </div>
          <div className="w-2/3">
            <img className="w-full" src="/contact.webp" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-evenly bg-neutral-800 w-1/6 hover:cursor-pointer mt-4 mb-24 py-2">
            <p className="text-white text-xs font-afacad font-light">SEND EMAIL</p>
            <img className="filter invert brightness-0 h-10" src="/right_arrow.png" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Main_pg;
