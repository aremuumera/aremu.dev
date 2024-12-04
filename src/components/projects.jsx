
import { motion,  } from "framer-motion";
// import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import {Blog, ProductFilter, Subwallet} from './images'
import {Nike, Ade, Eccn, Medify, Finch} from './images';
import Ecommerce from '../assets/hng.png'
import Paymentpoint from '../assets/asset/paymentpoint.png'
import Bpay from '../assets/bpay.png'
import Lynue from '../assets/lyniue.png'

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
               
            
            <div   className=" lg:pt-[80px] sm:pb-[40px] ">

            <div  className="projectContainer flex items-center pt-[60px] sm:pt-[60px] justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src={Paymentpoint} alt="Product image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Payment point (payment gateway)</h1>
                            <p className="pt-[15px] text-textColor">
                                This is a payment gateway i built alongside with a backend developer for a client to facilitate transactions for business owners. It enables business owners to accept payments online through various methods, including credit/debit cards, mobile wallets, and bank transfers.
                            </p>
                            {/* <p className="text-xl pt-[10px]">P.O.V: Launching soon </p> */}
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>Material UI</span>
                                <span>React-Redux</span>
                                <span>TailwindCSS</span>
                                <span>framer-motion</span>
                                <span>API's</span>

                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                   <Link  to="https://paymentpoint.co/" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="https://paymentpoint.co/" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div>


                     {/* =============================== project one ========================================================= */}
                    <div  className="projectContainer1 projectContainer pt-[60px] sm:pt-[60px]  flex items-center justify-end lg:mb-[250px]  xl:mb-[200px] w-full" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="200"  data-aos-once="false"                          >
                        <div className="w-full max-w-[600px]">
                            {/* <img src='https://res.cloudinary.com/dvkv4p72u/image/upload/v1715747895/ade_b6gccq.png' alt="portfolio image" className="w-[600px]"/> */}
                            <img src={Ade} alt="portfolio image" className="w-[600px]"/>
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">A D E Developers website</h1>
                            <p className="pt-[15px] text-textColor">
                            This SaaS website was developed during my Frontend Internship at A.D.E Developers. It showcases the company's solutions for resolving business challenges through cutting-edge technology, highlighting their services in website development, web applications, and app creation.
                            </p>
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


                    {/* =============================== project ========================================================= */}
                    <div  className="projectContainer1 projectContainer pt-[60px] sm:pt-[60px]  flex items-center justify-end lg:mb-[250px]  xl:mb-[200px] w-full" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="200"  data-aos-once="false"                          >
                        <div className="w-full max-w-[600px]">
                            {/* <img src='https://res.cloudinary.com/dvkv4p72u/image/upload/v1715747895/ade_b6gccq.png' alt="portfolio image" className="w-[600px]"/> */}
                            <img src={Finch} alt="portfolio image" className="w-[600px]"/>
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Artistry by Finch</h1>
                            <p className="pt-[15px] text-textColor">This is a makeup artist website meticulously designed to enhance your beauty through professional makeup services and showcasing various makeup looks and transformations, which encompass bridal makeup, party glam, and everyday beauty solutions.</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>AOS.JS</span>
                                <span>swiper.Js</span>
                                <span>Framer motion</span>
                                <span>python</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                    <Link to="https://artistry-by-finch.vercel.app/" target='_blank'><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                    <Link to="https://artistry-by-finch.vercel.app/" target='_blank'><FaLink   className='text-[1.5rem]' /> </Link>
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
               
              

                


                     {/* ========================================= project four ================================================= */}
               
                <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src={Lynue} alt="Product image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Lynue (Real Estate)</h1>
                            <p className="pt-[15px] text-textColor">
                               Lynue is a comprehensive real estate platform designed to simplify property transactions for both buyers and sellers. Users can list all types of properties—residential, commercial, and rental—allowing potential buyers or renters to easily explore and discover properties that match their needs.
                            </p>
                            {/* <p className="text-xl pt-[10px]">P.O.V: Launching soon currently in Beta testing</p> */}
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>Chakra UI</span>
                                <span>React-Redux</span>
                                <span>TailwindCSS</span>
                                <span>Node js</span>
                                <span>Mongo db</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                   <Link  to="/" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="https://lynue-client-2eb3a7d46803.herokuapp.com" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div>

                    {/* ========================================= project three ================================================= */}
               
                {/* <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src={Bpay} alt="Product image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Bpay (Fintech)</h1>
                            <p className="pt-[15px] text-textColor">
                                This is a payment gateway i built alongside with a backend developer for a client to facilitate transactions for business owners. It enables business owners to accept payments online through various methods, including credit/debit cards, mobile wallets, and bank transfers.
                            </p>
                            <p className="text-xl pt-[10px]">P.O.V: Launching soon currently in development phase</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>Material UI</span>
                                <span>React-Redux</span>
                                <span>TailwindCSS</span>
                                <span>framer-motion</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                   <Link  to="/" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="/" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div> */}

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
                
                {/* ================================================= project three ============================================ */}
                <div  className="projectContainer flex items-center justify-end  lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="110" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px]  ">
                            <img src={Medify} alt="portfolio image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] "> Medify Chat</h1>
                            <p className="pt-[15px] text-textColor">This is a comprehensive health management and wellness platform designed to make your healthcare journey simpler and more connected.This chat-based application provides a seamless way to connect with healthcare professionals, track your health metrics, and get personalized advice—all in one convenient place.</p>
                            <div className="projectStack py-[15px] flex gap-[10px] flex-wrap ">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>Node Js</span>
                                <span>Stream Chat API</span>
                                <span>Twilio</span>
                            </div>
                            <div className="flex projectContLink items-center pt-[10px] gap-[15px]">
                                <Link to="https://github.com/aremuumera/Medify-Chat" target='_blank'> <FaGithub   className='text-[1.5rem] ' /> </Link>
                                <Link to="https://medify-chat.vercel.app/" target='_blank'> <FaLink  className='text-[1.5rem]'  /></Link>
                            </div>
                        </div>
                    </div>

                    {/* ========================================= project two ================================================= */}
               
                <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src={Blog} alt="Blog image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Modern Blog</h1>
                            <p className="pt-[15px] text-textColor">This is a Modern Blog Website showing various updates, trending news about Startups Security, AI, Apps and Tech</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>TailwindCSS</span>
                                <span>Node Js</span>
                                <span>Express Js</span>
                                <span>Json data</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                   <Link  to="https://modern-blog-website.vercel.app/" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="https://modern-blog-website.vercel.app/" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div>

                    
                {/* ========================================= project two ================================================= */}
               
                <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src={ProductFilter} alt="Product image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Ecommerce Product Filter</h1>
                            <p className="pt-[15px] text-textColor">This is an Ecommerce filter product software used to filter products based on user selections. Users can filter products using search input, different categories such as color, price range, and other attributes to refine their search results and find the products they are interested in.</p>
                            <p className="text-xl pt-[10px]">P.O.V: should be viewed on desktop </p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>Vanilla Js</span>
                                <span>Web scraping data</span>
                                <span>CSS3</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                   <Link  to="https://github.com/aremuumera/Modern-Blog-website" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="https://ecommerce-product-filter-two.vercel.app/" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div>


                {/* ========================================= project three ================================================= */}
               
                    <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            {/* <img src='https://res.cloudinary.com/dvkv4p72u/image/upload/v1715747869/eccn_iccvoh.png' alt="portfolio image" /> */}
                            <img src={Eccn} alt="portfolio image" />
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
                                   <Link  to="https://eccnchurch.org/" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="https://eccnchurch.org/" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
                                </li>                           
                             </div>
                        </div>
                    </div>
                
                {/* ========================================= project two ================================================= */}
               
                <div  className="projectContainer flex items-center justify-end lg:mb-[250px]  xl:mb-[200px]"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="80" data-aos-easing="ease-in-out " data-aos-offset="320"  data-aos-once="false"      >
                        <div className="w-full max-w-[600px] ">
                            <img src={Ecommerce} alt="Product image" />
                        </div>
                        <div className=" projectCont max-w-[600px] w-full h-full py-[30px] -mb-[180px] -ml-[60px] ">
                            <h1 className="text-HeaderTextColor  text-[2rem] font-[600] leading-[30px] ">Ecommerce website</h1>
                            <p className="pt-[15px] text-textColor">This is an eCommerce platform that allows users to select categories to view products and proceed to the checkout page.</p>
                            <div className="projectStack py-[15px] flex gap-[10px]  flex-wrap">
                                <span>React Js</span>
                                <span>Vanilla Js</span>
                                <span>Json data</span>
                                <span>Tailwind css</span>
                            </div>
                            <div className="flex  projectContLink  items-center pt-[10px] gap-[15px]">
                                <li>
                                   <Link  to="https://hng-stage2-alpha.vercel.app/" target='_blank' ><FaGithub   className='text-[1.5rem]' /> </Link>
                                </li>
                                <li>
                                   <Link to="https://hng-stage2-alpha.vercel.app/" target='_blank' ><FaLink  className='text-[1.5rem]' /> </Link>
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
