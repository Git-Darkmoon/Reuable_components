import { cva } from "class-variance-authority"

type TitleProps = React.ButtonHTMLAttributes<HTMLHeadElement> & {
  variant?: "primary" | "secondary"
}

export default function Title({ variant, ...props }: TitleProps): JSX.Element {
  return <h1 {...props} className={titleVariants({ variant })} />
}

const titleVariants = cva("text-4xl font-bold mb-5", {
  variants: {
    variant: {
      primary:
        "bg-gradient-to-tr from-purply to-indigo-600 bg-clip-text text-transparent",
      secondary: "text-slate-300",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})
