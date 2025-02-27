import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseDetailComponent } from "./components/course-detail/course-detail.component";


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'courses', component: CourseListComponent},
    { path: 'my-courses', component: CourseDetailComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];