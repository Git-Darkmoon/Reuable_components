"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { userSchema } from "@/validations/userSchema"
import Button from "./components/Button"
import InputBase from "./components/inputs/InputBase"
import { zodResolver } from "@hookform/resolvers/zod"

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

  // console.log(errors)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <section className="mx-auto max-w-2xl px-6 pt-12">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-tr from-purply to-indigo-600 bg-clip-text text-transparent mb-5">
          Subscribe new person
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-5 md:grid-cols-2"
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
                  registerFn={register}
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
      </div>
      {/* <div className="max-w-lg text-slate-300/50">
        {JSON.stringify(watch(), null, 2)}
      </div> */}
    </section>
  )
}

export default Home
