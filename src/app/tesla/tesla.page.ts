import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.page.html',
  styleUrls: ['./tesla.page.scss'],
})
export class TeslaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // variables
  teslaShares:number = 0;// represents the amount of shares
  price:number = 589.87;// couldnt get any api to work correctly so I hard coded a price 

  // functions
  buyTShares(){
    this.teslaShares=this.teslaShares+100;//buy shares in 100 increments
    }

  sellTShares(){
    if(this.teslaShares!=0){
      this.teslaShares = this.teslaShares-100;// sell shares by 100 increments
    }else{
      this.teslaShares = this.teslaShares;// if you own 0 shares then you cant sell - does not support short selling lol
    }
  }
}
