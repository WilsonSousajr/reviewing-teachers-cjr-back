import { Injectable } from '@nestjs/common';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DisciplinesService {
  constructor(private readonly prisma: PrismaService){}
  async create(createDisciplineDto: CreateDisciplineDto) {
    return await this.prisma.discipline.create({data: createDisciplineDto});
  }

  async findAll() {
    return await this.prisma.discipline.findMany();
  }

  async findByName(name: string) {
    return await this.prisma.discipline.findFirst({where: {name}})
  }
  

  async findOne(id: number) {
    return await this.prisma.discipline.findMany({
      where: {
        id
      }
    });
  }

  async update(id: number, updateDisciplineDto: UpdateDisciplineDto) {
    return await this.prisma.discipline.update({
      where: {
        id
      },
      data: updateDisciplineDto
    });
  }

  async remove(id: number) {
    return await this.prisma.discipline.delete({
      where: {
        id
      }
    });
  }
}
