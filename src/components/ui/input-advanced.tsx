"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";

const inputVariants = cva(
  "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-th-border-medium bg-th-bg-primary focus-visible:ring-th-primary-500",
        error:
          "border-th-semantic-error bg-th-bg-primary focus-visible:ring-th-semantic-error",
        success:
          "border-th-semantic-success bg-th-bg-primary focus-visible:ring-th-semantic-success",
        ghost:
          "border-transparent bg-th-bg-secondary focus-visible:ring-th-primary-500",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-9 px-3",
        lg: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    variant,
    size,
    type,
    label,
    error,
    success,
    helperText,
    leftIcon,
    rightIcon,
    showPasswordToggle,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    
    const inputType = showPasswordToggle && type === "password" 
      ? (showPassword ? "text" : "password")
      : type;
    
    const currentVariant = error ? "error" : success ? "success" : variant;
    
    const inputId = React.useId();
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId}
            className={cn(
              "th-body-small font-medium transition-colors",
              error ? "text-th-semantic-error" : "text-th-text-primary"
            )}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-th-text-muted">
              {leftIcon}
            </div>
          )}
          
          <input
            id={inputId}
            type={inputType}
            className={cn(
              inputVariants({ variant: currentVariant, size, className }),
              leftIcon && "pl-10",
              (rightIcon || showPasswordToggle || error || success) && "pr-10",
              isFocused && "ring-2"
            )}
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {error && (
              <AlertCircle className="h-4 w-4 text-th-semantic-error" />
            )}
            {success && !error && (
              <CheckCircle className="h-4 w-4 text-th-semantic-success" />
            )}
            {showPasswordToggle && type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-th-text-muted hover:text-th-text-primary transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            )}
            {rightIcon && !showPasswordToggle && !error && !success && (
              <div className="text-th-text-muted">{rightIcon}</div>
            )}
          </div>
        </div>
        
        {(error || success || helperText) && (
          <div className="space-y-1">
            {error && (
              <p className="th-caption text-th-semantic-error flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {error}
              </p>
            )}
            {success && !error && (
              <p className="th-caption text-th-semantic-success flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                {success}
              </p>
            )}
            {helperText && !error && !success && (
              <p className="th-caption text-th-text-muted">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };