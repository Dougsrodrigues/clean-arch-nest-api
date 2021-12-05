import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { School } from '../domain/model/school';
import { ConfigSchoolServiceModule } from '../school.module';
import { CreateSchoolService } from '../use-cases/create-school.service';

@Controller('api/v1/school')
export class SchoolController {
  constructor(
    @Inject(ConfigSchoolServiceModule.CREATE_SCHOOL_SERVICE)
    private readonly createSchoolService: CreateSchoolService,
  ) {}

  @Post()
  public createSchool(@Body() school: School) {
    console.log('Controller');
    console.log({ school });
    return this.createSchoolService.create(school);
  }
}
