import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AppService {
  shoutout(name: string): string {
    return `shoutout to ${name}!`;
  }

  async login(body: any) {
    const { email, password } = body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user?.password === password) {
      return { user };
    }
    return { error: 'Invalid login' };
  }

  async register(body: any) {
    const { email, password, name } = body;
    let user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return { error: 'User already exists' };
    }
    user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    return { user };
  }
}
