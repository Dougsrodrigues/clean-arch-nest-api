import { Module } from '@nestjs/common';
import { SchoolControllerModule } from 'src/modules/school/controller/school-controller.module';

@Module({
  imports: [SchoolControllerModule],
})
export class AppModule {}
