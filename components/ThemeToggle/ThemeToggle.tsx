'use client'

import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'
import {Button} from '@/components/ui/button'
import {useEffect, useState} from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      title={`Переключить на ${theme === 'light' ? 'темную' : 'светлую'} тему`}>
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Переключить тему</span>
    </Button>
  )
}
