import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CliPageRoutingModule } from './cli-routing.module';
import {StoreService} from './../../servicios/store.service';

import { CliPage } from './cli.page';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {CartComponent} from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CliPageRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    CliPage,
    HomeComponent,
    DetailsComponent,
    CartComponent
  ],
  providers:[StoreService]
})
export class CliPageModule {}
