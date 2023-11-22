'use client'
import React, { useState } from "react";
const AccordionItem = ({ title, content, index }) => {
    const [isExpanded, setExpanded] = useState(false);
    const handleToggle = () => {
        setExpanded(!isExpanded);
    };
    return (
        <div className="space-y-4 my-4 p-4 hover:bg-[#E0E0E0] border rounded-xl border-gray-200" data-accordion="collapse" data-active-classes="bg-white  dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            <h2 id={`accordion-flush-heading-${index}`}>
                <button
                    type="button"
                    onClick={handleToggle}
                    className="flex items-center justify-between w-full py-5 font-medium text-left     dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target={`#accordion-flush-body-${index}`}
                    aria-expanded={isExpanded}
                    aria-controls={`accordion-flush-body-${index}`}
                >
                    <span className="font-bold text-xl ">{title}</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 rotate-180 shrink-0 ${isExpanded ? 'rotate-0' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id={`accordion-flush-body-${index}`} className={`${isExpanded ? '' : 'hidden'}`} aria-labelledby={`accordion-flush-heading-${index}`}>
                <div className=" ">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
                </div>
            </div>
        </div>
    );
};
const Accordion = () => {
    const accordionData = [
        { title: 'Utperspiciatis unde omnis iste natus?', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.' },
        { title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem?df', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.' },
        { title: 'Utperspiciatis unde omnis iste natus?', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.' },
        { title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem?df', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.' },
        { title: 'Utperspiciatis unde omnis iste natus?', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.' },
        { title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem?df', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.' },
        // Add more accordion items as needed
    ];
    return (
        <div>
            {accordionData.map((item, index) => (
                <AccordionItem key={index} index={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
}
export default Accordion