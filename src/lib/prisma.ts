let prismaInstance: unknown = null;

export function getPrisma() {
  if (!prismaInstance) {
    try {
      // Dynamic import to avoid build-time errors when DB isn't available
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { PrismaClient } = require("@/generated/prisma/client");
      prismaInstance = new PrismaClient();
    } catch {
      console.warn("Prisma client not available - using demo mode");
      prismaInstance = null;
    }
  }
  return prismaInstance;
}
