import { School } from '../model/school';

export interface ISchoolRepository {
  create(school: School): Promise<School>;
}
