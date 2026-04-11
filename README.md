# Zeller Frontend Coding Assessment

A modern, accessible, and performant React application built to display and manage customer data using GraphQL. This project demonstrates strong frontend engineering practices including component design, state management, testing, accessibility, and UI/UX polish.

## 🚀 Live Features Overview

- **GraphQL Integration:** Robust data management via Apollo Client.
- **Navigation:** Seamless routing including a custom "Not Found" page.
- **Dark / Light Theme:** Native toggle with persistent user preference.
- **Accessible UI:** Fully ARIA-compliant components for screen reader support.
- **Animated Splash Screen:** Custom multi-step sequence using Lottie animations.
- **Testing Suite:** Comprehensive unit and integration testing with Vitest and Testing Library.
- **Customer Listing Page:** Dynamic data fetching with administrative filtering (Admin / Manager).
- **Resilient UI:** Integrated handling for Error states, Empty states, & Skeleton loaders for improved performance.

---

## 🏗️ Tech Stack

| Category         | Technology                     |
| :--------------- | :----------------------------- |
| **Framework**    | React (Vite)                   |
| **Language**     | TypeScript                     |
| **Styling**      | Tailwind CSS                   |
| **State / Data** | Apollo Client (GraphQL)        |
| **Testing**      | Vitest + React Testing Library |
| **Animations**   | Lottie (dotlottie-react)       |
| **Icons**        | Lucide React                   |

---

## 📂 Project Structure

```text
src/
├── api/            # API configuration (Apollo Client)
├── assets/         # Images, Lottie files
├── components/     # Reusable UI (Loader, Error, Empty, ThemeToggle)
│   ├── common/     # Shared design system components
│   ├── customers/  # Customer-specific feature components
│   └── layout/     # App shell (header, footer)
├── context/        # Global Theme context
├── graphql/        # GraphQL queries & schemas
├── hooks/          # Custom hooks
├── pages/          # Top-level route components
├── test/           # Test setup and mocks
├── types/          # Global TypeScript definitions
├── router.tsx      # App routing configuration
├── App.tsx         # Root component
└── main.tsx        # Entry point
```

---

## ⚙️ Setup Instructions

### 1. Clone repository

```bash
git clone <repo-url>
cd zeller-frontend-code-challenge
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root:

```env
VITE_APP_SYNC_API_KEY=your_api_key_here
```

_Note: API keys are not committed for security reasons._

### 4. Run the app

```bash
npm run dev
```

### 5. Run tests & coverage

```bash
npm run test
npm run coverage
```

_Detailed reports can be viewed at `coverage/index.html`._

---

## 🧠 Architecture & Design Decisions

1.  **Component-Based Architecture:** Focused on small, reusable components with a strict separation of concerns between UI, data fetching, and state management.
2.  **Custom Hooks:** Encapsulates GraphQL logic, loading/error states, and data transformation to keep UI components lean.
3.  **Lazy Loading:** Implemented for heavy components to reduce initial bundle size and improve Load Time (LCP).
4.  **Accessibility (A11y):**
    - `role="status"` for loaders.
    - `aria-live="polite"` for dynamic updates.
    - Semantic HTML and accessible button labels.
5.  **UI States Handling:** Explicit states for **Loading** (Skeletons), **Error** (Retry UI), **Empty** (Illustrations), and **Success**.

---

## 🧪 Testing Strategy

### Tools Used

- **Vitest:** For fast, concurrent test execution.
- **React Testing Library:** To ensure tests focus on user behavior rather than implementation details.

### Coverage (~95%)

- **Components:** Rendering, props, and styling.
- **Hooks:** Logic and state transitions in `useCustomers`.
- **Interactions:** Filtering logic and theme switching.
- **Edge Cases:** Handling API failures and empty data sets.

---

## 🎨 UI/UX & Performance

- **Clean Design:** Minimalist, modern layout with a clear visual hierarchy.
- **Performance:** Optimized with minimal re-renders and efficient GraphQL fragment usage.
- **Responsive:** Mobile-first approach using Tailwind's utility classes.

---

## ⚠️ Known Limitations

1.  **Dataset Size:** The current API returns a small dataset. For production-scale data, **List Virtualization** (e.g., `react-window`) would be implemented.
2.  **Animation Hosting:** Currently uses CDN-hosted Lottie files; these can be moved to local assets to reduce external dependencies.

## 🚀 Future Improvements

- Implement **Pagination** or **Infinite Scroll** for larger datasets.
- Add **Caching strategies** (Apollo Cache) for offline persistence.
- Introduce **End-to-End (E2E) testing** using Playwright.
- Refine animation orchestration for more complex transitions.

---

## 🧑‍💻 Author

**Soikat Chakrabarty** Senior Software Engineer
