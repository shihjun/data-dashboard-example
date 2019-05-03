import { Component } from '@angular/core';
import data from '../data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-dashboard';
  
  numberOfLikesPerTag = {
    data: [],
    labels: []
  }

  numberOfImagesPerTag = {
    data: [],
    labels:[]
  }

  numberOfLikesPerImagePerTag = {
    data: [],
    labels: []
  }

  numberOfImagesPerMonth = {
    data: [],
    labels: []
  }

  ngOnInit(){
    // "albumId": 1,
    // "id": 1,
    // "title": "accusamus beatae ad facilis cum similique qui sunt",
    // "url": "https://via.placeholder.com/600/92c952",
    // "thumbnailUrl": "https://via.placeholder.com/150/92c952",
    // "dateAdded": "Sat May 19 2018 18:46:20 GMT+0800 (Malaysia Time)",
    // "tags": [
    //     "fails",
    //     "news",
    //     "sad"
    // ],
    // "likes": 38

    // Q1

    let aggregateTagLikes = {}
    // {
    //   tag: numberOfLikes
    // }
    
    for(let imageInfo of data){
      for(let tag of imageInfo.tags){
        if(!aggregateTagLikes[tag]){
          aggregateTagLikes[tag] = 0
        }
        aggregateTagLikes[tag] += imageInfo.likes
      }
    }
    let chartData = []
    for(let tag in aggregateTagLikes){
      this.numberOfLikesPerTag.labels.push(tag)
      chartData.push(aggregateTagLikes[tag])
    }
    this.numberOfLikesPerTag.data = [{
      data: chartData
    }]
    console.log(aggregateTagLikes)

    // Q2
    let tagImageCount = {}
    for(let imageInfo of data){
      for(let tag of imageInfo.tags){
        if(!tagImageCount[tag]){
          tagImageCount[tag] = 0
        }

        tagImageCount[tag] += 1
      }
    }

    let chartData = []

    for(let tag in tagImageCount){
      this.numberOfImagesPerTag.labels.push(tag)
      chartData.push(tagImageCount[tag])
    }
    this.numberOfImagesPerTag.data = ([{
      data: chartData
    }])
    console.log(tagImageCount)

    // Q3 : Number of likes per tag per month

    let monthTagLikesAggregate = {}
    let allTags = []
  
    for( let imageInfo of data){
      const month = new Date(imageInfo.dateAdded).getMonth()
      if(!monthTagLikesAggregate[month]){
        monthTagLikesAggregate[month] = {}
      }

      for( let tag of imageInfo.tags){
        if(!allTags.includes(tag)){
          allTags.push(tag)
        }
        if(!monthTagLikesAggregate[month][tag]){
          monthTagLikesAggregate[month][tag] = 0
        }
        monthTagLikesAggregate[month][tag] += imageInfo.likes
      }
    }

    let seriesChartData = {}

    for(let month in monthTagLikesAggregate){
      this.numberOfLikesPerImagePerTag.labels.push(month)
      const tagLikesAggregate = monthTagLikesAggregate[month]

      for(let tag of allTags ){
        if(!seriesChartData[tag]){
          seriesChartData[tag] = []
        }
        if(!tagLikesAggregate[tag]){
          seriesChartData[tag].push(0)
        } else {
          seriesChartData[tag].push(tagLikesAggregate[tag])
        }
      }
    }
  
    for(let tag in seriesChartData){
      this.numberOfLikesPerImagePerTag.data.push({
        data: seriesChartData[tag],
        label: tag
      })
    }

    console.log(monthTagLikesAggregate)

    // Q4
    let monthImageCount = {}

    for( let imageInfo of data){
      const month = new Date(imageInfo.dateAdded).getMonth()
      if(!monthImageCount[month]){
        monthImageCount[month] = 0
      }
      monthImageCount[month] += 1
    }

    let chartData = []
    for(let month in monthImageCount){
      this.numberOfImagesPerMonth.labels.push(month)
      chartData.push(monthImageCount[month])
    }

    this.numberOfImagesPerMonth.data = [{
      data: chartData
    }]

  }

}

