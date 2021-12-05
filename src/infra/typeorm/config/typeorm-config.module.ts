import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configORM } from 'ormconfig';
import { SchoolEntity } from 'src/modules/school/infra/entities/school.entity';
import SchoolRepositoryTypeORM from 'src/modules/school/infra/repositories/school.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(configORM),
    TypeOrmModule.forFeature([SchoolEntity]),
  ],
  providers: [SchoolRepositoryTypeORM],
  exports: [SchoolRepositoryTypeORM],
})
export class TypeOrmConfigModule {}
