import { MdOutlineMailOutline } from "react-icons/md"
import { IoPerson } from "react-icons/io5"
import { FaLock, FaUnlock, FaCalendarDays } from "react-icons/fa6"
import { GiWeight } from "react-icons/gi"

export const inputsList = [
  {
    id: "name",
    label: "Your Name",
    icon: IoPerson,
    type: "text",
    placeholder: "Enter your name",
  },
  {
    id: "email",
    label: "Your Email",
    icon: MdOutlineMailOutline,
    type: "email",
    placeholder: "jhonDoe@gmail.com",
  },
  {
    id: "password",
    label: "Password",
    icon: FaUnlock,
    type: "password",
    placeholder: "*******",
  },
  {
    id: "confirmPassword",
    label: "Confirm your password",
    icon: FaLock,
    type: "password",
    placeholder: "*******",
  },
  {
    id: "dateOfBirth",
    label: "Date of Birth",
    icon: FaCalendarDays,
    type: "date",
    placeholder: "",
  },
  {
    id: "weight",
    label: "Weight (kg)",
    icon: GiWeight,
    type: "number",
    placeholder: "78",
  },
]
