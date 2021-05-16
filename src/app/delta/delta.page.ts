import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.page.html',
  styleUrls: ['./delta.page.scss'],
})
export class DeltaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // variables
  deltaShares:number = 0;// represents the amount of shares
  price:number = 46.31;// represents the price of the stock

  // functions
  buyDShares(){
    this.deltaShares=this.deltaShares+100;//buy shares in 100 increments
    }

  sellDShares(){
    if(this.deltaShares!=0){
      this.deltaShares = this.deltaShares-100;// sell shares by 100 increments
    }else{
      this.deltaShares = this.deltaShares;// if you own 0 shares then you cant sell - does not support short selling lol
    }
  }
}
