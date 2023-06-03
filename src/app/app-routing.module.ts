import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { ForCompaniesComponent } from './for-companies/for-companies.component';
import { ForApplicantsComponent } from './for-applicants/for-applicants.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // HomeComponent is the root
  { path: 'profile', component: ProfileComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'for-companies', component: ForCompaniesComponent },
  { path: 'for-applicants', component: ForApplicantsComponent },
  { path: 'vacancies', component: VacanciesComponent},
  { path: 'contact', component: ContactComponent},
  // other routes...
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
