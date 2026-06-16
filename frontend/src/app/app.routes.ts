import { Routes } from '@angular/router';

import { Home } from './home.component';
import { Docs } from './docs.component';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'docs',
    component: Docs
  }
];
