import { Routes } from '@angular/router';

import { DocComponent } from "./doc/doc.component";
import { IndexComponent } from "./index/index.component";

export const routes: Routes = [
    { path: 'index', component: IndexComponent },
    { path: 'doc/:key', component: DocComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];
