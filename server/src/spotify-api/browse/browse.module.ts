import { Module } from '@nestjs/common';

import { HttpModule } from './../../http/http.module';
import { BrowseController } from './browse.controller';
import { BrowseService } from './browse.service';

@Module({
  imports: [HttpModule],
  exports: [BrowseService],
  components: [BrowseService],
  controllers: [BrowseController]
})
export class BrowseModule {}
