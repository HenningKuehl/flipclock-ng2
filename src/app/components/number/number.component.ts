/**
 * Created by hkuehl on 08.05.2017.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'number',
    templateUrl: 'number.component.html',
    styleUrls: ['number.component.scss']
})

export class NumberComponent implements OnInit {
    @Input() number: number;
    @Input() above: boolean;
    @Input() below: boolean;

    constructor() {
    }

    ngOnInit() {

    }
}