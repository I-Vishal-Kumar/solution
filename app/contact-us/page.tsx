import { Navigation } from "@/components/navigation";

export default function ContactUs() {

    return (
        <main>
            <div className=" md:h-[60vh] pb-12 h-[30vh] w-full  pt-[4rem] px-4 flex flex-col relative z-0 ">
                <Navigation />
                <div className="flex-[1] text-center flex justify-end flex-col">
                    <p className="md:text-[6rem] leading-[50px] md:leading-normal md:mt-0 mt-5 text-4xl pr-3 font-semibold">
                        Contact Us
                    </p>
                </div>
                <div className="absolute inset-0 bg-[#212d45]/90 opacity-90 -z-[1]"></div>
            </div>
            <div className="px-6 py-8 md:py-25">
                <div className="text-center text-gray-700">
                    <p className="text-2xl font-bold text-yellow-500">Our Branches</p>
                    <p className="text-3xl lg:text-5xl leading-tight mt-4 font-bold">Contact Details</p>
                    <br />
                    <br />
                </div>
                <div className="w-full z-10">
                    <div className="lg:flex">
                        <div className="relative  text-gray-800 lg:p-18 pb-2 text-white-800 space-y-8 flex-1">
                            <p className="text-xl font-bold">Registered Office</p>
                            <div>
                                <p className="text-xl font-bold">Address:</p>
                                <p className="text-sm ">03, LARI KALAN FANIKPUR RAMGARH Jhārkhand India 825101.</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">Phone:</p>
                                <p className="text-sm ">+91 9102206912</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">Email:</p>
                                <p className="text-sm ">info@gensolution.in</p>
                                <p className="text-sm ">gensolution4@gmail.com</p>
                            </div>
                            <button type="button" className="px-4 mt-8 py-2 text-black bg-yellow-500">GET APPOINTMENT</button>
                        </div>
                        <div className=" flex-[2] py-8 lg:flex lg:flex-col justify-center lg:p-18 space-y-4 text-gray-800 pb-2 relative ">
                            <iframe
                                title="Gen Solution Office Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.462211422551!2d85.52504717583929!3d23.554597597793257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f43332aa3fd5cf%3A0x4098d18fd46463db!2sFanikpur%2C%20Ramgarh%2C%20Jharkhand%20825101!5e0!3m2!1sen!2sin!4v1714031478356!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                className="rounded-md w-full border-none"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}