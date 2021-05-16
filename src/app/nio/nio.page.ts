import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nio',
  templateUrl: './nio.page.html',
  styleUrls: ['./nio.page.scss'],
})
export class NioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // variables
  nioShares:number = 0;// represents the amount of shares
  price:number = 33.42;// hardcode price

  // functions
  buyNShares(){
    this.nioShares=this.nioShares+100;//buy shares in 100 increments
    }

  sellNShares(){
    if(this.nioShares!=0){
      this.nioShares = this.nioShares-100;// sell shares by 100 increments
    }else{
      this.nioShares = this.nioShares;// if you own 0 shares then you cant sell - does not support short selling lol
    }
  }
}
