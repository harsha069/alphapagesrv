import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { LoginComponent } from './login/login.component';
import { Login0Component } from './login0/login0.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ABOUTRESUMEComponent } from './about-resume/about-resume.component';
import { NameComponent } from './name/name.component';
import { UdemyComponent } from './udemy/udemy.component';
import { AlphamainComponent } from './MAJOR/alphamain/alphamain.component';
import { Aplhatest1Component } from './MAJOR/aplhatest1/aplhatest1.component';
import { SidenavComponent } from './MAJOR/sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Alphatest2Component } from './MAJOR/alphatest2/alphatest2.component';
import { Alphatest3Component } from './MAJOR/alphatest3/alphatest3.component';
import { NewnavComponent } from './newnav/newnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UpdateComponent,
    ReadComponent,
    LoginComponent,
    Login0Component,
    PageNotFoundComponent,
    ABOUTRESUMEComponent,
    NameComponent,
    UdemyComponent,
    AlphamainComponent,
    Aplhatest1Component,
    SidenavComponent,
    BodyComponent,
    Alphatest2Component,
    Alphatest3Component,
    NewnavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
