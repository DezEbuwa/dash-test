import { Component } from '@angular/core';
import {ArticleCardComponent} from '../../widgets/article-card/article-card.component';

@Component({
  selector: 'app-page1',
  imports: [ArticleCardComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  cardCount: number = 20;
  cardList: any[] = []

  ngOnInit(){
    for(let i = 0; i < this.cardCount; i++){
      this.cardList.push({
        name: `Article ${i}`
      })
    }
  }
}
