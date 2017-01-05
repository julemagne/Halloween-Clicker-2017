import { Component, OnInit } from '@angular/core';

import { Monster } from './shared/monster.model';
import { MonsterService } from './shared/monster.service';

@Component({
  moduleId: 'module.id',
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss'],
  providers: [MonsterService]
})

export class MonstersComponent implements OnInit {
  
  monsters: Monster[] = [];

  constructor(private monsterService: MonsterService) { }

  ngOnInit() {
    this.monsterService.getMonsters()
      .then(monsters => this.monsters = monsters);
  }

}
