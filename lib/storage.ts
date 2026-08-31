import 'server-only'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), '.data')

export async function appendRecord(fileName: string, record: Record<string, unknown>) {
  await fs.mkdir(DATA_DIR, { recursive: true })
  const filePath = path.join(DATA_DIR, fileName)
  let records: Record<string, unknown>[] = []
  try {
    const raw = await fs.readFile(filePath, 'utf-8')
    records = JSON.parse(raw)
  } catch {
    records = []
  }
  records.push({ ...record, submittedAt: new Date().toISOString() })
  await fs.writeFile(filePath, JSON.stringify(records, null, 2))
}
