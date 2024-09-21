import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { PredictionComponent } from './pages/prediction/prediction.component';

const routes: Routes = [
  { path: '',
    component: HomePageComponent,
  },
  { path: 'analytics',
    component: AnalyticsComponent,
  },
  { path: 'prediction',
    component: PredictionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
