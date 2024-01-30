import { ArticleInfo } from '../models/article-info';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed-info.component.html',
  styleUrl: './feed-info.component.css'
})
export class FeedInfoComponent {
  @Input() articleInfo!: ArticleInfo;
}