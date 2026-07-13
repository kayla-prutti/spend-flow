🥅 My goal: a working dashboard that feels production-ready—responsive, accessible, data-driven, and easy to explain in an interview.

🪜 Week 1 — Foundation and dashboard shell
Build the page structure from the design:
- App setup, TypeScript, linting, formatting, and a clean component structure
- Persistent left sidebar, top search/header, date-range control
- Dashboard heading and the four KPI cards:
    - Total Spend
    - Pending Approval
    - Approved
    - Rejected
- Use realistic mock data and define types early: Transaction, Request, Category, Activity
- Create reusable UI primitives: Card, Badge, IconButton, Table, SidebarNav
End-of-week result: the layout closely matches the screenshot, with responsive desktop/tablet behavior.

📊 Week 2 — Data visualizations and transactions
Build the dashboard’s main information area:
- Spend-over-time chart with daily/weekly selector
- Spend-by-category donut chart and matching legend
- Recent Transactions table with:
    - merchant, category, date, amount, status, card
    - colored category/status badges
    - row action menu
- Date filtering that updates KPI totals, chart data, and transaction results
- Empty/loading/error states, even if data remains local
End-of-week result: the central dashboard is functional and all numbers are calculated from the same dataset.

📲 Week 3 — Requests, activity, and interactions
Build the right-hand workflow panels and make the page feel like an app:
- Pending Requests list with requestor, amount, and relative time
- Recent Activity feed
- “View all” routes or lightweight detail pages for transactions and requests
- Search across transactions/vendors
- Approve/reject a pending request and immediately update:
  - request status
  - KPI cards
  - activity feed
  - relevant lists
- Responsive mobile layout: sidebar collapses, panels stack cleanly
End-of-week result: someone can interact with the dashboard and see believable state changes.

🚀 Week 4 — Production polish and interview preparation
- Turn the implementation into a strong portfolio/interview artifact:
Match spacing, typography, colors, borders, hover states, and loading states closely to the design
- Accessibility pass:
  - keyboard navigation
  - visible focus states
  - semantic buttons/tables
  - meaningful labels for charts and icons
- Add tests for the high-value flows:
  - date filter changes totals
  - search filters transactions
  - approve/reject updates dashboard state
- Performance and code cleanup: avoid unnecessary re-renders; organize feature-based folders
- Write a concise README with:
  - project goal
  - architecture
  - key tradeoffs
  - how to run it
  - screenshots/GIF
- Practice a 3-minute walkthrough: “Here is the data model, here is state flow, here is how the dashboard stays consistent.”
End-of-week result: deployable project, clean repository, and a story you can confidently explain.

🎬 A smart scope boundary: implement only the Dashboard deeply. Make sidebar items navigable placeholders or minimal pages—don’t spend the four weeks building cards, vendors, policies, reports, and settings.
For interviews, the strongest parts to emphasize will be reusable components, derived financial metrics, consistent state updates after approval actions, responsive design, and testing.
