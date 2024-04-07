type InputProps = {
  id: string
  label: string
  icon?: React.ReactNode
  type: string
  placeholder: string
}

function InputBase({ id, label, icon, type, placeholder }: InputProps) {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-[#c084fc] "
      >
        {label}
      </label>
      <div className="relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-300">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          className=" text-sm rounded-lg block w-full pl-10 p-2.5  bg-[#212132] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </>
  )
}
export default InputBase
