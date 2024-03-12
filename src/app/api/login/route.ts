import { Login } from '@/app/global';
import { bq } from '@/app/server/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password }: Login = await req.json();

    const projectId = process.env.project_id;

    const table = `${projectId}.ee_tasking.account`;

    const query = `SELECT * FROM ${table} WHERE email='${email}'`;

    const [result] = await bq.query(query);

    if (!result.length) {
      throw new Error('No account with that email');
    }

    if (result[0].password !== password) {
      throw new Error('Wrong password');
    }

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    const { message } = error as Error;
    return NextResponse.json({ message }, { status: 404 });
  }
}
