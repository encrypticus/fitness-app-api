import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type localizedString<T> = { en: T; ru: T };

export type BodyPart =
  | 'back'
  | 'cardio'
  | 'chest'
  | 'lower arms'
  | 'lower legs'
  | 'neck'
  | 'shoulders'
  | 'upper arms'
  | 'upper legs'
  | 'waist';

type Equipment =
  | 'assisted'
  | 'band'
  | 'body weight'
  | 'bosu ball'
  | 'cable'
  | 'dumbbell'
  | 'elliptical machine'
  | 'ez barbell'
  | 'hammer'
  | 'kettlebell'
  | 'leverage machine'
  | 'medicine ball'
  | 'olympic barbell'
  | 'resistance band'
  | 'roller'
  | 'rope'
  | 'skierg machine'
  | 'sled machine'
  | 'smith machine'
  | 'stability ball'
  | 'stationary bike'
  | 'stepmill machine'
  | 'tire'
  | 'trap bar'
  | 'upper body ergometer'
  | 'weighted'
  | 'wheel roller';

type Target =
  | 'abductors'
  | 'abs'
  | 'adductors'
  | 'biceps'
  | 'calves'
  | 'cardiovascular system'
  | 'delts'
  | 'forearms'
  | 'glutes'
  | 'hamstrings'
  | 'lats'
  | 'levator scapulae'
  | 'pectorals'
  | 'quads'
  | 'serratus anterior'
  | 'spine'
  | 'traps'
  | 'triceps'
  | 'upper back';

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json' })
  bodyPart: localizedString<BodyPart>;

  @Column({ type: 'json' })
  equipment: localizedString<Equipment>;

  @Column({ type: 'varchar' })
  gifUrl: string;

  @Column({ type: 'json' })
  name: localizedString<string>;

  @Column({ type: 'json' })
  target: localizedString<Target>;

  @Column({ type: 'json' })
  secondaryMuscles: localizedString<string[]>;

  @Column({ type: 'json' })
  instructions: localizedString<string[]>;
}
