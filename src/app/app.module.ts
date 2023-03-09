import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './misComponentes/about-me/about-me.component';
import { SkillsComponent } from './misComponentes/skills/skills.component';
import { CvComponent } from './misComponentes/cv/cv.component';
import { PortfolioComponent } from './misComponentes/portfolio/portfolio.component';
import { ContactComponent } from './misComponentes/contact/contact.component';
import { HeaderComponent } from './misComponentes/header/header.component';
import { HomeComponent } from './misComponentes/home/home.component';
import { FooterComponent } from './misComponentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillsComponent,
    CvComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
