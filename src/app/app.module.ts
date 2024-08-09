import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PublicFormComponent } from './public-complaint-form/public-form.component';
import { ComplaintFormComponent } from './dc-form/complaint-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { TranslationService } from './services/translation.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { CommonModule } from '@angular/common';
import { ComplaintRegistrationFormForAgentComponent } from './agent -complaint-form/complaint-registration-form-for-agent.component';
import { EnquiryOfficersFormComponent } from './enquiry-officers-form/enquiry-officers-form.component';
import { LoginComponent } from './admin-login/login.component';
import { ControlRoomFormComponent } from './control-room-form/control-room-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EoFormHomePageComponent } from './eo-form-home-page/eo-form-home-page.component'; 
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AgentHomeComponent } from './agent-home/agent-home.component';
import { DcHomeComponent } from './dc-home/dc-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ActsAndRulesComponent } from './acts-and-rules/acts-and-rules.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ChatbotComponent } from './chatbot/chatbot.component';



// Function for ngx-translate loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PublicFormComponent,
    ComplaintFormComponent,
    TopBarComponent,
    CarouselComponent,
    LatestNewsComponent,
    UserLoginComponent,
    ComplaintRegistrationFormForAgentComponent,
    EnquiryOfficersFormComponent,
    LoginComponent,
    ControlRoomFormComponent,
    FooterComponent,
    DashboardComponent,
   
    EoFormHomePageComponent,
    AgentHomeComponent,
    DcHomeComponent,
    ContactUsComponent,
    ActsAndRulesComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    
   

    
    NgbCarouselModule, 

    HttpClientModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'public-form', component: PublicFormComponent },
      { path: 'complaint-form', component: ComplaintFormComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'admin-login', component: LoginComponent },
      { path: 'Agent-complaint-form', component: ComplaintRegistrationFormForAgentComponent },
      { path: 'enquiry-officers-form', component:EnquiryOfficersFormComponent },
      { path: 'eo-form-home', component: EoFormHomePageComponent },
      { path: 'EO-Form', component: EnquiryOfficersFormComponent },
      { path: 'agent-home', component: AgentHomeComponent },
      { path: 'dc-home', component: DcHomeComponent },
      { path: 'control-room-form', component: ControlRoomFormComponent }, 
      {path:'dashboard',component:DashboardComponent},
      {path:'contactus',component:ContactUsComponent},
      { path: 'acts-and-rules', component: ActsAndRulesComponent },

      { path: '', redirectTo: '/home', pathMatch: 'full' }
      
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [
    TranslationService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
