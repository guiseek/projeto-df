import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { EventsComponent } from './events/events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [PagesComponent, EventsComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
