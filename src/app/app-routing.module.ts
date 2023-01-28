import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTRESUMEComponent } from './about-resume/about-resume.component';
import { AlphamainComponent } from './MAJOR/alphamain/alphamain.component';
import { Aplhatest1Component } from './MAJOR/aplhatest1/aplhatest1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Login0Component } from './login0/login0.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReadComponent } from './read/read.component';
import { UdemyComponent } from './udemy/udemy.component';
import { UpdateComponent } from './update/update.component';
import { Alphatest2Component } from './MAJOR/alphatest2/alphatest2.component';
import { Alphatest3Component } from './MAJOR/alphatest3/alphatest3.component';
import { NewnavComponent } from './newnav/newnav.component';

const routes: Routes = [
  { path: '', redirectTo: 'login0', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'udemy', component: UdemyComponent },
  { path: 'read', component: ReadComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login0', component: Login0Component },
  { path: 'about_resume', component: ABOUTRESUMEComponent },
  { path: 'alphamain', component: AlphamainComponent },
  { path: 'alphatest1', component: Aplhatest1Component },
  { path: 'alphatest2', component: Alphatest2Component },
  { path: 'alphatest3', component: Alphatest3Component },
  { path: 'newnav', component: NewnavComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
