import Navbar from "./Navbar";
import Footer from "./Footer";

const Project_pg = () => {
  return (
    <div>
      <Navbar />
      <div className="m-[5vw]">
        <div className="flex flex-col justify-center text-5xl">
          <h3 className="text-gray-400">Our</h3>
          <h1 className="font-bold mb-10">Projects</h1>
        </div>
        <div className="flex">
          <div className="w-2/3 mr-5">
            <img className="w-full" src="/projects_page/project_1.jpg" alt="" />
          </div>
          <div className="w-1/3 flex flex-col justify-evenly">
            <h3 className="text-gray-300 text-5xl font-thin">Sample Project</h3>
            <p className="font-afacad">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              tempore est quo, officia hic voluptate perspiciatis omnis
              explicabo, sit cupiditate pariatur quam cum eum? Temporibus
              voluptas commodi vel quos ullam, quidem eaque enim ab maiores!
              Reprehenderit temporibus et possimus, tempore explicabo doloremque
              saepe odio vel quae hic delectus nesciunt quaerat?
            </p>
            <div className="flex mt-4 hover:cursor-pointer">
              <p className="text-sm mr-2">View More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex my-20">
          <div className="w-2/3 mr-5">
            <img className="w-full" src="/projects_page/project_2.png" alt="" />
          </div>
          <div className="w-1/3 flex flex-col justify-evenly">
            <h3 className="text-gray-300 text-5xl font-thin">Sample Project</h3>
            <p className="font-afacad">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              tempore est quo, officia hic voluptate perspiciatis omnis
              explicabo, sit cupiditate pariatur quam cum eum? Temporibus
              voluptas commodi vel quos ullam, quidem eaque enim ab maiores!
              Reprehenderit temporibus et possimus, tempore explicabo doloremque
              saepe odio vel quae hic delectus nesciunt quaerat?
            </p>
            <div className="flex mt-4 hover:cursor-pointer">
              <p className="text-sm mr-2">View More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex my-20">
          <div className="w-2/3 mr-5">
            <img className="w-full" src="/projects_page/project_3.jpg" alt="" />
          </div>
          <div className="w-1/3 flex flex-col justify-evenly">
            <h3 className="text-gray-300 text-5xl font-thin">Sample Project</h3>
            <p className="font-afacad">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              tempore est quo, officia hic voluptate perspiciatis omnis
              explicabo, sit cupiditate pariatur quam cum eum? Temporibus
              voluptas commodi vel quos ullam, quidem eaque enim ab maiores!
              Reprehenderit temporibus et possimus, tempore explicabo doloremque
              saepe odio vel quae hic delectus nesciunt quaerat?
            </p>
            <div className="flex mt-4 hover:cursor-pointer">
              <p className="text-sm mr-2">View More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Project_pg;
