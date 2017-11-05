import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components.
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

// Route list
const appRoutes: Routes = [
  { path: '/', component: AboutComponent },
  { path: '/skills', component: SkillsComponent },
  { path: '/experience', component: ExperienceComponent },
  { path: '/education', component: EducationComponent },
  { path: '/certificates', component: CertificatesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
