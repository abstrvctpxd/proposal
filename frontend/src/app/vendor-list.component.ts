import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VendorService, Vendor } from './vendor.service';

@Component({
  selector: 'app-vendor-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page vendors-page">
      <div class="content-card">
        <h1>Campus Vendors</h1>
        <p>Live vendor data powered by the backend API.</p>

        <div *ngIf="loading" class="status">Loading vendors...</div>
        <div *ngIf="error" class="status error">{{ error }}</div>

        <ul *ngIf="!loading && !error">
          <li *ngFor="let vendor of vendors">
            <strong>{{ vendor.name }}</strong>
            <p>{{ vendor.category }} · {{ vendor.location }}</p>
          </li>
        </ul>

        <div class="actions">
          <a routerLink="/" class="button">Back home</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .vendors-page {
        padding: 2rem;
      }
      .content-card {
        max-width: 45rem;
        padding: 2rem;
        border-radius: 1rem;
        border: 1px solid #cbd5e1;
        background: #ffffff;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
      }
      li {
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 0.75rem;
        border: 1px solid #e2e8f0;
      }
      .status {
        margin: 1rem 0;
      }
      .error {
        color: #dc2626;
      }
      .actions {
        margin-top: 1.5rem;
      }
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.85rem 1.4rem;
        border-radius: 999px;
        background: #2d8cff;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
      }
    `
  ]
})
export class VendorList implements OnInit {
  vendors: Vendor[] = [];
  loading = true;
  error = '';

  constructor(private readonly vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe({
      next: (vendors) => {
        this.vendors = vendors;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load vendor data.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
