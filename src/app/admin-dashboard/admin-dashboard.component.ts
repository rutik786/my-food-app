import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  constructor(public orders: OrderService) { }

  formValue!:FormGroup
  s = "";
  status = "Pending"
  ngOnChanges(): void { }

  acceptButton() {
    this.s = "disabled";
    this.status = "Accepted";
  }

  rejectButton() {
    this.s = "disabled";
    this.status = "Rejected";
  }
  ngOnInit(): void { }
}


