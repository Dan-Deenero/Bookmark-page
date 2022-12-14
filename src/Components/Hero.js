import hero from '../images/illustration-hero.svg'
const Hero = () => {
    return ( 
        <section className="text-gray-600 body-font sec">
            <div className="container mx-auto gap-10 lg:gap-0 max-w-6xl flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A Simple Bookmark
                        <br className="lg:inline-block"/>Manager
                    </h1>
                    <p className="mb-8 tracking-wide leading-relaxed">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
                    <div className="flex justify-center gap-4">
                        <button className="inline-flex text-white bg-primary-softBlue border-2 border-primary-softBlue py-2 px-4 focus:outline-none hover:bg-white hover:border-2 hover:border-primary-softBlue hover:text-primary-softBlue  rounded text-sm font-semibold">Get it on Chrome</button>
                        <button className="inline-flex text-gray-700 bg-gray-100 border-2 border-gray-100  py-2 px-4 focus:outline-none shadow-lg hover:bg-white hover:border-2 hover:border-gray-600 hover:text-gray-600  rounded text-sm font-semibold">Get it on Firefox</button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full order-first lg:order-last md:w-2/2 w-full">
                    <img className="object-cover object-center rounded" alt="hero" src={hero}/>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;