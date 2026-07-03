import { Routes } from '@angular/router';

import { Home } from './home.component';
import { Docs } from './docs.component';
import { VendorList } from './vendor-list.component';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'docs',
    component: Docs
  },
  {
    path: 'vendors',
    component: VendorList
  }
];
