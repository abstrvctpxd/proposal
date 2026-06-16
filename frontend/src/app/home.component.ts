import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page home-page">
      <div class="hero">
        <h1>{{ title() }}</h1>
        <p>A simple Angular shell for the UniCryptoPay campus payment platform.</p>
        <div class="actions">
          <a routerLink="/docs" class="button">View proposal docs</a>
        </div>
      </div>

      <div class="cards">
        <article>
          <h2>Campus payments</h2>
          <p>Build a secure, university-focused payment flow with Web3-enabled wallets.</p>
        </article>
        <article>
          <h2>Vendor experience</h2>
          <p>Support QR-based checkout, fast transfers, and a lightweight mobile-friendly UI.</p>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .home-page {
        display: grid;
        gap: 2rem;
        padding: 2rem;
      }
      .hero {
        max-width: 44rem;
      }
      .hero h1 {
        margin: 0 0 1rem;
        font-size: clamp(2.5rem, 5vw, 4rem);
        line-height: 1.05;
      }
      .hero p {
        margin: 0;
        color: #334155;
        font-size: 1.05rem;
      }
      .actions {
        margin-top: 1.75rem;
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
      .cards {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
      }
      article {
        padding: 1.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 1rem;
        background: #ffffff;
      }
      article h2 {
        margin: 0 0 0.75rem;
        font-size: 1.2rem;
      }
      article p {
        margin: 0;
        color: #475569;
        line-height: 1.75;
      }
    `
  ]
})
export class Home {
  protected readonly title = signal('UniCryptoPay');
}
