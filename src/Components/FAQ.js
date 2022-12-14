import arrow from '../images/icon-arrow.svg'
const FAQ = () => {
    

   

    return (  
        <section className=" body-font ">
            <div className="container px-8 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Frequently Asked Questions</h1> 
                    <p className="text-base leading-relaxed xl:w-2/5 tracking-normal w-3/4 lg:w-2/4 mx-auto text-gray-500s">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to mail us.</p>           
                </div>

                <div className="mx-auto max-w-xl">
                    <hr />
                    <details className="w-full cursor-pointer mb-1">
                        <summary className="w-full font-semibold text-dark flex justify-between px-4 py-3  after:content-['+']">What is Bookmark?</summary>
                        <p className="px-4 py-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, in tenetur eius et, iusto possimus earum ex necessitatibus fuga harum perspiciatis veniam culpa vero quibusdam commodi est, aliquam iste temporibus.
                        </p>
                    </details>
                    <hr />
                    <details className="w-full cursor-pointer mb-1">
                        <summary className="w-full font-semibold text-dark flex justify-between px-4 py-3  after:content-['+']">How can I request a new browser?</summary>
                        <p className="px-4 py-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, in tenetur eius et, iusto possimus earum ex necessitatibus fuga harum perspiciatis veniam culpa vero quibusdam commodi est, aliquam iste temporibus.
                        </p>
                    </details>
                    <hr />
                    <details className="w-full cursor-pointer mb-1">
                        <summary className="w-full font-semibold text-dark flex justify-between px-4 py-3  after:content-['+']">Is there a mobile app?</summary>
                        <p className="px-4 py-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, in tenetur eius et, iusto possimus earum ex necessitatibus fuga harum perspiciatis veniam culpa vero quibusdam commodi est, aliquam iste temporibus.
                        </p>
                    </details>
                    <hr />
                    <details className="w-full cursor-pointer mb-1">
                        <summary className="w-full font-semibold text-dark flex justify-between px-4 py-3  after:content-['+']">What about other Chromium browsers?</summary>
                        <p className="px-4 py-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, in tenetur eius et, iusto possimus earum ex necessitatibus fuga harum perspiciatis veniam culpa vero quibusdam commodi est, aliquam iste temporibus.
                        </p>
                    </details>
                    <hr />
                        
                    <div className='w-full grid justify-center mt-10'>
                        <button className="hidden lg:inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">More Info</button>
                    </div>
                </div>
            </div>
        </section>
     );

}
 
export default FAQ;