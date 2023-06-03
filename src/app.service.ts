import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  shoutout(name: string): string {
    return `shoutout to ${name}!`;
  }
}
