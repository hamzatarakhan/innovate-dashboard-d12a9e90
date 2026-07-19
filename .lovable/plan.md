## Header (`TopNavbar.tsx`)
- Remove the app menu links (Dashboard, Useful Links, SMS Logs) so only the waffle + brand remain on the left and messages/notifications/user on the right.
- Increase the top bar's vertical breathing room noticeably (~+12px total) by bumping `h-12` → `h-[72px]` (or `py-3` on the row) so it feels airier top and bottom.
- In `NotificationsMenu.tsx`, add an "All activities" footer button beneath the notification list (Odoo-style CTA that opens the full activity list; wired as a no-op placeholder for now).

## Dashboard (`UpcomingEvents.tsx` + `BlogsCarousel.tsx`)
- Add a "Go to Calendar" button in the Upcoming Events card header linking to `/calendar`.
- Remove the category label (Design/Engineering/Product) from the Latest Blogs carousel card on the dashboard.

## Blog details page (`routes/blogs.$slug.tsx`)
- Remove the category badge on the hero image.
- Remove the author role line (e.g. "Director of Product") under the author name.
- Remove the read-time meta ("6 min read" etc.).
- Remove the tag chips row (#Product #Reflection #Leadership).
- Remove the Share section (Copy link / Twitter / LinkedIn).
- Remove the Related posts section.
- Remove the search input in the top bar (keep only "Back to dashboard").

## Sidebar (`Sidebar.tsx`)
- Remove the "Powered by Odoo 19" footer line.
- (Skip the MOSD main-logo and sub-logo additions per your reply — will revisit later.)

## Out of scope
- Sidebar logo work is deferred.
- No changes to routes/data models; purely presentational edits.
