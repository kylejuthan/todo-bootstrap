import { DailyComponent } from './daily/daily.component';
import { HomeComponent } from './home/home.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
 
export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "daily", component: DailyComponent },
    { path: "todo", component: TodoAppComponent }
];
 
export const AppComponents: any = [
    HomeComponent,
    DailyComponent,
    TodoAppComponent
];