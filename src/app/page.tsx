"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { userSchema } from "@/validations/userSchema"
import Button from "./components/Button"
import Title from "./components/Title"
import InputBase from "./components/inputs/InputBase"
import { zodResolver } from "@hookform/resolvers/zod"

import { Inputs } from "./types"
import { inputsList } from "./inputList"

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  })

  // console.table(errors)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.table(data)
  }

  return (
    <section className="mx-auto max-w-2xl px-12 md:px-6 pt-14">
      <div>
        <Title variant="primary">Subscribe new person</Title>
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
    </section>
  )
}

export default Home
