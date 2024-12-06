import { Routes } from '@angular/router';
import {Page1Component} from './pages/page1/page1.component';
import {Page2Component} from './pages/page2/page2.component';
import {Page3Component} from './pages/page3/page3.component';
import {Page4Component} from './pages/page4/page4.component';
import {Page5Component} from './pages/page5/page5.component';
import {HomepageComponent} from './pages/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'pages/page1', component: Page1Component },
  { path: 'pages/page2', component: Page2Component },
  { path: 'pages/page3', component: Page3Component },
  { path: 'pages/page4', component: Page4Component },
  { path: 'pages/page5', component: Page5Component },
];
