import { InputProps } from "@/app/types"

function InputBase({
  id,
  label,
  icon,
  type,
  placeholder,
  registerFn,
}: InputProps & React.HTMLProps<HTMLInputElement>) {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-purply "
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
          className=" text-sm rounded-lg block w-full pl-10 p-2.5 bg-blackish border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          {...registerFn(id)}
        />
      </div>
    </>
  )
}
export default InputBase
