import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackoverflowComponent } from './stackoverflow/stackoverflow.component';

const routes: Routes = [
    {
      path: '',
      component: StackoverflowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
