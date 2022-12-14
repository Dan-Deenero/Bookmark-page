import Tracks from "./Tracks";

const Features = () => {
    return ( 
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10  mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Features</h1>
                    <p className="text-base leading-relaxed xl:w-2/5 tracking-normal lg:w-2/4 mx-auto text-gray-500s">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go</p>
                    <Tracks/>
                </div>
            </div>
        </section>
     );
}
 
export default Features;