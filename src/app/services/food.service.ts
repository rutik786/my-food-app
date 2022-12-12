import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  orderlist:any=[]

  constructor() { }

  setdata(item:any){
this.orderlist.push(item)
  }

  getdata(){
return this.orderlist
  }
}
