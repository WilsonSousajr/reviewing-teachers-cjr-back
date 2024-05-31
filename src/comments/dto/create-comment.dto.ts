import { IsString } from "class-validator";

export class CreateCommentDto {
    userId: number;
    reviewId: number;
    @IsString()
    content: string;
}
