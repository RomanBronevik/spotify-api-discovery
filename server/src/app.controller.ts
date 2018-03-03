import { Get, Controller } from '@nestjs/common';

/**
 * AppController
 * Only route is for health test
 *
 * @export
 * @class AppController
 */
@Controller()
export class AppController {
  @Get()
  root(): string {
    return 'Hello World!';
  }
}
