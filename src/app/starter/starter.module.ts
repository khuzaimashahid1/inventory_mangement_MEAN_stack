import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dealers Lounge',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dealers Lounge' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [StarterComponent]
})
export class StarterModule {}
