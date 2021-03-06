import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import my routes
import { ProjectsComponent } from "./projects/projects.component";
import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";

// add them here
const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
