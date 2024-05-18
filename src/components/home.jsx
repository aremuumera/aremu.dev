import { GoDownload } from "react-icons/go"
import { AiOutlineDingtalk } from "react-icons/ai"
import { Link } from "react-router-dom"
import { Link as LinkScroll } from 'react-scroll';


const Home = () => {
  return (
    <div>
        <div id='/1' className="Hero md:h-[700px] h-full pb-[50px] w-full text-white text-center">
            <div className="homeCont xl:px-[200px] lg:pt-[300px] sm:pt-[230px] pt-[180px] lg:px-[70px] sm:px-[30px] px-[8px] ">
              <h1  className="xixa   fade-in-bottom-a text-[4.5rem]  leading-[0px] font-[700] max-[925px]:text-[3rem] max-[595px]:text-[2rem] max-[595px]:height-[100%] max-[412px]:text-[1.8rem] max-[350px]:text-[1.5rem] max-[300px]:text-[.9rem] w-full" data-delay=".8s" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Hi, I'm Farouk Akinsanya,  </h1>   
              <h2 id="myName" className=" fade-in-bottom-b xixa sm:pt-[38px] sm:pb-[20px] pt-[28px] pb-[10px] text-[4rem] font-[700] max-[925px]:text-[3rem] max-[595px]:text-[2rem] max-[350px]:text-[1.5rem] " data-delay="1s" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"> A Frontend Engineer</h2>  
              <p className="sm:text-[1.2rem] text-[.95rem] fade-in-bottom-c xixa font-[300] tracking-[1px] pt-[10px]  " data-delay="1.5s"  data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">
              I am confident that every concept holds potential for execution and I find immense joy in crafting digital 
              entities that reside on the internet either websites, applications, or anything in the vast digital landscape.
              </p>
            </div>
            <div className=" pt-[40px] flex justify-center gap-[5px] min-[360px]:gap-[30px]"> 
                <Link to='https://drive.google.com/file/d/1dZgFP9-3YaxJvFaPgYr2104ygsYEaNkU/view?usp=drivesdk' download className="button HomeButton fade-in-bottom-d flex items-center gap-[10px]">
                    Resume <span> <GoDownload /> </span>
                </Link>
                <LinkScroll to='contact' className="button HomeButton fade-in-bottom-d  bg-BgColor flex items-center gap-[4px] min-[360px]:gap-[10px]">
                    Let's Talk <span> <AiOutlineDingtalk /> </span>
                </LinkScroll>
            </div>
        </div>
        
      
    </div>
  )
}

export default Home
