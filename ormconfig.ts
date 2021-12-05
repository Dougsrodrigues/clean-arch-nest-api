import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SchoolEntity } from 'src/modules/school/infra/entities/school.entity';

export const configORM: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres_database',
  port: 5432,
  username: 'admin',
  password: '12345',
  database: 'postgresDB',

  synchronize: true,
  autoLoadEntities: true,
  entities: [SchoolEntity],
  migrations: ['src/infra/typeorm/migrations/*{.ts}'],
  cli: {
    migrationsDir: 'src/infra/typeorm/migrations',
  },
};
