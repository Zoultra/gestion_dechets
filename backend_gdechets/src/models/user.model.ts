import prisma from "../config/database";

export class UserModel {
  static async findAll() {
    return prisma.user.findMany();
  }

  static async findById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  static async create(data: { username: string; email: string; password: string }) {
    return prisma.user.create({ data });
  }

  static async delete(id: number) {
    return prisma.user.delete({ where: { id } });
  } 

  static async update(id: number, data: { username?: string; email?: string; password?: string }) {
    return prisma.user.update({
        where: { id },
        data
    });
}
}
