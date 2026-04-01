import { getUserPurchases } from '@/utils/purchasesApi';
import { NextResponse } from 'next/server';

export const revalidate = 3600;

export async function GET() {
  try {
    const products = await getUserPurchases();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Помилка серверу:', error);
    return NextResponse.json({ message: 'Помилка при отриманні покупок' }, { status: 500 });
  }
}
