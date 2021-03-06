import { Component, OnInit, Input } from '@angular/core';
import movieUserPreference from '../../movieUserPreference'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chartType = "pie"
  @Input() chartData = []
  // [
  //  { data: [1,2,3,4]} 
  // ]
  @Input() chartLabels = []
  // ["Avengers", "Frozen", "The Incredibles", "Justice League"] 

  constructor() { }

  ngOnInit() {}

}


