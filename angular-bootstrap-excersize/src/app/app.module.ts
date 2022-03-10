import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BootstrapExcersizeComponent } from "./home-page/home-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { Link1Component } from "./accounts-page/accounts-page.component";
import { Link2Component } from "./employees-page/employees-page.component";
import { BarGraphComponent } from "./bar-graph/bar-graph.component";
import { ChartsModule } from 'ng2-charts';
import { AccountsDataService } from './accounts-data.service';

const appRoutes: Routes = [
  {
    path: "landingPage",
    component: BootstrapExcersizeComponent,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "landingPage",
    pathMatch: "full"
  },
  {
    path: "firstLink",
    component: Link1Component,
    pathMatch: "full"
  },
  {
    path: "secondLink",
    component: Link2Component,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    BootstrapExcersizeComponent,
    Link1Component,
    Link2Component,
    BarGraphComponent
  ],
  bootstrap: [AppComponent],
  providers: [AccountsDataService]
})
export class AppModule {}