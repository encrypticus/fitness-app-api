import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ExercisesModule } from './exercises/exercises.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    DatabaseModule,
    ExercisesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets', 'images'),
      serveRoot: '/assets/images',
    }),
  ],
})
export class AppModule {}
