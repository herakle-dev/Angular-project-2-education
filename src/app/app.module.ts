import { UiKitModule } from './shared/ui-kit/ui-kit.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './core/main-page/main-page.component';
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemDetailsComponent } from './core/item-details/item-details.component';


@NgModule({
    declarations: [
        AppComponent,
        ItemDetailsComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        UiKitModule,
        BrowserAnimationsModule,
    ]
})
export class AppModule { }
