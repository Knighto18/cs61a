import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

    constructor(private http: HttpClient) { }

    column: string[] = ['lecture', 'book', 'lab', 'work'];

    data: Element[] = [];

    ngOnInit(): void {
        this.http.get('index.json').subscribe(data => {
            console.log(data);
            this.data = JSON.parse(JSON.stringify(data)) as Element[];
        });
    }
}
