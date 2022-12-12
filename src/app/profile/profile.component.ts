import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
orderlist:any=[]
placeorder:boolean=false

  constructor(private food:FoodService) { }

  ngOnInit(): void {
this.orderlist=this.food.getdata()
if(this.orderlist>0){
  this.placeorder=true;
}
  }
  onsubmit() {
    alert("your order has been placed")
  }

}
