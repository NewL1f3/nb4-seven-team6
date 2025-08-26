import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 그룹 목록 조회
export async function getGroupsService({
  page = 1,
  limit = 10,
  order = 'desc',
  orderBy = 'createdAt',
  search = '',
}) {
  try {
    const where = search
      ? {
          name: { contains: search, mode: 'insensitive' as const },
        }
      : {};
    const groups = await prisma.group.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        [orderBy]: order,
      },
      where,
      select: {
        id: true,
        name: true,
        description: true,
        photoUrl: true,
        goalRep: true,
        likeCount: true,
        createdAt: true,
        updatedAt: true,
        tags: {
          select: { name: true },
        },
        owner: {
          select: {
            id: true,
            nickname: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        badges: {
          select: {
            type: true,
          },
        },
        _count: {
          select: {
            participants: true,
            records: true,
          },
        },
      },
    });

    const total = await prisma.group.count({ where });
    return { data: groups, total };
  } catch (e) {
    console.log(e);
    throw e;
  }
}
