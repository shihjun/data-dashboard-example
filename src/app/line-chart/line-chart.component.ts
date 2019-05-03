import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  chartType = "line"
  @Input() chartData = []
  // [
  //  { data: [1,2,3,4]} 
  // ]
  @Input() chartLabels = []
  // ["Avengers", "Frozen", "The Incredibles", "Justice League"] 

  constructor() { }

  ngOnInit() {}

}


