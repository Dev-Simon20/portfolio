// src/app/api/health/route.ts
import { NextResponse } from 'next/server';
import { prismaShop } from '@/app/projects/my-little-shop/lib/shop-db';

export async function GET() {
  try {
    await prismaShop.$queryRaw`Select 1`; 
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error en health check:', error);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }
}
