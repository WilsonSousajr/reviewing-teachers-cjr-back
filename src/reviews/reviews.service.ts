import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createReviewDto: CreateReviewDto) {
    return await this.prisma.review.create({
      data: {
        user: {
          connect: {
            id: createReviewDto.userId,
          },
        },
        teacher: {
          connect: {
            id: createReviewDto.teacherId,
          },
        },
        discipline: {
          connect: {
            id: createReviewDto.disciplineId,
          },
        },
        title: createReviewDto.title,
        content: createReviewDto.content,
      },
    });
  }

  async findAll() {
    return await this.prisma.review.findMany();
  }

  async findByTeacher(teacherId: number){
    return await this.prisma.review.findMany({
      where: {
        teacherId,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.review.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return await this.prisma.review.update({
      where: {
        id,
      },
      data: updateReviewDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.review.delete({
      where: {
        id,
      },
    });
  }
}
