import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/global/prisma/prisma.service';
import { UtilsService } from 'src/global/utils/utils.service';

@Injectable()
export class GroupService {
  constructor(
    private prismaService: PrismaService,
    private utilsService: UtilsService,
  ) {}

  async newGroupId() {
    const groupid = this.utilsService.genId('g', 9);
    const existsGroup = await this.findGroup({
      groupid,
    });
    if (existsGroup) return await this.newGroupId();
    return groupid;
  }

  findGroup(where: Prisma.GroupWhereInput) {
    return this.prismaService.group.findFirst({
      where,
    });
  }

  async createGroup(name: string, creatUserId: string) {
    const groupid = await this.newGroupId();
    return this.prismaService.$transaction([
      this.prismaService.group.create({
        data: {
          name,
          groupid,
        },
      }),
      this.prismaService.groupUser.create({
        data: {
          groupid: groupid,
          userid: creatUserId,
        },
      }),
    ]);
  }

  async createGroupUser(groupid, userid) {
    return this.prismaService.groupUser.create({
      data: {
        groupid,
        userid,
      },
    });
  }
}
