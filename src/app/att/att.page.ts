import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-att',
  templateUrl: './att.page.html',
  styleUrls: ['./att.page.scss'],
})
export class AttPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // variables
  attShares:number = 0;// represents the amount of shares
  price:number = 32.24;// represents the price of the stock

  // functions
  buyAShares(){
    this.attShares=this.attShares+100;//buy shares in 100 increments
    }

  sellAShares(){
    if(this.attShares!=0){
      this.attShares = this.attShares-100;// sell shares by 100 increments
    }else{
      this.attShares = this.attShares;// if you own 0 shares then you cant sell - does not support short selling lol
    }
  }
}