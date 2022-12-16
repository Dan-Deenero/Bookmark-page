import logo2 from '../images/logo-bookmark copy.svg';
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import error from '../images/icon-error.svg'
import { useState } from 'react';


const Footer = () => {
    const [err, setErr] = useState("hidden");
    const handleChange = e =>{
        // console.log(e.target.value.length);
        
        if(!e.target.value.includes("@") || e.target.value.length < 6){
            setErr("")
        }else{
            setErr("hidden")
        }
    }

    return ( 
        <footer className="w-full">
                <div className="bg-primary-softBlue w-full grid justify-center items-center">
                    <div className="max-w-xl tracking-wider grid justify-center container py-10  px-3  gap-8 text-center">
                        <h5 className="text-white ">35,000+ ALREADY JOINED</h5>
                        <h2 className="text-white font-bold text-3xl">Stay up-to-date with what we're doing</h2>
                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className='bg-primary-softRed rounded-md px-1'>
                                <div className='flex pt-1'>   
                                    <input type="email" placeholder="Enter your email address" className="py-4 px-4 w-full lg:w-80 rounded-l-md focus:outline-none" onChange={handleChange}/>
                                    <div className={`bg-white flex justify-center items-center px-5 rounded-r-md `}>
                                        <img src={error} alt="" />
                                    </div>
                                </div>
                                <div className={`bg-primary-softRed rounded-b-lg text-gray-300 font-semibold text-sm text-start pl-2 ${err}`}>whoops, make sure it's an email</div>
                            </div>
                            <button className=" text-white text-md items-center h-14 border-primary-softRed bg-primary-softRed border-2 py-3 lg:px-7 focus:outline-none hover:bg-white hover:text-primary-softRed hover:border-2 hover:border-primary-softRed rounded mt-4 md:mt-0">Contact Us</button>
                        </div>
                    </div> 
                </div>
                <div className="bg-neutral-veryDarkBlue">
                    <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-8 text-center justify-center p-5 py-7 items-center">
                        <a href='#' className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                            <img src={logo2} alt="" />
                        </a> 
                        <nav className="ml-6 text-white grid lg:flex gap-8 items-center justify-center text-sm ">
                            <a href='#' className=" hover:text-primary-softRed">FEATURES</a>
                            <a href='#' className=" hover:text-primary-softRed">PRICING</a>
                            <a href='#' className=" hover:text-primary-softRed">CONTACT</a>
                        </nav>
                        <div className='lg:ml-auto flex gap-5'>
                            <img src={facebook} alt="facebook" className=''/>
                            <img src={twitter} alt="twitter" />
                        </div>
                    </div>
                </div>
        </footer>
     );
}
 
export default Footer;