import { provideHttpClient} from '@angular/common/http';
import { provideZoneChangeDetection, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { provideRouter, RouterOutlet } from "@angular/router";

import { routes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        MatTableModule,
        RouterOutlet,
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