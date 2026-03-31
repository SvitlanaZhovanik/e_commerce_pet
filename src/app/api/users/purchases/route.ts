import { getDB } from '@/utils/api-routes';
import { NextResponse } from 'next/server';
export const revalidate = 3600;

export async function GET() {
  try {
    const db = await getDB();
    const user = await db.collection('users').findOne({});
    if (!user?.purchases?.length) {
      return NextResponse.json([]);
    }
    const productsIds = user.purchases.map((p: { productId: number }) => p.productId);
    const products = await db
      .collection('products')
      .find({ id: { $in: productsIds } })
      .toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Помилка серверу:', error);
    const errorCode = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ message: `Помилка серверу:${errorCode}` });
  }
}
