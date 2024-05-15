
import { motion } from  'framer-motion';
import React from 'react';
import Typed from 'typed.js';
import { AiOutlineMessage } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {

    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Curious about what lies ahead?', 'Together, we can turn ideas into reality.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false, 
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);




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
    <div >
        <div id='contact' className=" relative overflow-hidden ContactContainer md:pt-[110px] pt-[90px] px-[10px] h-full xl:px-[100px] md:px-[60px] pb-[100px] sm:pb-[100px]">
            <div className=" flex gap-[3px] items-center bg-mainBlack2 px-[15px] py-[8px] sm:w-[260px] w-[260px] rounded-[10px]">
                <span className='bg-HeaderTextColor w-[50px] h-[2px] '></span>
                <h1 className='font-[500] text-HeaderTextColor sm:text-[2rem] text-[1.5rem]  rounded-[10px]' > Contact Me</h1>
            </div>
            
            <div className='pt-[40px] text-center'>
                <p className='text-textColor  text-[1.3rem] text-center'> 
                    Let's Connect
                </p>
                <div className='pt-[20px] w-full text-BgColor font-[600] sm:text-[4rem] text-[.9rem] text-center'>
                   <h1 ref={el} className=''/>
                   <p className="mina text-textColor pt-[20px] max-w-[1000px] w-full mx-[auto] sm:text-[1.1rem] text-[.9rem] text-center " > Whether you have inquiries, project concepts, or simply want to drop a friendly "Hello," don't hesitate to reach out. 
                    <br/>I'm thrilled to engage in a conversation and explore the possibilities of transforming your web development ideas into 
                    something extraordinary.
                </p>
                </div>

                <div className='flex justify-center items-center pt-[50px] pointer '>
                    <a href='mailto:aremu.script@gmail.com' className="ContactButton">Say Hello</a>
                </div>
            </div>


                     <div className="contact-social-handle pt-[60px]">
                        
                        <h2 className='text-HeaderTextColor sm:text-[1.5rem] text-[1.1rem] text-center   '>You can reach out with me via:</h2>
                        <ul className='flex justify-center items-center gap-[15px] pt-[30px]'>
                            <li className="imna"data-delay=".7s">
                                <a href="https://github.com/aremuumera">
                                <FaGithub className='text-textColor text-[2rem]'/>
                                </a>
                            </li>
                            <li className="imna" data-delay=".7.8s">
                                <a href="https://www.linkedin.com/in/farouk-akinsanya-993563236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
                                    <FaLinkedinIn  className='text-textColor text-[2rem]'/>
                                </a>
                            </li>
                            <li className="imna" data-delay=".8.8s">
                                <a href="https://twitter.com/aremu_umera">
                                    <FaXTwitter className='text-textColor text-[2rem]' />
                                </a>
                            </li>
                            <li className="imna" data-delay=".9.8s">
                                <a href="mailto:aremu.script@gmail.com" target="_blank">
                                    <AiOutlineMessage className='text-textColor text-[2rem]' />
                                </a>
                            </li>
                            <li className="imna" data-delay=".9.8s">
                                <a href="https://wa.me/08050255377" target="_blank">
                                  <FaWhatsapp  className='text-textColor text-[2rem]' />
                                </a>
                            </li>
                        </ul>
                    </div>

            <div className='relative '>
                        <motion.div
                            className="slidingTextContainer contact"
                            variants={sliderVariants}
                            initial="initial"
                            animate="animate"
                        >
                            Let's Connect 
                        </motion.div>
                    </div>

        </div>      

        <div className='bg-mainBlack py-[15px] w-full text-center     ' >
                <p className='text-[.75rem] text-textColor hover:text-BgColor '>Built by Farouk Akinsanya |  © 2024 aremu_umera</p>
        </div>
    </div>
  )
}

export default Contact
