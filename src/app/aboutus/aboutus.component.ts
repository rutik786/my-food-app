import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  logo = "../../assets/images/gmoimg.jpeg"
  logo2 = "../../assets/images/naturallogo.png"

  constructor() { }

  ngOnInit(): void {
  }

}
