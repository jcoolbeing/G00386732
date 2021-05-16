import { Component } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// cordova plugin
  constructor(private batteryStatus: BatteryStatus) { }

  status(){
    // function to monitor battery changes of device
const subscription = this.batteryStatus.onChange().subscribe(status => {
  console.log(status.level, status.isPlugged);
});
  }
}
