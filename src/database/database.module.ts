import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Exercise } from '../exercises/entities/exercises.entity';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        entities: [Exercise],
        synchronize: false,
      }),
    }),
  ],
  providers: [
    {
      provide: DataSource,
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'postgres',
          url: process.env.DATABASE_URL,
          synchronize: false,
          migrations: ['src/migrations/**/*.ts'],
          entities: [Exercise],
        });
        if (!dataSource.isInitialized) {
          await dataSource.initialize();
        }
        return dataSource;
      },
    },
  ],
  exports: [DataSource],
})
export class DatabaseModule {}
