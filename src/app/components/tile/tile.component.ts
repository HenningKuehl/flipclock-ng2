/**
 * Created by hkuehl on 08.05.2017.
 */
import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'tile',
    templateUrl: 'tile.component.html',
    styleUrls: ['tile.component.scss']
})

export class TileComponent implements OnInit, OnChanges {
    @Input() nextNumber: number;
    @Input() currNumber: number;
    @Input() run: boolean;

    change: boolean;

    constructor() {
        this.change = false;
    }

    ngOnInit() {

    }

    ngOnChanges() {
        this.nextNumber = this.currNumber + 1;
        this.change = !this.change;
    }
}