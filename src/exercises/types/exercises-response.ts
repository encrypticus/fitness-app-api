import { Exercise } from '../entities/exercises.entity';

export class ExercisesResponse {
  exercises: Exercise[];
  exercisesCount: number;

  constructor(payload: ExercisesResponse) {
    Object.assign(this, payload);
  }
}
