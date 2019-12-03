import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndependentComponent } from './independent/independent.component';

const appRoutes: Routes = [
  
  // { path: 'problemBank', 
  //   component: LinerEquationProblemBank
  // },
  // { path: 'plusMinus', 
  //   component: PlusMinus
  // },
  // {
  //   path: 'unitOverview',
  //   component: LinearEquationUnitOverviewComponent
  // },
  {
    path: 'independent/:component/:type',
    component: IndependentComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }