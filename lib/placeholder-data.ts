import type {easyListItemType} from '@/lib/types'

// Генерация уникального ID (можно использовать nanoid или crypto в реальном проекте)
const generateId = (id: number) => `${id}`

// Массив из 20 объектов
const easylist: easyListItemType[] = [
  {
    id: generateId(1),
    text: 'Купить молоко и хлеб в супермаркете',
    checked: true,
    date: '2023-08-23',
  },
  {
    id: generateId(2),
    text: 'Записаться на прием к стоматологу на следующей неделе',
    checked: false,
    date: '2023-08-24',
  },
  {
    id: generateId(3),
    text: 'Подготовить отчет по проекту до конца недели',
    checked: true,
    date: '2023-08-25',
  },
  {
    id: generateId(4),
    text: 'Позвонить родителям и узнать как у них дела',
    checked: false,
    date: '2023-08-26',
  },
  {
    id: generateId(5),
    text: 'Оплатить счета за коммунальные услуги до 25 числа',
    checked: true,
    date: '2023-08-27',
  },
  {
    id: generateId(6),
    text: 'Заказать новую книгу по программированию на Amazon',
    checked: false,
    date: '2023-08-28',
  },
  {
    id: generateId(7),
    text: 'Сделать резервную копию важных файлов с компьютера',
    checked: true,
    date: '2023-08-29',
  },
  {
    id: generateId(8),
    text: 'Записаться в спортзал и составить план тренировок',
    checked: false,
    date: '2023-08-30',
  },
  {
    id: generateId(9),
    text: 'Изучить новые возможности TypeScript 5.0',
    checked: true,
    date: '2023-08-31',
  },
  {
    id: generateId(10),
    text: 'Создать презентацию для встречи с клиентом в понедельник',
    checked: false,
    date: '2023-09-01',
  },
  {
    id: generateId(11),
    text: 'Проверить обновления безопасности на всех серверах',
    checked: true,
    date: '2023-09-02',
  },
  {
    id: generateId(12),
    text: 'Забронировать билеты на самолет для отпуска в октябре',
    checked: false,
    date: '2023-09-03',
  },
  {
    id: generateId(13),
    text: 'Написать тесты для нового модуля авторизации',
    checked: true,
    date: '2023-09-04',
  },
  {
    id: generateId(14),
    text: 'Обновить резюме и добавить последние проекты',
    checked: false,
    date: '2023-09-05',
  },
  {
    id: generateId(15),
    text: 'Купить подарок другу на день рождения на следующей неделе',
    checked: true,
    date: '2023-09-06',
  },
  {
    id: generateId(16),
    text: 'Оптимизировать производительность веб-приложения',
    checked: false,
    date: '2023-09-07',
  },
  {
    id: generateId(17),
    text: 'Прочитать новую статью о React Server Components',
    checked: true,
    date: '2023-09-08',
  },
  {
    id: generateId(18),
    text: 'Провести code review для пулл-реквеста коллеги',
    checked: false,
    date: '2023-09-09',
  },
  {
    id: generateId(19),
    text: 'Настроить CI/CD пайплайн для автоматического деплоя',
    checked: true,
    date: '2023-09-10',
  },
  {
    id: generateId(20),
    text: 'Запланировать встречу с командой для обсуждения архитектуры',
    checked: false,
    date: '2023-09-11',
  },
]

export type {easyListItemType}
export {easylist}
