import { Module } from '@nestjs/common';
import { StringService } from './services/string.service';

/**
 * Utils module
 * Contains utility components (services / middlewares etc.)
 *
 * @export
 * @class UtilsModule
 */
@Module({
  exports: [StringService],
  components: [StringService]
})
export class UtilsModule {}
