import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public menu1:MenuService, private food:FoodService) { }

  ngOnInit(): void {
  }
  addmenu(data : any){
console.log(data)
this.food.setdata(data)
  }

}
