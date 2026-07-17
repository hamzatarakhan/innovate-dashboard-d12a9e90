import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Check,
  Copy,
  Info,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Palette,
  Type,
  Component,
  Layout,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/design-system")({
  component: DesignSystemPage,
  head: () => ({
    meta: [
      { title: "Design System — Innovate Dashboard" },
      {
        name: "description",
        content:
          "Complete design system documentation: colors, typography, components, spacing, and interaction patterns for the Innovate Dashboard.",
      },
    ],
  }),
});

// ---------------- Design Tokens (source of truth for the docs) ----------------
const COLOR_TOKENS: { name: string; token: string; role: string }[] = [
  { name: "Background", token: "--background", role: "Page background" },
  { name: "Foreground", token: "--foreground", role: "Default text" },
  { name: "Card", token: "--card", role: "Card surface" },
  { name: "Card Foreground", token: "--card-foreground", role: "Text on card" },
  { name: "Popover", token: "--popover", role: "Popover surface" },
  { name: "Primary", token: "--primary", role: "Primary action" },
  { name: "Primary Foreground", token: "--primary-foreground", role: "Text on primary" },
  { name: "Secondary", token: "--secondary", role: "Secondary surface" },
  { name: "Muted", token: "--muted", role: "Muted surface" },
  { name: "Muted Foreground", token: "--muted-foreground", role: "Secondary text" },
  { name: "Accent", token: "--accent", role: "Hover / accent surface" },
  { name: "Destructive", token: "--destructive", role: "Danger / delete" },
  { name: "Border", token: "--border", role: "Borders & dividers" },
  { name: "Input", token: "--input", role: "Form field border" },
  { name: "Ring", token: "--ring", role: "Focus ring" },
];

const CHART_TOKENS = ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"];

function CopyableToken({ label }: { label: string }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(label);
        toast.success("Copied", { description: label });
      }}
      className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {label}
      <Copy className="h-3 w-3" />
    </button>
  );
}

function ColorSwatch({ name, token, role }: { name: string; token: string; role: string }) {
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden">
      <div
        className="h-20 w-full"
        style={{ background: `var(${token})` }}
      />
      <div className="p-3 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-card-foreground">{name}</span>
        </div>
        <p className="text-xs text-muted-foreground">{role}</p>
        <CopyableToken label={`bg-${token.replace("--", "").replace("color-", "")}`} />
      </div>
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="rounded-lg bg-primary/10 p-2 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
}

function DesignSystemPage() {
  const [progress, setProgress] = useState(60);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" /> v1.0 · Living Document
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Innovate Design System
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            A single source of truth for colors, typography, components, spacing and
            interaction patterns. Every new page must follow the tokens below —
            never hardcode colors, shadows, or spacing.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="outline">Tailwind v4</Badge>
            <Badge variant="outline">shadcn/ui</Badge>
            <Badge variant="outline">Semantic Tokens</Badge>
            <Badge variant="outline">Dark-mode ready</Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Principles */}
        <section>
          <SectionHeader
            icon={Zap}
            title="Core Principles"
            description="Rules the AI (and humans) must follow when building any new page."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Use semantic tokens",
                d: "Always use bg-primary, text-foreground, border-border. Never text-white, bg-[#fff], or bg-black.",
              },
              {
                t: "shadcn components first",
                d: "Reuse Button, Card, Input, Dialog etc. Only build custom when composition can't cover it.",
              },
              {
                t: "Glass + subtle depth",
                d: "Use .glassmorphism, soft shadows, and rounded-2xl on top-level cards. Avoid heavy borders.",
              },
              {
                t: "Motion is purposeful",
                d: "Use .fade-in / .card-hover-effect. Keep durations 200–400ms and easing smooth.",
              },
            ].map((p) => (
              <Card key={p.t} className="card-hover-effect">
                <CardHeader>
                  <CardTitle className="text-base">{p.t}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section>
          <SectionHeader
            icon={Palette}
            title="Color System"
            description="Semantic tokens defined in src/styles.css. Click any swatch to copy its Tailwind class."
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {COLOR_TOKENS.map((c) => (
              <ColorSwatch key={c.token} {...c} />
            ))}
          </div>

          <h3 className="mt-8 mb-3 text-lg font-semibold text-foreground">Chart Palette</h3>
          <div className="grid grid-cols-5 gap-3">
            {CHART_TOKENS.map((t, i) => (
              <div key={t} className="rounded-xl border border-border overflow-hidden">
                <div className="h-16" style={{ background: `var(${t})` }} />
                <div className="p-2 text-center text-xs font-mono text-muted-foreground">
                  chart-{i + 1}
                </div>
              </div>
            ))}
          </div>

          <Alert className="mt-8">
            <Info className="h-4 w-4" />
            <AlertTitle>Rule</AlertTitle>
            <AlertDescription>
              Never use raw hex, rgb, or Tailwind's default palette (like <code>bg-blue-500</code>).
              Always use semantic tokens so dark mode and re-theming work automatically.
            </AlertDescription>
          </Alert>
        </section>

        {/* Typography */}
        <section>
          <SectionHeader
            icon={Type}
            title="Typography"
            description="System sans stack. Heading weights are 600–700, body is 400–500."
          />
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Display · text-5xl · font-bold
                </p>
                <p className="text-5xl font-bold tracking-tight">The quick brown fox</p>
              </div>
              <Separator />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  H1 · text-4xl · font-bold
                </p>
                <p className="text-4xl font-bold tracking-tight">Page title heading</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  H2 · text-2xl · font-semibold
                </p>
                <p className="text-2xl font-semibold">Section heading</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  H3 · text-lg · font-semibold
                </p>
                <p className="text-lg font-semibold">Subsection heading</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Body · text-base
                </p>
                <p className="text-base text-foreground">
                  Body copy sits at 16px with relaxed leading. Use{" "}
                  <code className="px-1.5 py-0.5 rounded bg-muted text-sm">text-muted-foreground</code>{" "}
                  for secondary text.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Caption · text-sm · text-muted-foreground
                </p>
                <p className="text-sm text-muted-foreground">Helper and caption text.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons */}
        <section>
          <SectionHeader
            icon={Component}
            title="Buttons"
            description="Six variants × four sizes. Icons use lucide-react at h-4 w-4."
          />
          <Card>
            <CardContent className="p-8 space-y-8">
              <div>
                <h4 className="mb-3 text-sm font-medium text-muted-foreground">Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="mb-3 text-sm font-medium text-muted-foreground">Sizes</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" aria-label="Notifications">
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="mb-3 text-sm font-medium text-muted-foreground">With icons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <Check className="h-4 w-4" /> Confirm
                  </Button>
                  <Button variant="outline">
                    <Sparkles className="h-4 w-4" /> Generate
                  </Button>
                  <Button variant="destructive">
                    <XCircle className="h-4 w-4" /> Delete
                  </Button>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="mb-3 text-sm font-medium text-muted-foreground">States</h4>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button className="opacity-100">
                    <span className="inline-block h-3 w-3 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    Loading
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Forms */}
        <section>
          <SectionHeader
            icon={Layout}
            title="Form Elements"
            description="Inputs are h-10 by default with rounded-md, focus ring uses --ring."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="ds-name">Full name</Label>
                  <Input id="ds-name" placeholder="Ada Lovelace" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ds-msg">Message</Label>
                  <Textarea id="ds-msg" placeholder="Say something…" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ds-err">With error</Label>
                  <Input
                    id="ds-err"
                    aria-invalid
                    className="border-destructive focus-visible:ring-destructive"
                    defaultValue="invalid@"
                  />
                  <p className="text-xs text-destructive">Please enter a valid email.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Toggles & selectors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="ds-notif">Email notifications</Label>
                  <Switch id="ds-notif" defaultChecked />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="ds-tos" defaultChecked />
                  <Label htmlFor="ds-tos" className="text-sm font-normal">
                    I agree to the terms
                  </Label>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <Label>Onboarding</Label>
                    <span className="text-muted-foreground">{progress}%</span>
                  </div>
                  <Progress value={progress} />
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => setProgress((p) => Math.max(0, p - 10))}>
                      -10
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setProgress((p) => Math.min(100, p + 10))}>
                      +10
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badges & Alerts */}
        <section>
          <SectionHeader
            icon={Bell}
            title="Feedback & Status"
            description="Badges for taxonomy, alerts for inline messages, toasts for transient feedback."
          />
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h4 className="mb-3 text-sm font-medium text-muted-foreground">Badges</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-transparent">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Success
                  </Badge>
                  <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400 border-transparent">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Warning
                  </Badge>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Heads up</AlertTitle>
                  <AlertDescription>Informational alert for neutral context.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <XCircle className="h-4 w-4" />
                  <AlertTitle>Something went wrong</AlertTitle>
                  <AlertDescription>Use for irreversible errors.</AlertDescription>
                </Alert>
              </div>
              <Separator />
              <div>
                <h4 className="mb-3 text-sm font-medium text-muted-foreground">Toasts</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" onClick={() => toast.success("Saved successfully")}>
                    Success toast
                  </Button>
                  <Button variant="outline" onClick={() => toast.error("Something failed")}>
                    Error toast
                  </Button>
                  <Button variant="outline" onClick={() => toast("Heads up", { description: "Neutral message" })}>
                    Info toast
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards & Surfaces */}
        <section>
          <SectionHeader
            icon={Layout}
            title="Cards & Surfaces"
            description="rounded-2xl for top-level cards, rounded-xl for nested. Use .glassmorphism sparingly for hero panels."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle>Standard card</CardTitle>
                <CardDescription>Neutral surface for grouped content.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Use for lists, forms, dashboards.</p>
              </CardContent>
            </Card>
            <div className="glassmorphism rounded-2xl p-6 fade-in">
              <h3 className="font-semibold mb-1">Glassmorphism</h3>
              <p className="text-sm text-muted-foreground">
                Use for hero/highlight panels layered over gradients.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
              <h3 className="font-semibold mb-1">Gradient primary</h3>
              <p className="text-sm opacity-90">For premium CTAs or feature highlights.</p>
            </div>
          </div>
        </section>

        {/* Avatars */}
        <section>
          <SectionHeader
            icon={Component}
            title="Avatars & Identity"
            description="Round avatars with initials fallback. Sizes: sm=h-8, md=h-10, lg=h-12."
          />
          <Card>
            <CardContent className="p-8 flex flex-wrap items-center gap-6">
              <Avatar className="h-8 w-8">
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground">MR</AvatarFallback>
              </Avatar>
              <div className="flex -space-x-2">
                {["AA", "BB", "CC", "DD"].map((i) => (
                  <Avatar key={i} className="border-2 border-background">
                    <AvatarFallback>{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs demo */}
        <section>
          <SectionHeader
            icon={Layout}
            title="Navigation Patterns"
            description="Tabs for switching views within a page, sidebar for top-level nav."
          />
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="pt-4 text-sm text-muted-foreground">
                  High-level summary tab content.
                </TabsContent>
                <TabsContent value="analytics" className="pt-4 text-sm text-muted-foreground">
                  Charts and metrics.
                </TabsContent>
                <TabsContent value="reports" className="pt-4 text-sm text-muted-foreground">
                  Downloadable reports.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Spacing & Radius */}
        <section>
          <SectionHeader
            icon={Layout}
            title="Spacing, Radius & Shadow"
            description="Consistent scale keeps layouts calm. Use gap-* and space-* utilities, not manual margins."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Spacing scale</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[1, 2, 3, 4, 6, 8, 12].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="w-10 text-xs font-mono text-muted-foreground">{s * 4}px</span>
                    <div className="h-3 rounded bg-primary" style={{ width: s * 8 }} />
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Radius</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  ["sm", "rounded-sm"],
                  ["md", "rounded-md"],
                  ["lg", "rounded-lg"],
                  ["xl", "rounded-xl"],
                  ["2xl", "rounded-2xl"],
                ].map(([n, cls]) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className={`h-10 w-10 bg-primary ${cls}`} />
                    <span className="text-sm text-muted-foreground font-mono">{cls}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Elevation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl"].map((s) => (
                  <div key={s} className={`h-10 rounded-lg bg-card border border-border ${s} flex items-center px-3 text-xs font-mono text-muted-foreground`}>
                    {s}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI usage rules */}
        <section>
          <SectionHeader
            icon={Sparkles}
            title="Rules for the AI"
            description="When generating a new page, follow these rules verbatim."
          />
          <Card>
            <CardContent className="p-6">
              <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground">
                <li>
                  Use only semantic Tailwind classes: <CopyableToken label="bg-background" />{" "}
                  <CopyableToken label="text-foreground" />{" "}
                  <CopyableToken label="border-border" />{" "}
                  <CopyableToken label="bg-primary text-primary-foreground" />.
                </li>
                <li>
                  Build layouts with <code className="px-1 rounded bg-muted">max-w-7xl mx-auto px-6 py-12</code> as the page container.
                </li>
                <li>
                  Top-level cards use <code className="px-1 rounded bg-muted">rounded-2xl</code>, nested cards use{" "}
                  <code className="px-1 rounded bg-muted">rounded-xl</code>. Buttons and inputs use the shadcn default radius.
                </li>
                <li>
                  Every page has a hero header with a badge, H1 (text-4xl/5xl font-bold), and a supporting paragraph in{" "}
                  <code className="px-1 rounded bg-muted">text-muted-foreground</code>.
                </li>
                <li>
                  Use lucide-react icons at <code className="px-1 rounded bg-muted">h-4 w-4</code> (buttons) or{" "}
                  <code className="px-1 rounded bg-muted">h-5 w-5</code> (section headers). Never use emoji as icons.
                </li>
                <li>
                  Animations: use <code className="px-1 rounded bg-muted">.fade-in</code> for entrance and{" "}
                  <code className="px-1 rounded bg-muted">.card-hover-effect</code> for interactive cards. Keep durations 200–400ms.
                </li>
                <li>
                  Feedback: use <code className="px-1 rounded bg-muted">toast()</code> from sonner for transient messages, Alert for inline, Badge for status.
                </li>
                <li>
                  Never hardcode colors (<code className="px-1 rounded bg-muted">#fff</code>,{" "}
                  <code className="px-1 rounded bg-muted">bg-white</code>,{" "}
                  <code className="px-1 rounded bg-muted">text-black</code>) — dark mode will break.
                </li>
                <li>Prefer shadcn components (Button, Card, Input, Dialog, DropdownMenu, Tabs) over custom markup.</li>
                <li>All new pages must have a route <code className="px-1 rounded bg-muted">head()</code> with unique title + description.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <footer className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          Design System · Innovate Dashboard · Keep it consistent.
        </footer>
      </main>
    </div>
  );
}
