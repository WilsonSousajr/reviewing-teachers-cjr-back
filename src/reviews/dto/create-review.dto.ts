import { IsString } from 'class-validator';

export class CreateReviewDto {
    userId: number;
    teacherId: number;
    disciplineId: number;
    @IsString()
    title: string;
    @IsString()
    content: string;
}
