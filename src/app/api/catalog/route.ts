import { getCatalog } from '@/utils/catalogApi';
import { NextResponse } from 'next/server';
export const revalidate = 3600;

export async function GET() {
  try {
    const catalog = await getCatalog();
    return NextResponse.json(catalog);
  } catch (error) {
    console.error('Помилка серверу:', error);
    const errorCode = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ message: `Помилка серверу:${errorCode}` });
  }
}
