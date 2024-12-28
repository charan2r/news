import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  articleUrl: string = '';
  articleDetails: any = null;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.articleUrl = params.get('url')!;
      this.getArticleDetails();
    });
  }

  getArticleDetails(): void {
    this.newsService.getArticleDetails(this.articleUrl).subscribe(
      data => {
        this.articleDetails = data;
      },
      error => {
        console.error('Error fetching article details', error);
      }
    );
  }
}
