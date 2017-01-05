import { Injectable } from '@angular/core';

import { monsters } from './mock-monsters';

@Injectable()
export class MonsterService {
  getMonsters() {
    return Promise.resolve(monsters);
  }
}