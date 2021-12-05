import { Module } from '@nestjs/common';
import { ExceptionsModule } from 'src/infra/exceptions/exceptions.module';
import { LoggerModule } from 'src/infra/logger/logger.module';
import { SchoolControllerModule } from 'src/modules/school/controller/school-controller.module';

@Module({
  imports: [SchoolControllerModule, LoggerModule, ExceptionsModule],
})
export class AppModule {}
