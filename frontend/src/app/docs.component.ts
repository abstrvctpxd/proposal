import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  standalone: true,
  template: `
    <section class="page docs-page">
      <div class="content-card">
        <h1>Proposal documentation</h1>
        <p>Review the system design, business model, and development plan in the repository docs.</p>
        <ul>
          <li><a href="/docs/srs.md" target="_blank">System Requirements Specification</a></li>
          <li><a href="/docs/development_plan.md" target="_blank">Development Plan</a></li>
          <li><a href="/docs/bizmodel.md" target="_blank">Business Model</a></li>
        </ul>
        <p class="note">Open these files from the repo or use the local docs folder.</p>
      </div>
    </section>
  `,
  styles: [
    `
      .docs-page {
        padding: 2rem;
      }
      .content-card {
        max-width: 45rem;
        padding: 2rem;
        border-radius: 1rem;
        border: 1px solid #cbd5e1;
        background: #ffffff;
      }
      h1 {
        margin-top: 0;
      }
      ul {
        margin: 1.25rem 0;
        padding-left: 1.2rem;
        color: #334155;
      }
      li {
        margin-bottom: 0.75rem;
      }
      a {
        color: #2563eb;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .note {
        margin-top: 1rem;
        color: #475569;
      }
    `
  ]
})
export class Docs {}
