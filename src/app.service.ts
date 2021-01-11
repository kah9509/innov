import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello!';
  }
  getTest(): string {
    return 'Test';
  }
  getNum(): number {
    return 0;
  }
}
