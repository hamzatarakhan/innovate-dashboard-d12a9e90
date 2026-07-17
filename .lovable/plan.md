## Overview

Add messaging + profile menu to the header, a modern login page, working notifications, a richer blog details experience, and make Quick Access cards navigate (with one card opening a link-list modal).

Auth scope: since there's no backend yet, login will be **UI-only** (front-end mock — form validation + redirect to `/`, no real accounts). If you want real accounts, we'd need to enable Lovable Cloud — say the word and I'll add it.

---

## 1. Header upgrades (`src/components/dashboard/Header.tsx`)

- Add a **Messages icon** (`MessageSquare` from lucide) to the left of the bell, with an unread badge dot and a dropdown showing recent messages (mock data).
- Make the **Bell notification** functional: click opens a dropdown listing notifications (mock list from a new `src/data/notifications.ts`), each with title/time/read state, "Mark all as read" action, unread count on the red badge. State kept in component (localStorage-persisted).
- Make the **avatar** clickable → dropdown menu (shadcn `DropdownMenu`) with:
  - "My Preferences" → navigates to new `/preferences` route
  - "Logout" → clears mock auth flag and navigates to `/login`

## 2. Login page (`src/routes/login.tsx`)

Modern, minimal design matching the dashboard's glassmorphism/blue theme:
- Split layout: left = brand panel (Innovate Inc. logo, gradient, tagline); right = form card.
- Email + password fields (shadcn `Input`), "Remember me", "Forgot password?" link, primary "Sign in" button, "Continue with Google/Microsoft" mock buttons.
- Client-side validation only. On submit, set `localStorage.innovateAuth = "1"` and redirect to `/`.
- Route: `src/routes/login.tsx` with its own SEO `head()`.

## 3. Preferences page (`src/routes/preferences.tsx`)

Simple placeholder page with sections: Profile, Notifications toggles, Theme (visual only). Reachable from the avatar menu.

## 4. Blog details enhancement (`src/routes/blogs.$slug.tsx` + `src/data/blogs.ts`)

Extend `Blog` type with: `createdAt`, `updatedAt`, `readTime`, `tags[]`, `authorAvatar`, `authorRole`.

New details page layout:
- **Top bar** with back button + a **search input** that filters other blogs (live filtering; shows a dropdown of matching titles linking to their slug).
- Hero cover image with category badge overlay.
- Title, then author row: avatar, name, role, date created, read time.
- Tag chips.
- Article body (existing `content[]`, styled prose).
- **Sidebar / bottom section**:
  - "Related posts" (other blogs, click to navigate).
  - Share buttons (mock — copy link, Twitter, LinkedIn).
- SEO metadata (already present, extended with `article:published_time`).

## 5. Quick Access navigation (`src/components/dashboard/QuickAccess.tsx`)

Each of the 6 cards becomes a `<Link>` to a placeholder route so the client can see the navigation flow:

| Card | Behavior |
|---|---|
| HR Docs | → `/quick/hr-docs` (placeholder page) |
| IT Helpdesk | → `/quick/it-helpdesk` (placeholder) |
| Benefits | → `/quick/benefits` (placeholder) |
| Policies | → `/quick/policies` (placeholder) |
| Travel | → `/quick/travel` (placeholder) |
| **Learning** (renamed from Careers) | **Opens a modal** listing curated external links (from a `src/data/learningLinks.ts` array — title + url, clickable, opens in new tab). This simulates the "admin-added links" use case. |

Placeholder pages: one shared component under `src/routes/quick.$section.tsx` (dynamic route) — renders a titled "Coming soon" scaffold based on the slug, so we don't need six separate files.

Modal built with shadcn `Dialog`.

---

## Files to add
- `src/routes/login.tsx`
- `src/routes/preferences.tsx`
- `src/routes/quick.$section.tsx`
- `src/data/notifications.ts`
- `src/data/messages.ts`
- `src/data/learningLinks.ts`
- `src/components/dashboard/NotificationsMenu.tsx`
- `src/components/dashboard/MessagesMenu.tsx`
- `src/components/dashboard/UserMenu.tsx`
- `src/components/dashboard/LearningLinksModal.tsx`

## Files to modify
- `src/components/dashboard/Header.tsx` — mount the three menus
- `src/components/dashboard/QuickAccess.tsx` — links + modal trigger
- `src/routes/blogs.$slug.tsx` — new layout with search + author block + related
- `src/data/blogs.ts` — extended fields

## Out of scope (confirm if you want it)
- Real authentication / user accounts (needs Lovable Cloud).
- Persisting messages/notifications across users (currently mock + localStorage).
- Protecting routes behind login (login is currently decorative; every route stays public).
