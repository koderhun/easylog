import {sql} from '@/lib/utils'
import type {easyListItemType} from '@/lib/types'

async function fetchList() {
  try {
    const data = await sql<easyListItemType[]>`SELECT * FROM easylist`

    return data
  } catch (error) {
    console.log('database error: ', error)
    throw new Error('failed to fetch revenue data')
  }
}

export {fetchList}
