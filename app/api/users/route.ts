import { NextResponse } from 'next/server';
import type { User } from '../../../types/user';

export async function GET() {
  const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@email.com' },
    { id: 2, name: 'Bob', email: 'bob@email.com' },
  ];

  return NextResponse.json(users);
}
