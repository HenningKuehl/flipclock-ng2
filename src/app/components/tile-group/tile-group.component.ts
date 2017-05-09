/**
 * Created by hkuehl on 08.05.2017.
 */
import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'tile-group',
    templateUrl: 'tile-group.component.html',
    styleUrls: ['tile-group.component.scss']
})

export class TileGroupComponent implements OnInit, OnChanges {
    @Input() number: number;
    tiles: number[];

    constructor() {
        this.tiles = [];
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.splitNumber()
    }

    private splitNumber() {
        if(!this.number) return;
        let stringNumber = this.number.toString();
        let stringChar = stringNumber.split('');
        if(this.tiles.length === stringChar.length) {
            for (let i = 0; i < this.tiles.length; i++) {
                this.tiles[i] = Number(stringChar[i]);
            }
        } else {
            this.tiles = [];
            for (let x of stringChar) {
                this.tiles.push(Number(x));
            }
        }
    }
}