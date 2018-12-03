import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export abstract class LoggerService {

  public lastMessage = new BehaviorSubject<string>('');

  constructor() {
  }

  abstract log(message: string): void;
}
