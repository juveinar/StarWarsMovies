import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politecnico',
  templateUrl: './politecnico.component.html',
  styleUrls: ['./politecnico.component.css']
})
export class POLITECNICOComponent implements OnInit {

  title = 'UNIVERSIDAD';
  title2 = 'POLITECNICO GRAN COLOMIANO';
  public imgPath: string;

  constructor() {
  this.imgPath = "../assets/images/war1.jpg"
}

  ngOnInit(): void {}

}
