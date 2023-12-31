import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

interface Segments {
  params : {
    id:string
  }
}

export async function GET(request: Request, {params}:Segments) { 

  const id = params.id;

  const todo = await prisma.todo.findFirst({
    where:{id}
  })

  if ( !todo ) {
    return NextResponse.json({ message: `Todo con id ${ params.id } no exite` }, { status: 404 });
  }

  return NextResponse.json(todo);

}