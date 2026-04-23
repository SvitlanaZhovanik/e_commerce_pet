import { getCatalog } from '@/utils/catalogApi';
import { CatalogProps } from '@/types/catalog';
import { NextResponse } from 'next/server';
export const revalidate = 3600;

export async function GET() {
  try {
    const categories = await getCatalog();
    const serializedCatalog = categories.map(
      (category): CatalogProps =>
        ({
          ...category,
          _id: category._id.toString(),
        }) as CatalogProps,
    );
    return NextResponse.json(serializedCatalog);
  } catch (error) {
    console.error('Помилка серверу:', error);
    const errorCode = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ message: `Помилка серверу:${errorCode}` });
  }
}
