import Navbar from "./Navbar"
import Footer from "./Footer"

const Gallery_pg = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden box-border">
        <Navbar/>
        <div className="m-20 text-5xl">
            <h3 className='text-gray-400'>Photo</h3>
            <h1 className='font-bold mb-10'>Gallery</h1>
            <div className="grid grid-cols-5 gap-2">
              <img src="/gallery_page/1.png"/>
              <img src="/gallery_page/2.png"/>
              <img src="/gallery_page/3.png"/>
              <img src="/gallery_page/4.png"/>
              <img src="/gallery_page/5.png"/>
              <img src="/gallery_page/6.png"/>
              <img src="/gallery_page/7.png"/>
              <img src="/gallery_page/8.png"/>
              <img src="/gallery_page/9.png"/>
              <img src="/gallery_page/10.png"/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery_pg