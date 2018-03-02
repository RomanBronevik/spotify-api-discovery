import { HttpService } from './http.service';
import { Module } from '@nestjs/common';

@Module({
  exports: [HttpService],
  components: [HttpService]
})
export class HttpModule {}
