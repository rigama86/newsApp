import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './components/config/config.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';


const routes: Routes = [
  { path: '',
    component: ConfigComponent,
    pathMatch: 'full'
  },
  { path: 'news',
    component: ViewNewsComponent,
  }
];

export const APP_ROUTES = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}