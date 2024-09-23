import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { InputExampleComponent } from './signals-playground/components/input-example2/parent.component';
import { ComputedComponent } from './signals-playground/components/computed-example/computed/computed.component';
import { NoSignalsComponent } from './signals-playground/components/computed-example/no-signals/no-signals.component';
import { GetterComponent } from './signals-playground/components/computed-example/getter/getter.component';
import { ParentEffectComponent } from './signals-playground/components/effects-example/parent-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ParentEffectComponent,
    InputExampleComponent,
    ComputedComponent,
    NoSignalsComponent,
    GetterComponent,
    NoSignalsComponent,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'computed-example', component: NoSignalsComponent, pathMatch: 'full' },
      { path: 'effects-example', component: ParentEffectComponent },
      { path: 'input-example', component: InputExampleComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
