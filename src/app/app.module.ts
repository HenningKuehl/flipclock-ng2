/**
 * Created by hkuehl on 08.05.2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FlipClockComponent} from "./components/flip-clock/flip-clock.component";
import {NumberComponent} from "./components/number/number.component";
import {TileComponent} from "./components/tile/tile.component";
import {TileGroupComponent} from "./components/tile-group/tile-group.component";
import {LabelComponent} from "./components/tile-group/label/label.component";
import {DotsComponent} from "./components/dots/dots.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        FlipClockComponent,
        TileGroupComponent,
        TileComponent,
        NumberComponent,
        LabelComponent,
        DotsComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
