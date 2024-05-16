

import { useState } from 'react'
import { NavLink } from "react-router-dom"; 
import { GoDownload } from "react-icons/go";
import { Link as LinkScroll } from 'react-scroll';
import { AiOutlineMessage } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Header = () => {

    const [navBar, setNavBar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);


  const stickyHeader = () => {
      if(window.scrollY >= 80){
        setNavBar(true);
      }else{
        setNavBar(false);
      } 
  }
    
  window.addEventListener('scroll', stickyHeader);
  
  const Checked = () =>{
    setOpenMenu(!openMenu);
  }

  const handleLinkClick = () => {
    setOpenMenu(false); 
    const checkbox = document.getElementById('checkbox2');
    if (checkbox) {
      checkbox.checked = false; 
    }
  };


  return (
    <div >
        <div className={`fixed w-full mt-[0] sm:px-[100px] justify-center items-center  px-[20px] py-[15px] z-[10000000] ${navBar ? "stickyHeader" : "stickyHead"} `}>
            <div className="header-cont flex  justify-between  items-center ">
                <div className={`logo Name  `}>
                    <h5 className='text-[2rem] tracking-[.2rem] font-bold text-white '>aremu.</h5>
                </div>
                <div className={`navLink ${openMenu ? 'open slide-in-right-Home' : '' }  `}>
                    <nav className={`flex items-center gap-[50px]   nav `}>
                            <li className='slide-in-right-Home'>
                                <LinkScroll onClick={handleLinkClick}to='/1' smooth={true} duration={100} spy={true} activeClass='active' offset={0} className={`text-xl font-[500] navLinkItem  `}> Home </LinkScroll>
                            </li>
                            <li className='slide-in-right-About' >
                                <LinkScroll onClick={handleLinkClick} to='about' smooth={true} duration={100} spy={true} activeClass='active' offset={0} className={`text-xl font-[500] navLinkItem  `}> About </LinkScroll>
                            </li>
                            <li className='slide-in-right-Project' >
                                <LinkScroll onClick={handleLinkClick} to='projects' smooth={true} duration={100} spy={true} activeClass='active' offset={0} className={`text-xl font-[500] navLinkItem `}> Projects </LinkScroll>
                            </li>
                            <li className='slide-in-right-Contact'>
                                <LinkScroll onClick={handleLinkClick}  to='contact' smooth={true} duration={100} spy={true} activeClass='active' offset={0} className={`text-xl font-[500] navLinkItem `}> Contact </LinkScroll>
                            </li>
                    </nav>
                    <div className="min-[1024px]:hidden   socialHeader">
                            <div className="contact-social-handle pt-[10px]">
                            
                            <h2 className='text-HeaderTextColor sm:text-[1.5rem] text-[1.1rem] text-center  fade-in-bottom-socialHeaderText '>You can reach out with me via:</h2>
                            <ul className='flex justify-center items-center gap-[15px] pt-[30px] fade-in-bottom-SocialHeaderIcon'>
                                <li className="imna">
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
                                    <a href="https://wa.me/+2348050255377" target="_blank">
                                    <FaWhatsapp  className='text-textColor text-[2rem]' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="min-[1024px]:hidden flex items-center justify-center  text-center pt-[40px] resumeHeader  fade-in-bottom-socialResume">
                        <a className="button rounded-[10px]  flex items-center justify-center "> 
                            <a href='#' className="flex gap">
                                <span>Resume </span>
                                <span><GoDownload className='inline' /> </span>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="lg:block hidden fade-in-bottom-socialResume">
                    <button className="button flex items-center gap-[10px]">
                    Resume <span> <GoDownload /> </span>
                    </button>
                </div>
                <div className=" lg:hidden  menu ">
                    <input onClick={Checked}  id="checkbox2" type="checkbox"  className='check-icon hidden'/>
                    <label className="icon-menu toggle toggle2 " htmlFor="checkbox2">
                    <div id="bar4" className="bars"></div>
                    <div id="bar5" className="bars"></div>
                    <div id="bar6" className="bars"></div>
                    </label>
                </div> 
            </div>    
        </div>
        
    </div>
  )
}

export default Header
  