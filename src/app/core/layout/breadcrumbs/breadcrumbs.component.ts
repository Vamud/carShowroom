import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { LanguageService } from '@app/services/language.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  menuItems!: MenuItem[];
  home!: MenuItem;
  dictionary!: any;
  homeLabel!: string;
  dictionary$ = this.languageService.fetchTranslation();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private languageService: LanguageService) {}

  ngOnInit(): void {
    this.home = { label: 'Home', routerLink: '/home' };
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuItems = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    routerLink: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '') {
        routerLink += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];

      if (!this.isNullOrUndefined(label) && label != 'Home') {
        breadcrumbs.push({ label, routerLink });
      }

      return this.createBreadcrumbs(child, routerLink, breadcrumbs);
    }

    return breadcrumbs;
  }

  private isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }
}
