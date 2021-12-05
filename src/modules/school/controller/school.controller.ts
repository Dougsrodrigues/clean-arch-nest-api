import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { School } from '../domain/model/school';
import { CreateSchoolService } from '../use-cases/create-school.service';
import { ConfigSchoolServiceModule } from './config-service-school.module';

@Controller('api/v1/school')
export class SchoolController {
  constructor(
    @Inject(ConfigSchoolServiceModule.CREATE_SCHOOL_SERVICE)
    private readonly createSchoolService: CreateSchoolService,
  ) {}

  @Post()
  public createLivro(@Body() school: School) {
    console.log('Controller');
    console.log({ school });
    return this.createSchoolService.create(school);
  }
}
