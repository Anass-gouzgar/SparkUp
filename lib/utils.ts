import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("fr-MA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}