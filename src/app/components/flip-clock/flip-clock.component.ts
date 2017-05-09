/**
 * Created by hkuehl on 08.05.2017.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'flip-clock',
    templateUrl: 'flip-clock.component.html',
    styleUrls: ['flip-clock.scss']
})

export class FlipClockComponent implements OnInit {
    currNumber: number;
    nextNumber: number;
    switch: boolean = false;

    constructor() {
        this.nextNumber = 0;
    }

    ngOnInit() {
    }

    start() {
        setInterval(() => {
            this.switch = !this.switch;
            this.currNumber = this.nextNumber;
            this.nextNumber++;
            /*if(this.nextNumber === 9) {
                this.nextNumber = 0;
            } else {
                this.nextNumber++;
            }*/
        }, 1000);
    }
}