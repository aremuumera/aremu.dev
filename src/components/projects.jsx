
import { motion,  } from "framer-motion";
// import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";



const Projects = () => {

    const sliderVariants = {
        initial: {
          x:0,
        },
        animate: {
          x: "-200%",
          transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 5,
          },
        },
      };

      

  return (
    <div className=''>
        <div id='projects' className='relative  overflow-hidden text-HeaderTextColor   sm:pt-[120px] pt-[90px] sm:pb-[100px] pb-[80px] xl:px-[160px] md:px-[60px] px-[15px] h-full bg-mainBlack'>
        
            <div className=" flex gap-[3px] items-center bg-mainBlack2 px-[15px] py-[8px] sm:w-[210px] w-[190px] rounded-[10px]">
                    <span className='bg-HeaderTextColor w-[50px] h-[2px] '></span>
                    <h1 className='font-[500] text-HeaderTextColor sm:text-[2rem] text-[1.5rem]  rounded-[10px]' >Projects</h1>
            </div>
               
            
            <div   className=" lg:pt-[80px]  ">
                     {/* =============================== project one ========================================================= */}
                    <div  className="projectContainer1 pt-[50px]  flex items-center justify-end  w-full" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="200"  data-aos-once="false"                          >
                        <div className="w-full max-w-[600px]">
                            <img src='https://res.cloudinary.com/dvkv4p72u/image/upload/v1715747895/ade_b6gccq.png' alt="portfolio image" className="w-[600px]"/>
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">A D E Developers website</h1>
                            <p className="pt-[15px] text-textColor">This is a SaaS website meticulously designed to resolve business dilemmas through advanced technological solutions and also showcasing their products and services, which encompass website development, web applications, and app creation.</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>AOS.JS</span>
                                <span>swiper.Js</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <a href="https://adedevelopers.com/"><FaGithub   className='text-[1.5rem]' /> </a>
                                <a  href="https://adedevelopers.com/" ><FaLink  className='text-[1.5rem]'  /></a>
                            </div>
                        </div>
                    </div>
               
                {/* ========================================= FAINT BACKGROUND START============================== */}
                <div className='relative '>
                <motion.div
                className="slidingTextContainer projectBgSlider1"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
                >
                aremu.dev
                </motion.div>
                </div>

                {/* ========================================= project two ================================================= */}
               
                    <div  className="projectContainer flex items-center justify-end lg:pt-[180px]  xl:pt-[150px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src='https://res.cloudinary.com/dvkv4p72u/image/upload/v1715747869/eccn_iccvoh.png' alt="portfolio image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Evangelican Church of Christ In Nigeria</h1>
                            <p className="pt-[15px] text-textColor">This is a church website that showcases their mission, vision, events, blogs, sermon services and contact information. It also includes an Admin dashboard to upload blogs post, upcoming events, sermon and more features to be displayed  on the website.</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>Api</span>
                                <span>Node js</span>
                                <span>sql</span>
                                <span>Material ui</span>
                                <span>sass</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <a href="#"><FaGithub   className='text-[1.5rem]' /> </a>
                                <a  href="#" ><FaLink  className='text-[1.5rem]'  /></a>
                            </div>
                        </div>
                    </div>
                
                
                {/* ================================================= project three ============================================ */}
                    <div  className="projectContainer flex items-center justify-end pt-[40px] lg:pt-[180px]  xl:pt-[150px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px]  ">
                            <img src='https://res.cloudinary.com/dvkv4p72u/image/upload/v1715748267/myportfolio_t2knek.png' alt="portfolio image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] "> My portfolio</h1>
                            <p className="pt-[15px] text-textColor">This is the website where I showcase my portfolio, providing details about myself, my professional endeavors, skills, journey, projects, and contact information.</p>
                            <div className="projectStack py-[15px] flex gap-[10px] flex-wrap ">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>Framer-motion</span>
                                <span>AOS.JS</span>
                            </div>
                            <div className="flex projectContLink items-center pt-[10px] gap-[15px]">
                                <a href="https://aremudev-aremus-projects.vercel.app/"><FaGithub   className='text-[1.5rem] ' /> </a>
                                <a  href="https://aremudev-aremus-projects.vercel.app/" ><FaLink  className='text-[1.5rem]'  /></a>
                            </div>
                        </div>
                    </div>
                
                    
                        <div className='relative'>
                            <motion.div
                            className="slidingTextContainer"
                            variants={sliderVariants}
                            initial="initial"
                            animate="animate"
                            >
                            aremu.dev
                            </motion.div>
                        </div>

                {/* ================================= project four   =================================================================== */}
                     <div  className=" projectContainer flex items-center justify-end lg:pt-[180px]  xl:pt-[150px] w-full"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src='https://res.cloudinary.com/dvkv4p72u/image/upload/v1715720626/mentor-1_uohzxh.png' alt="portfolio image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] ">Mentor me</h1>
                            <p className="pt-[15px] text-textColor"> Mentor Me offers a nurturing environment for tech enthusiasts to learn, grow, and thrive. Through personalized mentorship and tailored guidance, users embark on transformative journeys, gaining valuable insights and skills. </p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap ">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>AOS.JS</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <a href="https://github.com/aremuumera/Mentor-me "><FaGithub   className='text-[1.5rem]' /> </a>
                                <a  href="https://mentor-me-eosin.vercel.app/" ><FaLink  className='text-[1.5rem]'  /></a>
                            </div>
                        </div>
                    </div>
            
                {/* =========================== project five =============================================================== */}
                    <div  className="projectContainer flex items-center justify-end lg:pt-[180px]  xl:pt-[150px]" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="320"   data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src='https://res.cloudinary.com/dvkv4p72u/image/upload/v1715747445/easy-bank_-snip_utyliv.png' alt="portfolio image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] ">Easy Bank </h1>
                            <p className="pt-[15px] text-textColor">EasyBank is a all-in-one digital finance solution, simplify budgeting, swift online onboarding, and seamless management with Open API integration.</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap ">
                                <span>Vanilla.Js</span>
                                <span>TailwindCSS</span>
                                <span>AOS.JS</span>
                                <span>html</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <a href="https://github.com/aremuumera/Easybank-Landing-page"><FaGithub   className='text-[1.5rem]' /> </a>
                                <a  href="https://easybank-landing-page-nine-chi.vercel.app/" ><FaLink  className='text-[1.5rem]'  /></a>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='relative  '>
                <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                aremu.dev
            </motion.div>
            </div>

            <div className=" flex justify-center pt-[60px] min-[769px]:pt-[190px] ">
            <a href="#" className=" flex gap-[3px] items-center justify-center bg-mainBlack2 px-[15px] py-[8px] sm:w-[200px] w-[200px] rounded-[10px]">
                {/* <span className='bg-HeaderTextColor w-[50px] h-[2px] '></span> */}
                <h1 className='font-[500] text-HeaderTextColor text-[1.2rem]  rounded-[10px]'> More Projects</h1>
            </a>
            </div>
        </div>

        
      
    </div>

  )
}

export default Projects
