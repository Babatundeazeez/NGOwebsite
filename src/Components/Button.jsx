import React from 'react'

const Button = ({children, variant="primary", onClick}) => {

    const btn = "px-4 py-3 rounded-lg font-semibold transition duration-200"
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 py-3 rounded-lg font-semibold ",
        danger: "bg-red-600 text-white hover:bg-red-700",
        warning: "bg-yellow-400 text-white hover:bg-yellow-800",
       // success: "bg-green-400 text-white hover:bg-green-800",
        success : "bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100"

    }
  return (
    <div>
        <button onClick={onClick} className={`${btn} ${variants[variant]}`}>{children}</button>
    </div>
  )
}

export default Button