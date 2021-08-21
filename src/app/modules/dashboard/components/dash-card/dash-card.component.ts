import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.scss']
})
export class DashCardComponent implements OnInit {

  @Input() title: string;
  @Input() imagePath: string;
  @Input() urlPath: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
