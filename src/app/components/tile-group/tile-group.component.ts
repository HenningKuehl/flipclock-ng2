/**
 * Created by hkuehl on 08.05.2017.
 */
import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'tile-group',
    templateUrl: 'tile-group.component.html'
})

export class TileGroupComponent implements OnInit, OnChanges {
    @Input() number: number;
    @Input() dots: boolean;
    tiles: number[];

    constructor() {
        this.tiles = [];
        this.dots = true;
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.splitNumber();
    }

    private splitNumber() {
        if(!this.number && this.number !== 0) return;
        let stringNumber = this.number.toString();
        let stringChar = stringNumber.split('');
        if(stringChar.length === 1) {
            let tmp = stringChar[0];
            stringChar[0] = '0';
            stringChar.push(tmp);
        }
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