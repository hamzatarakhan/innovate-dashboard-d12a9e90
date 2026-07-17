# Innovate Inc. Design System v1

Use this document when generating new pages or components for the Innovate Inc. dashboard. Every value below is derived from the actual codebase. Do not invent new colors, spacing, or patterns that are not listed here.

---

## 1. Page Shell & Background

- Every page sits on the same fixed gradient.
- Place a fixed background element behind all content so long pages still cover the full viewport.

```tsx
<div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 -z-10" />
<main className="relative z-0">…</main>
```

- Background gradient: `bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100`
- Gradient colors (hex equivalents): `#dbeafe` → `#f3e8ff` → `#fce7f3`

---

## 2. Color Palette

### Brand — Blue family
Only these blues are used for brand actions, active navigation, and the logo tile.

| Token | Tailwind class | Hex | Usage |
| --- | --- | --- | --- |
| Primary | `bg-blue-600` | `#2563eb` | Logo tile, active nav, primary buttons |
| Primary Hover | `bg-blue-700` | `#1d4ed8` | Primary button hover state |
| Primary Tint | `bg-blue-50` | `#eff6ff` | Nav hover background, subtle chips |
| Primary Text | `text-blue-600` | `#2563eb` | Links, nav hover text, brand text |

### Text Scale — Five gray steps
Never introduce a new gray. Use only these five classes.

| Name | Tailwind class | Hex | Usage |
| --- | --- | --- | --- |
| Heading | `text-gray-900` | `#111827` | Page titles, greetings, card metrics |
| Body | `text-gray-800` | `#1f2937` | Default body text |
| Nav / Muted body | `text-gray-600` | `#4b5563` | Sidebar links, secondary body |
| Caption | `text-gray-500` | `#6b7280` | Meta info, date/time, hints |
| Disabled | `text-gray-400` | `#9ca3af` | Placeholder, disabled controls |

### Status & Accent Colors
Use only for icons, dots, inline badges, and feedback — never as page backgrounds.

| Name | Tailwind class | Hex | Usage |
| --- | --- | --- | --- |
| Success | `text-green-500` / `bg-green-500` | `#22c55e` | Tasks done, positive states |
| Info | `text-blue-500` / `bg-blue-500` | `#3b82f6` | Info icons, neutral flags |
| Accent | `text-indigo-500` / `bg-indigo-500` | `#6366f1` | Secondary highlight |
| Warning | `text-yellow-500` / `bg-yellow-500` | `#eab308` | Attention, banners |
| Danger | `text-red-500` / `bg-red-500` | `#ef4444` | Errors, destructive actions |

### Tinted Card Backgrounds
Used for Quick Access tiles. Pair the background, text, and icon classes exactly.

| Color | Background | Text | Icon |
| --- | --- | --- | --- |
| Blue | `bg-blue-100/50` | `text-blue-800` | `text-blue-600` |
| Green | `bg-green-100/50` | `text-green-800` | `text-green-600` |
| Purple | `bg-purple-100/50` | `text-purple-800` | `text-purple-600` |
| Orange | `bg-orange-100/50` | `text-orange-800` | `text-orange-600` |
| Red | `bg-red-100/50` | `text-red-800` | `text-red-600` |
| Indigo | `bg-indigo-100/50` | `text-indigo-800` | `text-indigo-600` |

### Sticky Note Colors
Only used in the Bulletin Board widget.

| Name | Tailwind class |
| --- | --- |
| Yellow | `bg-yellow-200` |
| Pink | `bg-pink-200` |
| Blue | `bg-blue-200` |
| Green | `bg-green-200` |
| Purple | `bg-purple-200` |

---

## 3. Surfaces

Three surface treatments are used. Pick one per context.

| Surface | Tailwind classes | Usage |
| --- | --- | --- |
| Glass card | `glassmorphism rounded-xl` | Default widgets on the page |
| Solid white | `bg-white rounded-xl border border-gray-200` | Modals, popovers, dropdowns |
| Sidebar surface | `bg-white/70 backdrop-blur-lg border-gray-200/50` | Sidebar, mobile top bar, sticky headers |

Custom CSS that backs these classes (do not edit):

```css
.glassmorphism {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.card-hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.sticky-note { transition: transform 0.2s ease; }
.sticky-note:hover { transform: rotate(2deg) scale(1.05); }
.fade-in { animation: fadeIn 0.5s ease-in-out; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 4. Typography

System sans-serif stack. Only use these type sizes.

| Usage | Tailwind classes | Notes |
| --- | --- | --- |
| Display | `text-4xl font-bold tracking-tight` | Hero headings |
| Page title | `text-3xl font-bold text-gray-900` | Page headers |
| Card metric | `text-2xl font-bold` | Large numbers in stat cards |
| Widget title | `text-xl font-bold` | Card titles |
| Body | `text-base text-gray-800` | Default paragraph text |
| Caption / Meta | `text-sm text-gray-500` | Dates, hints, secondary info |
| Small UI | `text-xs font-semibold` | Tags, badges, counts |

Font stack: Tailwind default sans (`font-sans`) — no custom font is loaded.

---

## 5. Radii, Spacing & Motion

### Radii
| Tailwind class | Usage |
| --- | --- |
| `rounded-md` | Small chips, tags |
| `rounded-lg` | Buttons, inputs, nav links |
| `rounded-xl` | Cards, widgets, modals |
| `rounded-full` | Avatars, notification dots |

### Spacing scale
| Token | Tailwind class | Pixels |
| --- | --- | --- |
| xs | `p-2` | 8px |
| sm | `p-3` | 12px |
| md | `p-4` | 16px |
| lg | `p-6` | 24px |
| xl | `p-8` | 32px |

### Motion
| Class | Effect |
| --- | --- |
| `card-hover-effect` | Hover: translateY(-5px) + shadow |
| `fade-in` | 0.5s entrance fade + slide up |
| `sticky-note` | Hover: rotate(2deg) scale(1.05) |
| `transition-colors` | Smooth color transitions for buttons |

---

## 6. Buttons

Only these button variants exist. Do not create new styles.

### Primary
```tsx
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
  Label
</button>
```

### Secondary
```tsx
<button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-4 py-2 rounded-lg border border-gray-300 transition-colors">
  Label
</button>
```

### Ghost
```tsx
<button className="text-blue-600 hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg transition-colors">
  Label
</button>
```

### Destructive
```tsx
<button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
  Delete
</button>
```

### Icon Button (with badge)
```tsx
<button className="p-2 rounded-full bg-white/80 hover:bg-gray-100 text-gray-700 relative" aria-label="Notifications">
  <Bell className="w-5 h-5" />
  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-blue-600 text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center">
    3
  </span>
</button>
```

### Sizes
| Size | Classes |
| --- | --- |
| Small | `px-3 py-1 rounded-lg text-sm` |
| Medium | `px-4 py-2 rounded-lg` |
| Large | `px-6 py-3 rounded-lg text-lg` |
| Full-width (login forms) | `w-full sm:w-auto sm:min-w-[240px] px-4 py-2 rounded-lg` |

---

## 7. Sidebar

### Navigation items
Exact sidebar order and labels (from top to bottom):

1. Dashboard
2. Discuss
3. Calendar
4. To-do
5. Library
6. Tasks
7. Internal Portal
8. Surveys
9. Employees
10. Apps
11. Settings

### Icon mapping (Lucide)
| Label | Icon import |
| --- | --- |
| Dashboard | `LayoutDashboard` |
| Discuss | `MessageCircle` |
| Calendar | `Calendar` |
| To-do | `CheckSquare` |
| Library | `BookOpen` |
| Tasks | `ListTodo` |
| Internal Portal | `Globe` |
| Surveys | `FileQuestion` |
| Employees | `Users` |
| Apps | `LayoutGrid` |
| Settings | `Settings` |

### Sidebar spec
```tsx
<aside className="bg-white/70 backdrop-blur-lg border-r border-gray-200/50 lg:w-64 flex flex-col p-6">
  <div className="flex items-center gap-3 mb-8">
    <div className="bg-blue-600 p-2 rounded-lg"><Zap className="w-6 h-6 text-white" /></div>
    <h1 className="text-xl font-bold text-gray-800">Innovate Inc.</h1>
  </div>
  <nav className="space-y-1 flex-1">
    {items.map((item) => (
      <Link
        key={item.title}
        to={item.to}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-sm transition-colors",
          isActive ? "text-white bg-blue-600" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        )}
      >
        <item.icon className="w-5 h-5" />
        {item.title}
      </Link>
    ))}
  </nav>
  <div className="mt-6 pt-6 border-t border-gray-200/60 flex items-center gap-3 text-gray-500">
    <div className="bg-gray-200/70 p-1.5 rounded-md"><Zap className="w-5 h-5" /></div>
    <span className="font-semibold text-sm">Your logo</span>
  </div>
</aside>
```

### Mobile behavior
- Sidebar is a drawer on mobile/tablet.
- Drawer width: `w-72 max-w-[80vw]`.
- Hamburger menu button sits **to the left** of the logo in the top bar.
- Active route uses `bg-blue-600 text-white`.
- Inactive route uses `text-gray-600 hover:bg-blue-50 hover:text-blue-600`.

---

## 8. Page Header

Standard header layout: greeting left, actions right.

```tsx
<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
  <div>
    <h2 className="text-3xl font-bold text-gray-900">Good Morning, Alex!</h2>
    <p className="text-gray-500 mt-1">Friday, July 17, 2026 · 10:24 AM</p>
  </div>
  <div className="flex items-center gap-3 mt-4 sm:mt-0">
    {/* Messages icon button */}
    {/* Notifications icon button */}
    {/* User avatar dropdown */}
  </div>
</header>
```

### Header actions (right side)
| Action | Visual |
| --- | --- |
| Messages | Icon button with badge count |
| Notifications | Icon button with badge count |
| Profile | Avatar circle + name + chevron dropdown |

### User dropdown menu
Menu items in the profile dropdown:
- My Preferences
- Log out

If a status picker is included, the submenu is: Online, Away, Do Not Disturb, Offline.

---

## 9. Cards & Widgets

### Stat Card
```tsx
<div className="glassmorphism rounded-xl p-6 flex items-center gap-4 card-hover-effect">
  <CheckCircle className="w-10 h-10 text-green-500" />
  <div>
    <p className="text-gray-500">Tasks Completed</p>
    <p className="text-2xl font-bold">12 / 18</p>
  </div>
</div>
```

### Tinted Quick-Access Tile
```tsx
<button className="bg-blue-100/50 rounded-xl p-4 flex flex-col items-center gap-2 card-hover-effect cursor-pointer">
  <Zap className="w-6 h-6 text-blue-600" />
  <p className="text-blue-800 font-semibold text-sm">Tile label</p>
</button>
```

### Sticky Note
```tsx
<div className="bg-yellow-200 sticky-note rounded-lg p-4 text-gray-800 text-sm min-h-24">
  Note content
</div>
```

---

## 10. Form Fields

### Text input
```tsx
<input
  type="text"
  placeholder="alex.doe"
  className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
```

### Password input
```tsx
<input
  type="password"
  placeholder="••••••••"
  className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
```

### Search input
```tsx
<div className="relative">
  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
  <input
    type="text"
    placeholder="Search anything..."
    className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
```

### Label
```tsx
<label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
```

### Checkbox / Radio
```tsx
<input type="checkbox" className="w-4 h-4 accent-blue-600" />
<input type="radio" name="r" className="w-4 h-4 accent-blue-600" />
```

---

## 11. Feedback

### Alert banners
| Type | Classes |
| --- | --- |
| Announcement | `flex items-center justify-between bg-yellow-400/80 text-yellow-900 p-4 rounded-lg` |
| Info | `flex items-start gap-3 bg-blue-50 text-blue-900 p-4 rounded-lg border border-blue-200` |
| Success | `flex items-start gap-3 bg-green-50 text-green-900 p-4 rounded-lg border border-green-200` |
| Warning | `flex items-start gap-3 bg-yellow-50 text-yellow-900 p-4 rounded-lg border border-yellow-200` |
| Error | `flex items-start gap-3 bg-red-50 text-red-900 p-4 rounded-lg border border-red-200` |

### Badges
```tsx
<span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Info</span>
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Success</span>
<span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">Warning</span>
<span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold">Danger</span>
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">Neutral</span>
<span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-xs font-semibold">New</span>
```

### Toasts
Use `sonner` via `toast('message')`, `toast.success('Saved!')`, `toast.error('Failed')`, `toast.info('FYI', { description: 'Extra detail' })`.

---

## 12. Overlays

### Dropdown menu
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-4 py-2 rounded-lg border border-gray-300 inline-flex items-center gap-2">
      Options <ChevronDown className="w-4 h-4" />
    </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="w-48">
    <DropdownMenuItem><Star className="w-4 h-4 mr-2" /> Favorite</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600"><Trash2 className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Modal
Standard modal header pattern: icon tile + title + description.

```tsx
<DialogContent className="max-w-md">
  <DialogHeader>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
        <GraduationCap className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <DialogTitle>Learning Resources</DialogTitle>
        <DialogDescription>Standard modal pattern used app-wide.</DialogDescription>
      </div>
    </div>
  </DialogHeader>
  <p className="text-sm text-gray-600">Body content here.</p>
</DialogContent>
```

### Tabs
Use the project Tabs primitives from `@/components/ui/tabs`.

---

## 13. List Items

### Message row
```tsx
<li className="px-4 py-3 flex gap-3 border-b last:border-b-0 bg-blue-50/40 hover:bg-gray-50 cursor-pointer">
  <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center text-sm flex-shrink-0">P</div>
  <div className="flex-1 min-w-0">
    <div className="flex justify-between">
      <p className="text-sm font-semibold truncate">Priya Sharma</p>
      <span className="text-[11px] text-gray-400">2m</span>
    </div>
    <p className="text-xs text-gray-600 truncate">Can you review the deck?</p>
  </div>
  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
</li>
```

### Notification row
```tsx
<li className="px-4 py-3 flex gap-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer">
  <Bell className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
  <div className="flex-1 min-w-0">
    <p className="text-sm font-semibold text-gray-900">New announcement</p>
    <p className="text-xs text-gray-600 truncate">Town hall at 3PM today.</p>
    <p className="text-[11px] text-gray-400 mt-0.5">10 min ago</p>
  </div>
</li>
```

### Event row
```tsx
<li className="px-4 py-3 flex gap-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer">
  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
    <Calendar className="w-5 h-5 text-blue-600" />
  </div>
  <div className="flex-1 min-w-0">
    <p className="text-sm font-semibold text-gray-900">Team Standup</p>
    <p className="text-xs text-gray-500">10:00 AM · Conference Room A</p>
  </div>
</li>
```

---

## 14. Avatars

```tsx
<div className="w-9 h-9 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center text-sm">A</div>
<div className="w-9 h-9 rounded-full bg-purple-500 text-white font-semibold flex items-center justify-center text-sm">B</div>
<div className="w-9 h-9 rounded-full bg-pink-500 text-white font-semibold flex items-center justify-center text-sm">C</div>
<div className="w-9 h-9 rounded-full bg-indigo-500 text-white font-semibold flex items-center justify-center text-sm">D</div>
<div className="w-9 h-9 rounded-full bg-gray-200 text-gray-700 font-semibold flex items-center justify-center text-xs">+3</div>
```

- Sizes used: `w-8 h-8` (header), `w-9 h-9` (lists), `w-10 h-10` (modals).
- Avatar status dot: `absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-white`.

---

## 15. Breakpoints

| Name | Range | Layout behavior |
| --- | --- | --- |
| Mobile | `< 640px` | Single column, drawer sidebar |
| sm | `≥ 640px` | 2-column grids |
| md | `≥ 768px` | 3-column grids, sm:flex-row |
| lg | `≥ 1024px` | Sidebar becomes static, 4-column grids |

---

## 16. Icon Library

Use **Lucide React** only. Common icons used across the app:

- `LayoutDashboard`, `MessageCircle`, `Calendar`, `CheckSquare`, `BookOpen`, `ListTodo`, `Globe`, `FileQuestion`, `Users`, `LayoutGrid`, `Settings`, `Menu`, `Search`, `Bell`, `MessageSquare`, `User`, `LogOut`, `Zap`, `CheckCircle`, `Cloudy`, `Megaphone`, `Info`, `AlertTriangle`, `AlertCircle`, `X`, `ChevronDown`, `ArrowRight`, `Star`, `ExternalLink`, `Trash2`, `Plus`, `GraduationCap`, `Sparkles`, `Copy`.

Icon sizes: `w-4 h-4` (inline), `w-5 h-5` (nav/buttons), `w-6 h-6` (tiles), `w-10 h-10` (stat cards).

---

## 17. Rules for the AI

When generating new pages or components for this project, follow these rules:

1. **Use the gradient background on every page.** Wrap content with a fixed gradient element and a relative main container.
2. **Use glassmorphism cards as the default surface.** Only use solid white for overlays (dropdowns, modals, popovers).
3. **Only use the brand, text, and status colors listed above.** No arbitrary hex colors (`bg-[#...]`).
4. **Only use the typography scale listed above.** No new font sizes or weights.
5. **Only use Lucide icons.** No custom icon libraries.
6. **Sidebar must contain exactly the 11 items listed above** in the same order. Use real TanStack Router `Link` components, not hash anchors.
7. **Header must follow the greeting-left / actions-right pattern.** Include messages, notifications, and profile dropdown.
8. **Use the exact button variants above.** Primary = blue-600, secondary = white border, ghost = blue text, destructive = red-500.
9. **Apply `card-hover-effect` to clickable cards** and `fade-in` to new page sections.
10. **Form inputs must use the exact border / ring pattern:** `border-gray-300`, `focus:ring-2 focus:ring-blue-500`, `bg-white`, `rounded-lg`.
11. **Mobile/tablet: keep the hamburger menu to the left of the logo.**
12. **For Coming Soon pages,** use the existing `ComingSoon` component from `src/components/dashboard/ComingSoon.tsx` with the appropriate icon and title.
13. **Do not create arbitrary padding or margin values.** Prefer the spacing scale above and Tailwind defaults.
14. **Do not invent new components.** Reuse existing dashboard components (Header, Sidebar, StatCard, etc.) whenever possible.
15. **Keep all files under `src/routes/` and `src/components/dashboard/`** per the project’s TanStack Start conventions.
