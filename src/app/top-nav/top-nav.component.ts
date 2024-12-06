import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-top-nav',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  title: string = 'Dashboard Playground'
  menuItems: any[] = [
    { name: 'Page 1', route: 'pages/page1' },
    { name: 'Page 2', route: 'pages/page2' },
    { name: 'Page 3', route: 'pages/page3' },
    { name: 'Page 4', route: 'pages/page4' },
    { name: 'Page 5', route: 'pages/page5' }
  ]

  toolbarAction(evt:Event, action:string){
    console.log(action);
  }
}
