
import React from 'react'
import myImage from '../assets/myPicture2.jpg'
import { motion } from  'framer-motion';


const About = () => {



    const sliderVariants = {
        initial: {
          x: 0,
        },
        animate: {
          x: "-220%",
          transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 5,
            
          },
        },
      };
  return (
    <div id='about' className=' aboutssss relative overflow-hidden sm:pt-[120px] pt-[100px] sm:pb-[60px] pb-[50px] xl:px-[160px] lg:px-[90px] md:px-[60px] sm:[30px] px-[15px] h-full bg-mainBlack' >
        
        <div className="flex gap-[3px] items-center bg-mainBlack2 px-[15px] py-[8px] sm:w-[230px] w-[210px] rounded-[10px]">
            <span className='bg-HeaderTextColor w-[50px] h-[2px]      '></span>
            <h1 className=' text-white font-[500] text-HeaderTextColor sm:text-[2rem] text-[1.5rem]  rounded-[10px]' >About Me</h1>
        </div>
        
        <div className="text-textColor pt-[40px] px-[8px] aboutCont  flex gap-[50px] items-start justify-center">
            <div className="w-full lg:max-w-[900px] ">
                <p className='sm:text-[1.2rem]'  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="200"  data-aos-once="false"         >
                    Hi, I'm Farouk Akinsanya, a dedicated Frontend Engineer driven by a passion for crafting engaging and dynamic online experiences.
                    My development stack encompasses a diverse range of tools and frameworks, such as <span className='text-[#8c3fd8]'>React , Nodejs, Javascript, Typescript, Tailwindcss </span>ensuring versatility and adaptability in my projects <br/> Also, with a keen eye for design 
                    and a focus on user experience I bring together the power of these technologies to build scalable, interactive user interfaces, responsive, and visually appealing websites and  web applications. <br/><br/>
                    
                    I am always driven by the spirit of continuous learning and growth and I thrive on tackling new challenges and pushing the boundaries of my skills. Whether it's mastering a new technology or delving into uncharted territory, I approach each endeavor with enthusiasm and determination.
                    Beyond my coding endeavors, I derive great satisfaction from delving into side projects because it does not only helps me unleash my creativity but empower me to accomplish geat things.
                </p>
                <div className='relative '>
                        <motion.div
                            className="slidingTextContainer about"
                            variants={sliderVariants}
                            initial="initial"
                            animate="animate"
                            style={{ zIndex: 0 }}
                        >
                            About Me
                        </motion.div>
                    </div>
            </div>
            <div className="relative myImageWrapperCont w-[300px] "  data-aos="fade-left" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="ease-in-out " data-aos-offset="200"  data-aos-once="false"   >
          
                <div className="myImageWrapper relative" >
                    <div className="myImage max-w-[400px] " >
                        <div className="img"></div>
                        {/* <img src={myImage} className='img relative sm:w-[300px] w-[300px] h-[380px] object-contain'/> */}
                    </div>
                </div>
            </div>
        </div>
        

        <div className=" pt-[80px]">
            <div className=" flex gap-[3px] items-center bg-mainBlack2 px-[15px] py-[8px] sm:w-[380px] w-[310px] rounded-[10px]">
                <span className='bg-HeaderTextColor w-[50px] h-[2px]      '></span>
                <h1 className='font-[500] text-HeaderTextColor sm:text-[2rem] text-[1.5rem]  rounded-[10px]' >Tech stack and tool</h1>
            </div>
            <div className="tech-stack pt-[20px] flex flex-wrap gap-[10px] ">
                <span>React JS</span>
                <span>Next.js</span>
                <span>Javascript</span>
                <span>Typescript</span>
                <span>Nodejs</span>
                <span>Firebase</span>
                <span>React Redux</span>
                <span>Tailwind CSS</span>
                <span>CSS</span>
                <span>Html</span>
                <span>Framer motion</span>
                <span>Bootstrap</span>
                <span>Chakra-UI</span>
                <span>Material-UI</span>
                <span>Git</span>
                <span>Github</span>
                <span>Styled-Component</span>
                <span>Mysql</span>
                <span>Currently learning Flutter</span>
            </div>
        </div>
    </div>
  );
}

export default About;
