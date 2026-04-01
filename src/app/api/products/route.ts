import { getProductsByCategory } from '@/utils/productsApi';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET(request: Request) {
  try {
    const category = new URL(request.url).searchParams.get('category');

    if (!category) {
      return NextResponse.json({ message: 'Параметр категорії є обовʼязковим' }, { status: 400 });
    }

    const products = await getProductsByCategory(category);

    return NextResponse.json(products);
  } catch (error) {
    console.error('Помилка серверу:', error);

    return NextResponse.json({ message: 'Помилка серверу при отриманні товарів' }, { status: 500 });
  }
}
