import { PrismaClient } from '@prisma/client';
import { GroupResponse } from '@/models/group/group_response.dto.js';
import { toGroupResponse } from '@/utils/mappers/group.mapper.js';
const prisma = new PrismaClient();

// 그룹 목록 조회
export async function getGroupsService({
  page = 1,
  limit = 10,
  order = 'desc',
  orderBy = 'createdAt',
  search = '',
}): Promise<{ data: GroupResponse[]; total: number }> {
  try {
    const where = search
      ? {
          name: { contains: search, mode: 'insensitive' as const },
        }
      : {};
    const orderByOption =
      orderBy === 'participantCount'
        ? { participants: { _count: order } as any } // 참가자 수 기준
        : { [orderBy]: order as any }; // 나머지 필드 기준

    const groups = await prisma.group.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: orderByOption,
      where,
      include: {
        tags: {
          select: { id: true, name: true },
        },
        owner: {
          select: {
            id: true,
            nickname: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        participants: {
          select: {
            id: true,
            nickname: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        badges: {
          select: {
            id: true,
            type: true,
          },
        },
      },
    });

    const total = await prisma.group.count({ where });
    return {
      data: groups.map((g) => toGroupResponse(g)),
      total,
    };
  } catch (e) {
    console.log(e);
    throw e;
  }
}
