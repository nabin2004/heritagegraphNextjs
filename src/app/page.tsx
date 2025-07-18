"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] font-sans scroll-smooth">
      {/* Header */}
      <header className="border-b px-4 py-3 sticky top-0 bg-background z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-semibold">HeritageGraph</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#explore" className="px-4 py-2">Explore</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="px-4 py-2">About</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#contact" className="px-4 py-2">Contact</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="mt-6 flex flex-col gap-4">
                  <NavigationMenuLink href="#explore" className="block px-2 py-1">Explore</NavigationMenuLink>
                  <NavigationMenuLink href="#about" className="block px-2 py-1">About</NavigationMenuLink>
                  <NavigationMenuLink href="#contact" className="block px-2 py-1">Contact</NavigationMenuLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Hero */}
        <section id="hero" className="px-4 py-20 sm:px-8 text-center flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-black">Preserving Nepal’s Cultural Heritage</h2>
          <p className="max-w-xl text-muted-foreground">
            Explore the history, art, and traditions that define Nepal's identity — digitally preserved through Knowledge Graphs.
          </p>
        </section>

        {/* Explore Section */}
        <section id="explore" className="px-4 py-16 sm:px-8 max-w-5xl mx-auto grid gap-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold">What We Preserve</h3>
            <p className="text-muted-foreground mt-2">
              From centuries-old temples to rare manuscripts, we document and digitize Nepal’s diverse cultural assets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border p-4 rounded-md">Temples</div>
            <div className="border p-4 rounded-md">Manuscripts</div>
            <div className="border p-4 rounded-md">Festivals</div>
          </div>
        </section>

        {/* About/Contributions */}
        <section id="about" className="bg-muted px-4 py-20 sm:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-semibold">How You Can Contribute</h3>
            <p className="text-muted-foreground">
              Whether you're a researcher, student, or local expert — your insights help us build a richer, verified cultural graph.
            </p>
          </div>
        </section>

        {/* Team */}
<section className="px-4 py-16 sm:px-8 max-w-5xl mx-auto">
  <div className="text-center mb-10">
    <h3 className="text-2xl font-bold">An initiative by</h3>
    <p className="text-muted-foreground mt-2">
      A collective of technologists, historians, and cultural workers.
    </p>
    <a
      href="https://cair-nepal.org" 
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6"
      aria-label="Visit CAIR-Nepal website"
    >
      <img
        src="/cair-logo/fulllogo_nobuffer.png" 
        alt="CAIR-Nepal Logo"
        className="mx-auto h-16 w-auto object-contain"
      />
    </a>
  </div>

</section>
        {/* CTA */}
        <section id="contact" className="px-4 py-20 text-center sm:px-8">
          <h3 className="text-2xl font-bold">Join Our Mission</h3>
          <p className="mt-2 text-muted-foreground">
            Help us safeguard Nepal’s intangible and tangible heritage — digitally, collaboratively.
          </p>
          <div className="mt-6">
            <Button>Get Involved</Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16 sm:px-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            {/* Add more items here */}
          </Accordion>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-sm text-muted-foreground py-6 text-center border-t">
        © 2025 HeritageGraph. All rights reserved.
      </footer>
    </div>
  )
}
