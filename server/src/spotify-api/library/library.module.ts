import { Module } from '@nestjs/common';

import { HttpModule } from './../../http/http.module';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';

@Module({
  imports: [HttpModule],
  exports: [LibraryService],
  components: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
