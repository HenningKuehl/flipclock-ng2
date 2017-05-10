/**
 * Created by hkuehl on 08.05.2017.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'flip-clock',
    templateUrl: 'flip-clock.component.html',
    styleUrls: ['flip-clock.component.scss']
})

export class FlipClockComponent implements OnInit {
    currNumber: number = 1325;
    seconds: number;
    minutes: number;
    hours: number;

    constructor() {
        this.currNumber = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    ngOnInit() {
        this.start();
    }

    start() {
        setInterval(() => {
            this.currNumber--;
            this.splitNumber();
        }, 1000);
    }

    private splitNumber() {
        this.hours = Math.floor(this.currNumber / 60 / 60);
        let tmp = this.currNumber - (this.hours * 60 * 60);
        this.minutes = Math.floor(tmp / 60);
        tmp = tmp - this.minutes * 60;
        this.seconds = tmp;
    }
}