import { HttpModule } from './../../http/http.module';
import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  imports: [HttpModule],
  exports: [SearchService],
  components: [SearchService],
  controllers: [SearchController]
})
export class SearchModule {}
