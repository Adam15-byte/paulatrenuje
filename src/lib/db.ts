import { PrismaClient } from '@prisma/client';
import 'server-only';

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient = new PrismaClient();

export const db = prisma;
