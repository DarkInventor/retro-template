import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import TextReveal from "@/components/magicui/text-reveal"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import AnimatedListDemo from "./animatedlist-demo/page"
import GlobePage from "./globe-section/page"
import NostalgiaPage from "./nostalgia-section/page"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1 mx-auto justify-center items-center">
                {children}
                <div className="pt-20 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
                  <GlobePage />
                  <AnimatedListDemo />
                </div>
              </div>
            </div>
            <div className="pt-20">
              <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
                {/* <NostalgiaPage /> */}
                <TextReveal
                  text="Unlock the Nostalgia

Remember the thrill of your first high score?"
                />

                <TextReveal
                  text="The excitement of discovering hidden levels? Dive back into the pixelated worlds where legends were born. Our collection of retro games spans the golden era of gaming, from arcade classics to console favorites.

Experience Retro Gaming Like Never Before

Revisit the timeless gameplay that defined a generation with enhanced graphics, smooth controls, and exclusive content. Whether you're a seasoned gamer or new to the retro scene, there's something for everyone.

Join a Community of Gamers.


"
                />
              </div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
