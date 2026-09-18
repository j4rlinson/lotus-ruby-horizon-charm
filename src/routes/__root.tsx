import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppShell } from "@/components/app-shell";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tinta · Corte 1 Matemáticas 2 UTS" },
      {
        name: "description",
        content:
          "Guía completa para el parcial de Corte 1: derivadas, utilidad e interpretación económica. UTS Bucaramanga.",
      },
      { name: "theme-color", content: "#f1eee6" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  errorComponent: AppErrorComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="es" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans">
        <PreviewHostBridge />
        <AuthProvider>
          <AppShell>
            <Outlet />
          </AppShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="font-mono text-xs text-subtle">404</p>
      <h1 className="mt-2 font-display text-3xl tracking-tight">No está aquí</h1>
      <p className="mt-2 text-muted">Esa ruta no forma parte de la guía.</p>
      <Link to="/" className="mt-6 inline-block text-sm text-accent hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
