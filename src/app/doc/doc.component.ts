import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doc',
  standalone: false,
  templateUrl: './doc.component.html'
})
export class DocComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  key: string = '';

  markdownContent = `
    # Welcome to My App

    You can write your *content* here.
  `;

  ngOnInit(): void {
    this.key = this.route.snapshot.params['key'];
  }

  back(): void {
    this.router.navigate(['/index']);
  }
}
