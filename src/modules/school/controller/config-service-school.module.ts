import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmConfigModule } from 'src/infra/typeorm/config/typeorm-config.module';
import SchoolRepositoryTypeORM from '../infra/repositories/school.repository';
import { CreateSchoolService } from '../use-cases/create-school.service';

@Module({
  imports: [TypeOrmConfigModule],
})
export class ConfigSchoolServiceModule {
  static CREATE_SCHOOL_SERVICE = 'CreateSchoolService';

  static register(): DynamicModule {
    return {
      module: ConfigSchoolServiceModule,
      providers: [
        {
          inject: [SchoolRepositoryTypeORM],
          provide: ConfigSchoolServiceModule.CREATE_SCHOOL_SERVICE,
          useFactory: (schoolRepository: SchoolRepositoryTypeORM) =>
            new CreateSchoolService(schoolRepository),
        },
      ],
      exports: [ConfigSchoolServiceModule.CREATE_SCHOOL_SERVICE],
    };
  }
}
