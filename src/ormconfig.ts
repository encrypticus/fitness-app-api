import { DataSource } from 'typeorm';
import { CreateTableExercises1736086507264 } from './lib/migrations/1736086507264-create_table_exercises';

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [CreateTableExercises1736086507264],
  synchronize: false,
  logging: true,
});
