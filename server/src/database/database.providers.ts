import { DbConnectionToken } from './../../constants';
import * as mongoose from 'mongoose';
import { environment } from '../../environments/environment';

export const databaseProviders = [
  {
    provide: DbConnectionToken,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect(
        `mongodb://${environment.database.host}/spotify-api-discovery`
      );
    }
  }
];
