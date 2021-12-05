import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from '../../domain/model/school';
import { ISchoolRepository } from '../../domain/repositories/school-repository.interface';
import { SchoolEntity } from '../entities/school.entity';

@Injectable()
export default class SchoolRepositoryTypeORM implements ISchoolRepository {
  private readonly logger = new Logger(SchoolRepositoryTypeORM.name);

  constructor(
    @InjectRepository(SchoolEntity)
    private readonly schoolEntityRepository: Repository<SchoolEntity>,
  ) {}

  async create(): Promise<School> {
    console.log('repository');
    const schoolEntity: SchoolEntity = new SchoolEntity();
    const school = new School();

    const newSchool = await this.schoolEntityRepository.create(schoolEntity);

    // school.name = newSchool.name;

    return school;
  }
}
