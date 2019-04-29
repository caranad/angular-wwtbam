import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { TitleComponent } from './title/title.component';
import { PrizeComponent } from './prize/prize.component';

const routes: Routes = [
{
  path: 'game',
  component: GameComponent
},
{
  path: '',
  component: TitleComponent
},
{
  path: 'prize',
  component: PrizeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
