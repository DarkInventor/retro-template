"use client";
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import LinearGradient from "@/components/magicui/linear-gradient"
import RetroGrid from "@/components/magicui/retro-grid"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
// import { NostalgiaPage } from "./nostalgia-section/page";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 mx-auto justify-center mt-20">
      
      <div className="flex max-w-[980px] flex-col items-center gap-6 retro-theme relative">
      <div
        className={cn(
          "group rounded-full border border-gray-200 bg-gray-200 text-sm transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 z-10",
        )}
      >
        
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-black hover:duration-300 hover:dark:text-black text-neutral-600 z-10">
          <span>🕹️ {" "}Introducing Retro Template</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        </div>
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
         Retro-inspired UI Template to feel <p className="underline decoration-gray-400 decoration-4 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10">Nostalgia 🧩</p>
        </h1>
        <p className="max-w-[700px] text-lg sm:text-xl text-accent-foreground text-center z-10">
          Step into a world of retro, where simplicity and nostalgia blend to create a timeless experience.
        
        </p>
      
      
      </div>
      <RetroGrid className="z-0 absolute inset-0 max-w-[1000]" /> 
      <div className="flex gap-4 justify-center">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    
    </section>
    
  )
}
