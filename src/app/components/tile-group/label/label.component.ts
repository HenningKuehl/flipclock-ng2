/**
 * Created by hkuehl on 09.05.2017.
 */
import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'tile-group-label',
    templateUrl: 'label.component.html',
    styleUrls: ['label.component.scss']
})

export class LabelComponent implements OnInit, OnChanges {
    @Input() text: string;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        console.log(this.text);
    }
}