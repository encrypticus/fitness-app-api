import { Exercise } from '@/src/exercises/entities/exercises.entity';

export class ExerciseByIdResponse {
  exercise: Exercise;

  constructor(payload: ExerciseByIdResponse) {
    Object.assign(this, payload);
  }
}
