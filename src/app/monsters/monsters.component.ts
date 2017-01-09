import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Monster } from './shared/monster.model';
import { MonsterService } from './shared/monster.service';

import { sample } from '../shared/sample.function';

@Component({
  moduleId: 'module.id',
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  providers: [MonsterService]
})

export class MonstersComponent implements OnInit {
  
  monsters: Monster[] = [];
  monster: Monster = new Monster;

  constructor(
    private monsterService: MonsterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setMonsters();
  }

  setMonsters() {
    this.monsterService.getMonsters()
      .then(monsters => {
        this.monsters = Array.from(monsters)
      });
  }

  startCycle() {
    this.cycle();
  }

  cycle() {
    let monstersArray = this.monsters;
    let monstersLength = monstersArray.length;
    if (monstersLength != 0) {
      this.monster = sample(monstersArray);
    } else {
      this.setMonsters();
      this.router.navigate(['/win']);
    }
  }

}
