import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

export interface Element {
    lecture: string;
    book: string;
    lab: string;
    work: string;
}

@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private http: HttpClient,
                private route: ActivatedRoute,
                private router: Router) {}

    key: string | null = '';

    // Index
    indexColumn: string[] = ['lecture', 'book', 'lab', 'work'];
    indexData: Element[] = [];

    // Document
    document = `
    # Welcome to My App
    
    This is the first page :)

    You can write your *content* here.
  `;

    getKey(): void {
        this.route.queryParamMap.subscribe(paramMap => {
            this.key = paramMap.get('key');
        });
    }

    resetKey(): void {
        this.router.navigate(['/']);
    }

    ngOnInit(): void {
        this.getKey();

        this.http.get('index.json').subscribe(data => {
            console.log(data);
            this.indexData = JSON.parse(JSON.stringify(data)) as Element[];
        });
    }

}
