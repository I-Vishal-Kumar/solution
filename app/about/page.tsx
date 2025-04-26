import { Navigation } from "@/components/navigation";
import Image from "next/image";
import { ReactNode } from "react";
import { BiBuilding } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { HiHome } from "react-icons/hi";

export default function About() {
    const Card: React.FC<{
        icon: ReactNode,
        heading: string,
        subHeading: string,
    }> = ({ heading, icon, subHeading }) => {
        return (
            <div className="md:py-0 py-8 md:flex items-center md:gap-x-5 z-0 w-full rounded-md  relative">
                <div className="h-15 bg-yellow-500 text-4xl grid place-content-center w-15 rounded-full relative overflow-clip">
                    {icon}
                </div>
                <div className="z-2 mt-5 text-gray-800 flex-1">
                    <p className="text-2xl  font-bold">{heading}</p>
                    <p className="text-md mt-3">{subHeading}</p>
                </div>
            </div>
        )
    }
    return (
        <main>
            <div className=" md:h-[60vh] pb-12 h-[30vh] w-full  pt-[4rem] px-4 flex flex-col relative z-0 ">
                <Navigation />
                <div className="flex-[1] text-center flex justify-end flex-col">
                    <p className="md:text-[6rem] leading-[50px] md:leading-normal md:mt-0 mt-5 text-4xl pr-3 font-semibold">
                        About Us
                    </p>
                </div>
                <div className="absolute inset-0 bg-[#212d45]/90 opacity-90 -z-[1]"></div>
            </div>
            <div className="md:flex px-6 py-8 md:py-25">
                <div className="flex-[1.5] text-gray-700">
                    <p className="text-2xl font-bold text-yellow-500">About Us</p>
                    <p className="text-3xl lg:text-5xl leading-tight mt-4 font-bold">We Are Leading Marketing Company In The World</p>
                    <p className="text-sm text-balance mt-2">
                        Our team of experienced professionals is always ahead of the curve when it comes to the latest trends and techniques in digital marketing.
                    </p><br /><br />
                    <p className="text-sm text-balance">
                        Gen Solution was founded with a mission to bridge the gap between businesses and their digital potential. Starting as a small venture, we have evolved into a team of passionate professionals committed to delivering top-notch digital marketing solutions. From website development to SEO, paid advertising, and social media management, we help businesses unlock opportunities for sustainable growth.  </p>

                    <br />
                    <br />
                    <br />
                    <button type="button" className="px-4 py-2 text-black bg-yellow-500">CONTACT US</button>

                </div>
                <div className="flex-1 grid items-center">
                    <div className="grid gap-2 grid-cols-1">
                        <Card icon={
                            <BiBuilding />
                        } heading="Tailored Solutions" subHeading="We understand that every business is unique. That’s why we create custom strategies that suit your specific goals." />
                        <Card icon={
                            <BsBank />
                        } heading="Data-Driven Approach" subHeading="Our team uses the latest tools and analytics to track, measure, and refine campaigns, ensuring maximum ROI." />
                        <Card icon={
                            <HiHome />
                        } heading="Experienced Professionals" subHeading="With years of experience in the digital marketing space, our team knows what works and what doesn’t." />
                    </div>
                </div>
            </div>
        </main>
    )
}