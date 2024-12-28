import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  newsArticles: any[] = [];
  selectedCategory: string = 'health';
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNewsArticles();
  }

  getNewsArticles() {
    this.newsService.getTopHeadlines(this.selectedCategory).subscribe(
      (data) => {
        console.log('API Response:', data); // Debug
        this.newsArticles = data.articles;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  changeCategory(category: string) {
    if (this.selectedCategory !== category) {
      console.log('Switching category to:', category); // Debug
      this.selectedCategory = category;
      this.getNewsArticles();
    }
  }

}
