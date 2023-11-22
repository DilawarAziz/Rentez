'use client'

import React from 'react'

const Button = ({ children, className, onClick, type }) => {
  return (
    <button onClick={onClick} type={type} className={`focus:ring-primary hover:scale-110 transition-all   text-white font-inter py-2 px-4 rounded-lg bg-primary hover:bg-[#5168cc] ${className}`}>{children}</button>
  )
}

export default Button