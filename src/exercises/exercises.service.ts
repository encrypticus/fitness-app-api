import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BodyPart, Exercise } from './entities/exercises.entity';
import { Repository } from 'typeorm';
import { ExercisesResponse } from './types/exercises-response';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private readonly exercisesRepository: Repository<Exercise>,
  ) {}

  async getExercises(
    bodyPart: BodyPart,
    query: any,
  ): Promise<ExercisesResponse> {
    try {
      const queryBuilder = this.exercisesRepository
        .createQueryBuilder('exercise')
        .where("exercise.bodyPart ->> 'en' = :bodyPart", { bodyPart });

      const exercisesCount = await queryBuilder.getCount();

      if (query.limit) {
        queryBuilder.limit(query.limit);
      }

      if (query.offset) {
        queryBuilder.offset(query.offset);
      }

      const exercises = await queryBuilder.getMany();

      return { exercisesCount, exercises };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async getExerciseById(id: number): Promise<Exercise> {
    try {
      return await this.exercisesRepository.findOne({ where: { id } });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
