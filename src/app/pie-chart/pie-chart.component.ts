import { Component, OnInit } from '@angular/core';
import movieUserPreference from '../../movieUserPreference'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chartType = "pie"
  chartData = []
  // [
  //  { data: [1,2,3,4]} 
  // ]
  chartLabels = []
  // ["Avengers", "Frozen", "The Incredibles", "Justice League"] 

  constructor() { }

  ngOnInit() {  
    let dataset = []
    let movieLikeCount = {}
    for( let preference of movieUserPreference){
      if(!movieLikeCount[preference.movie]){
        movieLikeCount[preference.movie] = 0
      }
      movieLikeCount[preference.movie] += 1
    }
    this.chartLabels = Object.keys(movieLikeCount)
    for( let movie of Object.keys(movieLikeCount)){
      dataset.push(movieLikeCount[movie])
    }
    this.chartData.push({
      data: dataset
    })
  }

}


