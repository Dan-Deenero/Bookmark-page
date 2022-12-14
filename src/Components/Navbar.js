import logo from '../images/logo-bookmark.svg'
import logo2 from '../images/logo-bookmark copy.svg'
import burger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [image, setImage] = useState(burger);
    const [top, setTop] = useState("right-[-1500px]")


    const handleClick = () =>{
        if(top === "right-[-1500px]"){
            setTop("right-0")
        }else{
            setTop("right-[-1500px]")  
        }

    }

    return ( 
        <header className="body-font text-gray-600 ">
            <div className="mx-auto max-w-6xl flex gap-4 p-5 py-7 items-center justify-between">
                <a href='#' className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <img src={logo} alt="" />
                </a>
                <nav className="md:ml-auto hidden lg:flex gap-4 flex-wrap items-center justify-center text-sm ">
                    <a href='#' className="mr-5 hover:text-gray-900">FEATURES</a>
                    <a href='#' className="mr-5 hover:text-gray-900">PRICING</a>
                    <a href='#' className="mr-5 hover:text-gray-900">CONTACT</a>
                </nav>
                <button className="hidden lg:inline-flex text-white text-sm items-center border-primary-softRed bg-primary-softRed border-2 py-1 px-4 focus:outline-none hover:bg-white hover:text-primary-softRed hover:border-2 hover:border-primary-softRed rounded mt-4 md:mt-0">
                    LOGIN
                </button>
                <div className='lg:hidden' onClick={handleClick}>
                    <img src={burger} alt="burger" />
                </div>
            </div>
            <div className={`fix z-10 top-0 ${top} px-5 lg:hidden`}>
                <div className='flex py-1 pb-5 px-5 mb-5 items-center gap-14 justify-between'>
                    <a href='#' className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                        <img src={logo2} alt="" />
                    </a>
                    <div className='' onClick={handleClick}>
                        <img src={close} alt="burger" />
                    </div>
                </div>
                <div className='grid px-5 text-2xl font-normal h-72 w-full'>
                    <hr className='text-sm text-neutral-500'/>   
                    <a href='#' className="">FEATURES</a>
                    <hr className='text-sm text-neutral-500'/>
                    <a href='#' className="">PRICING</a>
                    <hr className='text-sm text-neutral-500'/>
                    <a href='#' className="">CONTACT</a>
                    <hr className='text-sm text-neutral-500'/>
                </div>
                <button className=" text-white text-2xl items-center border-white bg-transparent border-2 py-1 px-5
                sm:px-32 focus:outline-none hover:text-primary-softRed hover:border-2 hover:border-primary-softRed rounded mt-4 md:mt-0">LOGIN</button>
                <div className='flex w-full justify-center mt-32 gap-8'>
                    <img src={facebook} alt="facebook" className=''/>
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
        </header>
     );
}
 
export default Navbar;