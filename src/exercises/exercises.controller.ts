import { Controller, Get, Param, Query } from '@nestjs/common';
import { BodyPart } from './entities/exercises.entity';
import { ExercisesService } from './exercises.service';
import { ExercisesResponse } from './types/exercises-response';
import { ExerciseByIdResponse } from '@/src/exercises/types/exercise-by-id-response';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get(':bodyPart')
  async getExercises(
    @Param('bodyPart') bodyPart: BodyPart,
    @Query() query: any,
  ): Promise<ExercisesResponse> {
    const { exercises, exercisesCount } =
      await this.exercisesService.getExercises(bodyPart, query);
    return new ExercisesResponse({ exercises, exercisesCount });
  }

  @Get(':bodyPart/:id')
  async getExerciseById(
    @Param('id') id: number,
  ): Promise<ExerciseByIdResponse> {
    const exercise = await this.exercisesService.getExerciseById(id);
    return new ExerciseByIdResponse({ exercise });
  }
}
