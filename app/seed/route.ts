import bcrypt from 'bcrypt'
import postgres from 'postgres'
import {easylist} from '@/lib/placeholder-data'

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'})

async function seedEasyList() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

  await sql`
    CREATE TABLE IF NOT EXISTS easylist (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      text VARCHAR(255) NOT NULL,
      checked BOOLEAN DEFAULT FALSE,
      date DATE NOT NULL
    );
  `

  const insertEasyList = await Promise.all(
    easylist.map((item) => {
      return sql`
        INSERT INTO easylist (id, text, checked, date)
        VALUES (gen_random_uuid(), ${item.text}, ${item.checked}, ${item.date})
        ON CONFLICT (id) DO NOTHING;
      `
    }),
  )

  return insertEasyList
}

export async function GET() {
  console.log('gggget')
  try {
    const result = await sql.begin((sql) => [seedEasyList()])
    return Response.json({message: 'Database seeded successfully'})
  } catch (error) {
    return Response.json({error}, {status: 500})
  }
}
