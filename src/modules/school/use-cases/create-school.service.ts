import { School } from 'src/modules/school/domain/model/school';
import { ISchoolRepository } from 'src/modules/school/domain/repositories/school-repository.interface';

export class CreateSchoolService {
  constructor(private readonly repository: ISchoolRepository) {}

  async create(schoolDTO: School): Promise<School> {
    console.log('SERVICE');
    return this.repository.create(schoolDTO);
  }
}
