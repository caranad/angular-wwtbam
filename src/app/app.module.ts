import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { MoneytreeComponent } from './moneytree/moneytree.component';
import { GameComponent } from './game/game.component';
import { TitleComponent } from './title/title.component';
import { AnsoptionComponent } from './ansoption/ansoption.component';
import { PrizeComponent } from './prize/prize.component';
import { FiftylifelineComponent } from './fiftylifeline/fiftylifeline.component';
import { PhonelifelineComponent } from './phonelifeline/phonelifeline.component';
import { AudiencelifelineComponent } from './audiencelifeline/audiencelifeline.component';
import { DdiplifelineComponent } from './ddiplifeline/ddiplifeline.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    MoneytreeComponent,
    GameComponent,
    TitleComponent,
    AnsoptionComponent,
    PrizeComponent,
    FiftylifelineComponent,
    PhonelifelineComponent,
    AudiencelifelineComponent,
    DdiplifelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
