// Тип для элемента списка
type easyListItemType = {
  id: string
  text: string // максимум 512 символов
  checked: boolean
  date: string // формат YYYY-MM-DD
}

export type {easyListItemType}
