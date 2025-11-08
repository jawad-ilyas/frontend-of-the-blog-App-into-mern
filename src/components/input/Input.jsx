import { forwardRef, useId } from 'react'

const Input = ({ label = "Full Name : ", name, type = "text", placeholder = "Jone Doe", className = "", ...props }, ref) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="block text-xs font-medium text-rose-800 mb-2">
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                {...props}
                className={`${className} w-full rounded-lg border border-rose-300/50 bg-white/50 px-4 py-2.5 text-rose-900 placeholder-rose-400 outline-none focus:ring-2 focus:ring-rose-300`}
                ref={ref}
            />
        </div>
    )
}

export default forwardRef(Input)
