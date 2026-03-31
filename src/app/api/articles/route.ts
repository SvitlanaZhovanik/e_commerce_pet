import { getDB } from '@/utils/api-routes';
import { NextResponse } from 'next/server';
export const revalidate = 3600;

export async function GET() {
  try {
    const db = await getDB();
    const articles = await db.collection('articles').find().toArray();
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Помилка серверу:', error);
    const errorCode = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ message: `Помилка серверу:${errorCode}` });
  }
}
