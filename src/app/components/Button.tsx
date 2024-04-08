import { cva } from "class-variance-authority"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
}

export default function Button({
  variant,
  ...props
}: ButtonProps): JSX.Element {
  return <button {...props} className={buttonVariants({ variant })} />
}

const buttonVariants = cva(
  "py-2 px-4 rounded-md font-semibold text-lg hover:opacity-80",
  {
    variants: {
      variant: {
        primary: "bg-purply text-white",
        secondary: "bg-gray-200 text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)
