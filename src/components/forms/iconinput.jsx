import React from 'react';
import Image from 'next/image';
const Iconinput = ({ type, placeholder, className }) => {
    return (
        <form>
            <div className={`flex ${className}`}>

                <button
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900  border border-gray-300 rounded-s-lg  bg-orange"
                    type="button"

                >
                    <Image src={"/icons/Date_today_light.svg"} width={20} height={20} sizes={'100vw'} />
                </button>
                <div className="relative w-full">
                    <input
                        type={type}
                        className="block p-2.5 outline-none w-full z-20 border  text-sm text-gray-900 border-gray-200  rounded-e-lg border-s-gray-50 border-s-2   focus:ring-orange focus:border-orange"
                        placeholder={placeholder}
                    />

                </div>
            </div>
        </form>
    );
};

export default Iconinput;
