import { useState } from 'react';
import ig from '../images/illustration-features-tab-1.svg'
import data from './data.json';
const Tracks = () => {
    const [track, setTrack] = useState({
        name: "Simple Bookmarking",
        Image: ig,
        h1: "Bookmark in one click",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        btn: "More Info"
    });
    const tada = data
    

    const handleClick = (tad) => {
        setTrack({
            name: tad.name,
            Image: require("../images/" + tad.img),
            h1: tad.h1,
            text: tad.text,
            btn: tad.btn
        })
    }
    // console.log(track.Image);

    return ( 
        <section className="text-gray-600 body-font mt-20">
            <div className='flex-col gap-5 lg:gap-0 lg:flex-row flex  justify-center mb-5'>
                {tada && tada.map(dat =>{
                    return(
                        <div onClick={() => handleClick(dat)} className={track.name === dat.name ? "act" : ""} key={dat.id}>
                            <h2 className="px-7 cursor-pointer">{dat.name}</h2>                            
                            <hr className='mt-2 lg:hidden'/>
                        </div>
                    )
                })}

            </div>
                <hr className='mt-[-20px] max-w-6xl mx-auto  hidden lg:block'/>     
            <div className="container mx-auto flex px-4 py-10 gap-4 lg:gap-0 md:flex-row flex-col items-center max-w-6xl">
                <div className="lg:max-w-lg lg:w-full md:w-full w-full mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={track.Image}/>
                </div>
                <div className="lg:flex-grow md:w-2/2  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold tracking-normal text-gray-900">{track.h1}
                        {/* <br className="hidden lg:inline-block"/> */}
                    </h1>
                    <p className="mb-8 leading-relaxed">{track.text}</p>
                    <div className="flex justify-center">
                        <button className="hidden lg:inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{track.btn}</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Tracks;