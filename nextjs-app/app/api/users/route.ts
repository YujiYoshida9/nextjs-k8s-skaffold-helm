import { NextResponse } from 'next/server';

// Handles GET requests to /api/users
export async function GET() {
  return NextResponse.json({ message: 'GET request successful' });
}