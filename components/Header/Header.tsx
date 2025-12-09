import Link from 'next/link'
import {ThemeToggle} from '@/components/ThemeToggle/ThemeToggle'
import {Button} from '@/components/ui/button'
import {Menu} from 'lucide-react'

interface HeaderProps {
  showSidebarToggle?: boolean
  onSidebarToggle?: () => void
}

interface menuItemType {
  link: string
  name: string
  active?: boolean
}

const menuList: menuItemType[] = [
  {
    link: '/',
    name: 'Главная',
    active: true,
  },
  {
    link: '/about',
    name: 'О нас',
  },
]

export default function Header({
  showSidebarToggle = false,
  onSidebarToggle,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Левая часть: Логотип и навигация */}
        <div className="flex items-center gap-6">
          {/* Кнопка меню для мобильных (если нужно) */}
          {showSidebarToggle && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onSidebarToggle}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}

          {/* Логотип и название приложения */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  E
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">EasyList</span>
            </Link>

            {/* Версия приложения (опционально) */}
            <span className="hidden text-xs text-muted-foreground md:inline-block">
              v1.0.0
            </span>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center gap-6">
            {menuList.map((v: menuItemType, k) => {
              return (
                <Link
                  href={v.link}
                  className="text-sm font-medium transition-colors hover:text-primary">
                  {v.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Правая часть: Поиск, темы, пользователь */}
        <div className="flex items-center gap-4">
          {/* Поиск (опционально) */}
          <div className="hidden md:block relative w-64">
            <input
              type="search"
              placeholder="Поиск задач..."
              className="w-full rounded-lg border bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg
                className="h-4 w-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Переключение темы */}
          <ThemeToggle />

          {/* Уведомления (опционально) */}
          <Button variant="ghost" size="icon" className="relative">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>
        </div>
      </div>

      {/* Мобильная навигация */}
      <div className="md:hidden border-t">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-around">
            {menuList.map((v: menuItemType, k) => {
              return (
                <Link
                  href={v.link}
                  className="flex flex-col items-center text-xs">
                  <svg className="h-5 w-5 mb-1"></svg>
                  <span>{v.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
