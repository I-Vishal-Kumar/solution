'use client'

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export function ContactUs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqItems = [
        { id: 1, question: "What services does your company provide?", answer: "We provide SEO, social media marketing, content marketing, paid ads, and analytics services tailored to your business." },
        { id: 2, question: "How long does it take to see results from digital marketing?", answer: "Typically, results can be seen in 3 to 6 months depending on the strategy and competition." },
        { id: 3, question: "Do you provide customized solutions for businesses?", answer: "Yes, we create personalized marketing plans based on each business's goals and budget." },
        { id: 4, question: "How do you measure the success of a marketing campaign?", answer: "We use KPIs like traffic growth, lead generation, conversion rate, and ROI to track campaign performance." },
    ];

    return (
        <div className="w-full pb-20 z-10">
            <div className="lg:flex">
                <div className="relative bg-[#212d45] p-8 lg:p-18 text-white-800 space-y-4 flex-1">
                    <p className="text-3xl font-bold text-slate-50">Request a Quote</p>
                    <p className="text-sm">Ready to Work Together? Build a project with us!</p>
                    <input type="text" className="bg-white w-full p-3 text-black" name="name" placeholder="Enter your name" />
                    <input type="text" className="bg-white w-full p-3 text-black" name="email" placeholder="Enter your email address" />
                    <input type="text" className="bg-white w-full p-3 text-black" name="name" placeholder="Subject" />
                    <textarea rows={4} className="w-full bg-white text-black p-3" placeholder="Message" />
                    <button type="button" className="px-4 mt-5 py-2 text-black bg-yellow-500">SEND MESSAGE</button>
                </div>

                <div className="p-8 lg:flex lg:flex-col justify-center lg:p-18 space-y-4 text-gray-800 pb-2 relative flex-1">
                    <p className="text-2xl text-yellow-500 font-bold ">Learn More From</p>
                    <p className="text-4xl font-bold">Frequently Asked Questions.</p>
                    <div className="mt-8">
                        {faqItems.map((item, index) => (
                            <div key={item.id} className="border border-gray-300 rounded">
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
                                >
                                    <span>{item.question}</span>
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 text-sm text-gray-600 border-t border-gray-200">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}