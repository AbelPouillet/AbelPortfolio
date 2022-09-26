import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationsComponent } from './presentations/presentations.component';
import { ContactComponent } from './contact/contact.component';
import { CompetencesComponent } from './competences/competences.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetsComponent } from './projets/projets.component';
import { DocumentsComponent } from './documents/documents.component';
import { ParcourComponent } from './parcour/parcour.component';
import { ExperiencesComponent } from './experiences/experiences.component';


@NgModule({
  declarations: [
    AppComponent,
    PresentationsComponent,
    ContactComponent,
    CompetencesComponent,
    NavbarComponent,
    FooterComponent,
    ProjetsComponent,
    DocumentsComponent,
    ParcourComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
