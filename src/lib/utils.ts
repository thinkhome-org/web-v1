import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Re-export design system utilities for convenience
export { 
  getColor, 
  getColorVar, 
  getBreakpoint, 
  getSpacing, 
  getTypography,
  colors,
  typography,
  spacing,
  sizing,
  breakpoints,
  borderRadius,
  shadows,
  animations,
  zIndex
} from "./design-system"
