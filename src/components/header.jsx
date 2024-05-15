

import { useState } from 'react'
import { NavLink } from "react-router-dom"; 
import { GoDownload } from "react-icons/go";
import { Link as LinkScroll } from 'react-scroll';


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
                            <li className=''>
                                <LinkScroll onClick={handleLinkClick}to='/1' smooth={true} duration={100} spy={true} activeClass='active' offset={0} className={`text-xl font-[500] navLinkItem`}> Home </LinkScroll>
                            </li>
                            <li className='' >
                                <LinkScroll onClick={handleLinkClick} to='about' smooth={true} duration={100} spy={true} activeClass='active' offset={0} className={`text-xl font-[500] navLinkItem`}> About </LinkScroll>
                            </li>
                            <li className='' >
                                <LinkScroll onClick={handleLinkClick} to='projects' smooth={true} duration={100} spy={true} activeClass='active' offset={0} className={`text-xl font-[500] navLinkItem`}> Projects </LinkScroll>
                            </li>
                            <li className=''>
                                <LinkScroll onClick={handleLinkClick}  to='contact' smooth={true} duration={100} spy={true} activeClass='active' offset={0} className={`text-xl font-[500] navLinkItem`}> Contact </LinkScroll>
                            </li>
                    </nav>
                    <div className="hidden">
                        <h2>You can reach me at </h2>
                    </div>
                    <div className="hidden ">
                        <a className="button  flex items-center justify-center "> 
                            <div className="flex gap">
                                <span>Resume </span>
                                <span><GoDownload className='inline' /> </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="lg:block hidden">
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
  