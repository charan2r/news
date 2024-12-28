import { Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const routes: Routes = [
    {path: '', component: NewsListComponent},
    {path: 'article/:url', component: ArticleDetailComponent}
];
