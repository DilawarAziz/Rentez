import React from 'react'

function TextFeild({ value, name, register, paswordlable, placeholder, inputType, error, label, maxLength, minLength, className, formvalidate }) {
    return (
        <div className={`w-full ${className}`}>
            <label htmlFor="firstname" className={`block text-sm  font-semibold `}>
                {label}
            </label>
            <input
                name={name}
                type={inputType}
                placeholder={placeholder}
                className={`focus:ring-orange focus:border-orange  w-full border border-gray-200   mt-1 p-3 !py-2.5   focus:ring-primary outline-none focus:border-primary block  shadow-sm sm:text-sm  rounded-lg ${error?.Length ? '!border-[8px] outline-2 !border-red-700' : ""} `}
                {...register(name, { required: `${label ? label : 'feild'}  is required`, maxLength: maxLength, minLength: minLength })}
            />
            <span className='text-red-400 block text-[12px] mt-1  font-poppin font-normal'>{error}</span>
        </div>
    )
}

export default TextFeild