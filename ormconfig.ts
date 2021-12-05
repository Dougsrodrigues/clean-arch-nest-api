import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SchoolEntity } from 'src/modules/school/infra/entities/school.entity';

export const configORM: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'gizh_postgres_database',
  port: 5432,
  username: 'admin',
  password: 'gizh123',
  database: 'gizh',

  synchronize: true,
  autoLoadEntities: true,
  entities: [SchoolEntity],
  migrations: ['src/infra/typeorm/migrations/*{.ts}'],
  cli: {
    migrationsDir: 'src/infra/typeorm/migrations',
  },
};
