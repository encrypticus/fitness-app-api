import { DataSource } from 'typeorm';
import { CreateTableExercises1736086507264 } from './lib/migrations/1736086507264-create_table_exercises';

export default new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 5432),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [CreateTableExercises1736086507264],
  synchronize: false,
  logging: true,
});
