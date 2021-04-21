import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicSHomeComponent} from './public-shome/public-shome.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';

const routes: Routes = [
  {path: '', component: PublicSHomeComponent},
  {path: 'adminlogin', component: AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
