import { IException } from 'src/infra/exceptions/exceptions.interface';
import { ILogger } from 'src/infra/logger/logger.interface';
import { School } from 'src/modules/school/domain/model/school';
import { ISchoolRepository } from 'src/modules/school/domain/repositories/school-repository.interface';

export class CreateSchoolService {
  constructor(
    private readonly logger: ILogger,
    private readonly exceptionsService: IException,
    private readonly repository: ISchoolRepository,
  ) {}

  async create(schoolDTO: School): Promise<School> {
    this.exceptionsService.badRequestException({
      message: 'TESTE',
    });

    return this.repository.create(schoolDTO);
  }
}
