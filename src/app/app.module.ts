import { provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, RouterLink, RouterOutlet } from "@angular/router";

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { MarkdownModule } from 'ngx-markdown';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        MarkdownModule.forRoot(),
        MatButtonModule,
        MatTableModule,
        RouterOutlet,
        RouterLink,
    ],
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(),
        provideRouter(routes),
        provideZoneChangeDetection({ eventCoalescing: true }),
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }