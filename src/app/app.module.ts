import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserService } from './services/user/user.service';
import { MockUserService } from './services/user/mock/user.service.mock';
import { FooterComponent } from './components/footer/footer.component';
import { I18nService } from './services/i18n/i18n.service';
import { StaticI18nService } from './services/i18n/static/i18n.service.static';
import { NewsService } from './services/news/news.service';
import { APINewsService } from './services/news/api/news.service.api';
import { CredentialFormComponent } from './components/login/credential-form/credential-form.component';
import { RegisterFormComponent } from './components/register/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    CredentialFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: UserService, useClass: MockUserService },
    { provide: I18nService, useClass: StaticI18nService },
    { provide: NewsService, useClass: APINewsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
