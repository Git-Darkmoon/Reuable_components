import { IconType } from "react-icons"

export type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
  dayOfBirth: string
  weight: string
  plan: string
  dateOfBirth: string
}

export type InputProps = {
  id: string
  label: string
  icon?: React.ReactNode
  type: string
  placeholder: string
  registerFn?: void | any
}
