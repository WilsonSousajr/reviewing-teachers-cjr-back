import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeachersService {
  constructor(private readonly prisma: PrismaService){}
  async create(createTeacherDto: CreateTeacherDto) {
    return await this.prisma.teacher.create({data: createTeacherDto});
  }

  async findAll() {
    return await this.prisma.teacher.findMany();
  }

  async findByName(name: string) {
    return await this.prisma.teacher.findFirst({where: {name}})
  }
  
  async findOne(id: number) {
    return await this.prisma.teacher.findMany({
      where: {
        id
      }
    });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return await this.prisma.teacher.update({
      where: {
        id
      },
      data: updateTeacherDto
    });
  }

  async remove(id: number) {
    return await this.prisma.teacher.delete({
      where: {
        id
      }
    });
  }
}
