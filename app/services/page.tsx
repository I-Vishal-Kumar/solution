import { Navigation } from "@/components/navigation";
import { ServiceItem } from "../page";

export default function Services() {

    return (
        <main>
            <div className=" md:h-[60vh] pb-12 h-[30vh] w-full  pt-[4rem] px-4 flex flex-col relative z-0 ">
                <Navigation />
                <div className="flex-[1] text-center flex justify-end flex-col">
                    <p className="md:text-[6rem] leading-[50px] md:leading-normal md:mt-0 mt-5 text-4xl pr-3 font-semibold">
                        Services
                    </p>
                </div>
                <div className="absolute inset-0 bg-[#212d45]/90 opacity-90 -z-[1]"></div>
            </div>
            <div className="px-6 py-8 md:py-25">
                <div className="flex-[1.5] text-center text-gray-700">
                    <p className="text-2xl font-bold text-yellow-500">Our Services</p>
                    <p className="text-3xl lg:text-5xl leading-tight mt-4 font-bold">Quality Services</p>
                    <br />
                    <br />
                </div>
                <div className="grid lg:gap-3 gap-y-8 md:grid-cols-3 m-4 mt-12 grid-cols-1">
                    <ServiceItem src="/web_dev.png" heading="Website Development" subHeading="We create stunning, user-friendly websites aligned
            with your goals." />
                    <ServiceItem src="/social_marketing.png" heading="Social Media Marketing" subHeading="Run targeted ad campaigns on Facebook and Instagram to boost your brand visibility." />
                    <ServiceItem src="/google_ads.png" heading="Google Ads Management" subHeading="Maximize reach on Google with expertly managed campaigns. From keyword research to performance." />
                    <ServiceItem src="/branding.png" heading="Branding & Logo Design" subHeading="Create a unique brand identity with stunning logos and designs that reflect your business" />
                    <ServiceItem src="/ecommerce.png" heading="Ecommerce Development" subHeading="Launch an online store optimized for conversions, mobile-friendly" />
                    <ServiceItem src="/seo.png" heading="SEO" subHeading="Boost your search rankings and attract organic traffic with on-page optimization" />
                </div>
            </div>
        </main>
    )
}