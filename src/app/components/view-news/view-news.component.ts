import { Component, OnInit } from '@angular/core';
import { Article } from '../../interface/NewResponse.interface';
import { NewsService } from '../../services/news.service';
import { Category } from '../../interface/Category.interface';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit {
  articles: Article[] = [];
  categories = [];
  timeUpdate: string;
  fontStyle: string;
  
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.categories.push(JSON.parse(localStorage.getItem('categories'))) ;
    this.timeUpdate = localStorage.getItem('secondsUpdate');
    this.fontStyle = localStorage.getItem('selectFont');
    this.showCategory( (this.categories[0])[0].api );
  }

  showCategory = (category: string) => {
    this.articles = [];
    this.newsService.getTopHeadlinesCategory(category).subscribe(
      articles => {
        this.articles.push( ...articles );
        console.log(this.articles)
      });
  }


}
