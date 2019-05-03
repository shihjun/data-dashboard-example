import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-purpose-chart',
  templateUrl: './all-purpose-chart.component.html',
  styleUrls: ['./all-purpose-chart.component.css']
})
export class AllPurposeChartComponent implements OnInit {
  @Input() chartType = ""
  @Input() chartData = []
  // [
  //   { data: [],  label: "model"}
  // ]
  @Input() chartLabels = []

  constructor() { }

  ngOnInit() {}

}
