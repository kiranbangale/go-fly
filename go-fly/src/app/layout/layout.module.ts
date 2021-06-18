import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { TabsComponent } from './header/tabs/tabs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    MainContainerComponent,
    LayoutComponent,
    TabsComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
