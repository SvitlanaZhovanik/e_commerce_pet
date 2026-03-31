import { getDB } from '@/utils/api-routes';
import { NextResponse } from 'next/server';
export const revalidate = 3600;

export async function GET(request: Request) {
  try {
    const category = new URL(request.url).searchParams.get('category');
    if (!category) {
      return NextResponse.json({ message: 'Параметр категорії є обовʼязковим' }, { status: 400 });
    }
    const db = await getDB();
    const products = await db.collection('products').find({ categories: category }).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Помилка серверу:', error);
    const errorCode = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ message: `Помилка серверу:${errorCode}` });
  }
}
