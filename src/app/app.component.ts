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

    // Parameter
    type: string | null = '';
    key: string | null = '';

    // Index
    indexColumn: string[] = ['lecture', 'book', 'lab', 'work'];
    indexData: Element[] = [];

    // Document
    document = "";

    getParam(): void {
        this.route.queryParamMap.subscribe(paramMap => {
            this.type = paramMap.get('type');
            this.key = paramMap.get('key');

            if (this.type !== null && this.key !== null) {
                this.http.get(this.type + '/' + this.key + '.md', { responseType: 'text' })
                    .subscribe(data => { this.document = data; });
            }
        });
    }

    resetParam(): void {
        this.router.navigate(['/']);
    }

    ngOnInit(): void {
        this.getParam();

        this.http.get('index.json').subscribe(data => {
            this.indexData = JSON.parse(JSON.stringify(data)) as Element[];
        });
    }

}
