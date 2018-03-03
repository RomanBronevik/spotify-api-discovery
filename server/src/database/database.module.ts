import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

/**
 * Database module
 *
 * @export
 * @class DatabaseModule
 */
@Module({
  components: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}
