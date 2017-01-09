import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MonstersComponent } from './monsters/monsters.component';
import { WinComponent } from './win/win.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },
  { path: 'play', 
    component: MonstersComponent 
  },
  { path: 'win', 
    component: WinComponent 
  },
  { path: '',   
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {}