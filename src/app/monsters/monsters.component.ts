import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Monster } from './shared/monster.model';
import { MonsterService } from './shared/monster.service';

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
    this.monsterService.getMonsters()
      .then(monsters => {
        this.monsters = monsters
        this.monster = this.monsters[0]
      });
  }

  cycle() {
    let i = this.monsters.indexOf(this.monster);
    let monstersLength = this.monsters.length-1;
    if (i != monstersLength) {
      this.monster = this.monsters[i+1];
    } else {
      this.router.navigate(['/home']);
    }
  }

}
