import { PersonalizationController } from './personalization.controller';
import { PersonalizationService } from './personalization.service';
import { HttpModule } from './../../http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  exports: [PersonalizationService],
  components: [PersonalizationService],
  controllers: [PersonalizationController]
})
export class PersonalizationModule {}
