import { Module } from '@nestjs/common';
import { DisciplinesService } from './disciplines.service';
import { DisciplinesController } from './disciplines.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DisciplinesController],
  providers: [DisciplinesService, PrismaService],
})
export class DisciplinesModule {}
