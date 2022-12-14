import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'

const Download = () => {
    return ( 
        <section className="text-gray-600 py-24 body-font ">
            <div className="container px-8  mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Download the extension</h1>
                    <p className="text-base leading-relaxed xl:w-2/5 tracking-normal w-3/4 lg:w-2/4 mx-auto text-gray-500s">We've got more browsers in the pipeline. Please do let us no if you've got a favourite you'd like us to prioritize.</p>           
                </div>
            </div>

            <div className='grid justify-center'>
                <div className='max-w-6xl mx-auto px-3 grid lg:grid-cols-3 gap-10'> 

                    <div className='down bg-white lg:mb-20 shadow-lg rounded-xl px-6 py-5 gap-9 text-center grid justify-center'>
                        <div className='grid gap-3 px-10'>
                            <img src={chrome} alt="chrome" className='mx-auto'/>
                            <h2 className='mt-2 font-bold text-black'>Add to Chrome</h2> 
                            <p className='text-gray-400'>Minimum version 62</p>
                        </div>
                        <div className='pt-5'>     
                            <button className="inline-flex text-white bg-primary-softBlue  py-3 px-10 focus:outline-none border-2 border-primary-softBlue hover:bg-white hover:border-2 font-bold hover:border-primary-softBlue hover:text-primary-softBlue rounded text-sm">Add & Install Extension</button> 
                        </div>
                    </div>

                    <div className='down bg-white shadow-lg lg:my-10 rounded-xl px-6 py-5 gap-9 text-center grid justify-center'>
                        <div className='grid gap-3 px-10'>
                            <img src={firefox} alt="firefox" className='mx-auto'/>
                            <h2 className='mt-2 font-bold text-black'>Add to Firefox</h2> 
                            <p className='text-gray-400'>Minimum version 55</p>
                        </div>
                        <div className='pt-5'>     
                            <button className="inline-flex text-white bg-primary-softBlue py-3 px-10 focus:outline-none border-2 border-primary-softBlue hover:bg-white hover:border-2 font-bold hover:border-primary-softBlue hover:text-primary-softBlue rounded text-sm">Add & Install Extension</button> 
                        </div>
                    </div>
                    
                    <div className='down bg-white shadow-lg lg:mt-20 rounded-xl px-6 py-5 gap-9 text-center grid justify-center'>
                        <div className='grid gap-3 px-10'>
                            <img src={opera} alt="opera" className='mx-auto'/>
                            <h2 className='mt-2 font-bold text-black'>Add to Opera</h2> 
                            <p className='text-gray-400'>Minimum version 46</p>
                        </div>
                        <div className='pt-5'>     
                            <button className="inline-flex text-white bg-primary-softBlue py-3 px-10 focus:outline-none border-2 border-primary-softBlue hover:bg-white hover:border-2 font-bold hover:border-primary-softBlue hover:text-primary-softBlue rounded text-sm">Add & Install Extension</button> 
                        </div>
                    </div>


                </div>
            </div>
        </section>
     );
}
 
export default Download;