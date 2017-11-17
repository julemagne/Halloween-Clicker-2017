import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Monster } from './shared/monster.model';
import { MonsterService } from './shared/monster.service';

import { sampleAndRemove } from '../shared/sampleAndRemove.function';

@Component({
  moduleId: 'module.id',
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  providers: [MonsterService]
})

export class MonstersComponent implements OnInit {

  monsters: Monster[] = [];
  monster: Monster = new Monster;
  scream: HTMLAudioElement = new Audio('../assets/audio/scream.mp3');

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
        this.cycle();
      });
  }

  cycle() {
    let monstersArray = this.monsters;
    let monstersLength = monstersArray.length;
    if (monstersLength === 1) {
      this.delayScream();
      this.monster = sampleAndRemove(monstersArray);
    } else if (monstersLength != 0) {
      this.monster = sampleAndRemove(monstersArray);
    } else {
      this.setMonsters();
      this.router.navigate(['/win']);
    }
  }

  delayScream() {
    window.setTimeout(() => {
      this.playScream();
    }, 500);
  }

  playScream() {
    this.scream.play();
  }

}
