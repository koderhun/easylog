'use server'
import postgres from 'postgres'
import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'})

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export {sql, cn}
