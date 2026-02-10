# PSI QA Ecosystem - Project Master Record

## 1. Project Overview
**Application:** PSI QA (Precision Parity Engine)
**Purpose:** Automated high-precision regression and enterprise audit operations.
**Core Value Proposition:**
* **Speed:** 14m Cycle Duration (-82% vs manual).
* **Precision:** 100% Visual & Logic Parity.
* **Effort:** Zero Human Touch (Auto-Verified).

## 2. Technical Stack
* **Framework:** React 18 (Vite)
* **Styling:** Tailwind CSS (v3.4+)
* **Icons:** Lucide React
* **Build Tool:** Vite
* **State Management:** React `useState` (Local)
* **Routing:** Single Page Architecture (SPA)

## 3. Design System & Theme
**Global Theme Strategy:**
* **Light Mode:** Clean White (`bg-slate-50`) with subtle "Technical Dot Grid" texture.
* **Dark Mode:** Deep Navy (`bg-[#0F111A]`) for high-contrast enterprise feel.
* **Primary Accent:** Neon Green (`#10B981`) - Used for "Success", "Velocity", and active states.
* **Secondary Accent:** Electric Blue (`#3B82F6`) - Used for "Processing" and primary buttons.

## 4. Key Components (Monolithic Structure)
* **Header:** Split view (Text Left, Glassmorphism Kanban Board Right).
* **Hero Section:** "Ship Faster with Extreme Precision."
* **Velocity Graph:** A custom SVG area chart showing exponential growth (Neon Green).
* **Feature Grid:** 3-Column layout (Multi-Layer Parity, Turbo Suites, AI Triage).
* **Ecosystem Grid:**
    * **Google Suite:** Firebase, Analytics, GCP, Maps.
    * **Enterprise Toolchain:** Jira, Slack, GitHub, GitLab, Jenkins, Docker, AWS (12+ integrations).
* **Footer:** Dark Navy with "Network Health: Stable" badge.

## 5. Critical Configuration
* **Tailwind Config:** Must include `darkMode: 'class'` and scan `./src/**/*.{js,ts,jsx,tsx}`.
* **Links:** All call-to-action buttons redirect to the live dashboard: `https://psi-qa.web.app/dashboard`.

## 6. Deployment
* **Production URL:** `https://psi-qa.web.app/`
* **Repository:** GitHub Main Branch (Source of Truth).
