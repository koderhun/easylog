import {Pencil, Trash2, Check, X} from 'lucide-react'
import {fetchList} from '@/lib/data'
import {easyListItemType} from '@/lib/types'

export default async function EasyList() {
  const items = await fetchList()
  console.log('ddd', items)

  return (
    <div className="overflow-x-auto rounded-lg border shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Заголовок таблицы */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
              №
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
              Статус
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Название
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
              Действия
            </th>
          </tr>
        </thead>

        {/* Тело таблицы */}
        <tbody className="bg-white divide-y divide-gray-200">
          {items.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                Нет данных для отображения
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr
                key={item.id}
                className={`hover:bg-gray-50 transition-colors`}>
                {/* Столбец № */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  {index + 1}
                </td>

                {/* Столбец Checkbox */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center"></div>
                </td>

                {/* Столбец Название */}
                <td className="px-6 py-4">{item.text}</td>

                {/* Столбец Кнопки */}
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-2">
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-md text-sm font-medium transition-colors"
                      title="Редактировать">
                      <Pencil size={14} />
                      <span>Редактировать</span>
                    </button>
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 rounded-md text-sm font-medium transition-colors"
                      title="Удалить">
                      <Trash2 size={14} />
                      <span>Удалить</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
