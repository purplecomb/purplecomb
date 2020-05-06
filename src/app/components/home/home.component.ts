import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
  cars = [{
    brand:"ford",
    year:2016,
    color:"red"
  },{
    brand:"chevy",
    year:2016,
    color:"blue"
  },{
    brand:"maserati",
    year:2016,
    color:"black"
  },{
    brand:"pito",
    year:2016,
    color:"red"
  },{
    brand:"pitote",
    year:2016,
    color:"green"
  },{
    brand:"ferrari",
    year:2016,
    color:"red"
  },{
    brand:"lambo",
    year:2016,
    color:"yellow"
  },{
    brand:"mama",
    year:2016,
    color:"mama"
  }]

  constructor() { }

  ngOnInit() {
  }

}
