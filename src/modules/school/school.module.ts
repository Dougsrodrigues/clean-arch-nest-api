import { DynamicModule, Module } from '@nestjs/common';
import { ExceptionsModule } from 'src/infra/exceptions/exceptions.module';
import { ExceptionsService } from 'src/infra/exceptions/exceptions.service';
import { LoggerModule } from 'src/infra/logger/logger.module';
import { LoggerService } from 'src/infra/logger/logger.service';
import { TypeOrmConfigModule } from 'src/infra/typeorm/config/typeorm-config.module';
import SchoolRepositoryTypeORM from './infra/repositories/school.repository';
import { CreateSchoolService } from './use-cases/create-school.service';

@Module({
  imports: [LoggerModule, ExceptionsModule, TypeOrmConfigModule],
})
export class ConfigSchoolServiceModule {
  static CREATE_SCHOOL_SERVICE = 'CreateSchoolService';

  static register(): DynamicModule {
    return {
      module: ConfigSchoolServiceModule,
      providers: [
        {
          inject: [LoggerService, ExceptionsService, SchoolRepositoryTypeORM],
          provide: ConfigSchoolServiceModule.CREATE_SCHOOL_SERVICE,
          useFactory: (
            logger: LoggerService,
            exceptionsService: ExceptionsService,
            schoolRepository: SchoolRepositoryTypeORM,
          ) =>
            new CreateSchoolService(
              logger,
              exceptionsService,
              schoolRepository,
            ),
        },
      ],
      exports: [ConfigSchoolServiceModule.CREATE_SCHOOL_SERVICE],
    };
  }
}
