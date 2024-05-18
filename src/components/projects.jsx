
import { motion,  } from "framer-motion";
// import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import {Subwallet} from './images'
import {Nike} from './images';

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
        <div id='projects' className='relative project  overflow-hidden text-HeaderTextColor   sm:pt-[120px] pt-[90px] sm:pb-[100px] pb-[80px] xl:px-[160px] md:px-[60px] px-[15px] h-full bg-mainBlack'>
        
            <div className=" flex gap-[3px] items-center bg-mainBlack2 px-[15px] py-[8px] sm:w-[210px] w-[190px] rounded-[10px]">
                    <span className='bg-HeaderTextColor w-[50px] h-[2px] '></span>
                    <h1 className='font-[500] text-HeaderTextColor sm:text-[2rem] text-[1.5rem]  rounded-[10px]' >Projects</h1>
            </div>
               
            
            <div   className=" lg:pt-[80px]  ">
                     {/* =============================== project one ========================================================= */}
                    <div  className="projectContainer1 projectContainer pt-[60px] sm:pt-[60px]  flex items-center justify-end lg:mb-[250px]  xl:mb-[200px] w-full" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="200"  data-aos-once="false"                          >
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
                                <li>
                                    <Link to="https://adedevelopers.com/" target='_blank'><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                    <Link to="https://adedevelopers.com/" target='_blank'><FaLink   className='text-[1.5rem]' /> </Link>
                                </li>                         
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
                style={{ zIndex: 0 }}
                >
                aremu.dev
                </motion.div>
                </div>

                {/* ========================================= project two ================================================= */}
                <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src={Nike} alt="Subwallet image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Nike Store</h1>
                            <p className="pt-[15px] text-textColor">This is a web application for a fictional Nike store that showcases various products, allows users to browse by categories, and add items to their cart.
                             Initially inspired by a tutorial, the project was further enhanced with unique customizations and additional features</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>React-Redux</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                   <Link  to="https://nike-store-beryl.vercel.app/" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="https://nike-store-beryl.vercel.app/" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div>
                
                {/* ========================================= project two ================================================= */}
               
                <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src={Subwallet} alt="Subwallet image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Subwallet</h1>
                            <p className="pt-[15px] text-textColor">This is a VTU (Virtual Top-Up) website that provides services such as airtime and data purchases, cable subscriptions, and airtime to cash conversions.</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>Material ui</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                   <Link  to="https://subwallet.ng/" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="https://subwallet.ng/" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div>


                {/* ========================================= project three ================================================= */}
               
                    <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
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
                                <li>
                                   <Link  to="#" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="#" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div>
                
                
                {/* ================================================= project three ============================================ */}
                    <div  className="projectContainer flex items-center justify-end  lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="110" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
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
                                <Link to="https://aremudev-aremus-projects.vercel.app/" target='_blank'> <FaGithub   className='text-[1.5rem] ' /> </Link>
                                <Link to="https://aremudev-aremus-projects.vercel.app/" target='_blank'> <FaLink  className='text-[1.5rem]'  /></Link>
                            </div>
                        </div>
                    </div>
                
                    
                        <div className='relative'>
                            <motion.div
                            className="slidingTextContainer"
                            variants={sliderVariants}
                            initial="initial"
                            animate="animate"
                            style={{ zIndex: 0 }}
                            >
                            aremu.dev
                            </motion.div>
                        </div>

                {/* ================================= project four   =================================================================== */}
                     <div  className=" projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb[200px] w-full"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="150" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
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
                                <li>
                                    <a href="https://github.com/aremuumera/Mentor-me " target='_blank'><FaGithub   className='text-[1.5rem]' /> </a>
                                </li>
                                <li>
                                    <a  href="https://mentor-me-eosin.vercel.app/" target='_blank' ><FaLink  className='text-[1.5rem]'/></a>
                                </li>
                            </div>
                        </div>
                    </div>
            
                {/* =========================== project five =============================================================== */}
                    <div  className="projectContainer2 flex items-center justify-end  " data-aos="fade-up" data-aos-duration="1500" data-aos-delay="180" data-aos-easing="ease-in-out " data-aos-offset="320"   data-aos-once="false"      >
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
                                <li>
                                    <a href="https://easybank-landing-page-nine-chi.vercel.app/" target='_blank'><FaGithub  className='text-[1.5rem]'  /></a>
                                </li>
                               <li>
                                    <a  href="https://easybank-landing-page-nine-chi.vercel.app/" target='_blank'><FaLink  className='text-[1.5rem]'  /></a>
                                </li>
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

            {/* <div className=" flex justify-center pt-[40px] min-[769px]:pt-[190px] "> */}
            {/* <Link to="#" className=" flex gap-[3px] items-center justify-center bg-mainBlack2 px-[15px] py-[8px] sm:w-[200px] w-[200px] rounded-[10px]"> */}
                {/* <span className='bg-HeaderTextColor w-[50px] h-[2px] '></span> */}
                {/* <h1 className='font-[500] text-HeaderTextColor text-[1.2rem]  rounded-[10px]'> More Projects</h1> */}
            {/* </div></Link> */}
            {/* </div> */}
        </div>

        
      
    </div>

  )
}

export default Projects
