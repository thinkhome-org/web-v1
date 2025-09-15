import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { IconEye, IconEyeOff } from "@tabler/icons-react"

const inputVariants = cva(
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        filled: "bg-muted border-transparent",
      },
      inputSize: {
        default: "h-9 px-3 py-1",
        sm: "h-8 px-2 text-xs",
        lg: "h-10 px-4 py-2",
      },
      state: {
        default: "border-input focus-visible:ring-ring",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
      state: "default",
    },
  }
)

export interface InputAdvancedProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string
  helperText?: string
  message?: string
  icon?: React.ReactNode
  showPasswordToggle?: boolean
}

const InputAdvanced = React.forwardRef<HTMLInputElement, InputAdvancedProps>(
  ({
    className,
    variant,
    inputSize,
    state,
    type,
    label,
    helperText,
    message,
    icon,
    showPasswordToggle = false,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [inputType, setInputType] = React.useState(type)

    React.useEffect(() => {
      if (type === "password" && showPasswordToggle) {
        setInputType(showPassword ? "text" : "password")
      } else {
        setInputType(type)
      }
    }, [type, showPassword, showPasswordToggle])

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            type={inputType}
            className={cn(
              inputVariants({ variant, inputSize, state }),
              icon && "pl-10",
              showPasswordToggle && type === "password" && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <IconEyeOff className="h-4 w-4" />
              ) : (
                <IconEye className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        {helperText && !message && (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        )}
        {message && (
          <p className={cn(
            "text-xs",
            state === "error" && "text-destructive",
            state === "success" && "text-green-600"
          )}>
            {message}
          </p>
        )}
      </div>
    )
  }
)
InputAdvanced.displayName = "InputAdvanced"

export { InputAdvanced, inputVariants }