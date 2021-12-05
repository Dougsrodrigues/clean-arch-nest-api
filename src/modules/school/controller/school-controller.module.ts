import { Module } from '@nestjs/common';
import { ConfigSchoolServiceModule } from '../school.module';
import { SchoolController } from './school.controller';

@Module({
  imports: [ConfigSchoolServiceModule.register()],
  controllers: [SchoolController],
})
export class SchoolControllerModule {}
