// import { PrismaClient } from "@prisma/client";

// export const prisma = new PrismaClient();

import { PrismaClient as PrismaClientAuth } from "../../prisma/databases/auth";
import { PrismaClient as PrismaClientMain } from "../../prisma/databases/main";

export const prismaAuth = new PrismaClientAuth();
export const prismaMain = new PrismaClientMain();