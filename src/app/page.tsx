"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { userSchema, mappedPlans } from "@/validations/userSchema"
import Button from "./components/Button"
import InputBase from "./components/inputs/InputBase"
import { zodResolver } from "@hookform/resolvers/zod"

import { MdOutlineMailOutline } from "react-icons/md"
import { Inputs } from "./types"
import { inputsList } from "./inputList"

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  })

  const plansOptions = Object.entries(mappedPlans).map(([key, value]) => (
    <option value={key} key={key}>
      {value}
    </option>
  ))

  console.log(errors)
  console.log(errors["name"])
  console.log(errors["password"]?.message)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className="px-12 pt-12">
      <h1 className="text-3xl font-bold text-[#c084fc] mb-3">Add person</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6 max-w-2xl"
      >
        {inputsList.map((input) => {
          const { id, label, type, placeholder } = input

          return (
            <div key={id}>
              <InputBase
                key={id}
                id={id}
                label={label}
                placeholder={placeholder}
                type={type}
                icon={<input.icon />}
              />
              {errors[id as keyof Inputs]?.message && (
                <p className="text-red-500 text-xs pt-1">
                  {errors[id as keyof Inputs]?.message}
                </p>
              )}
            </div>
          )
        })}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      <br />
      {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
    </div>
  )
}

export default Home
