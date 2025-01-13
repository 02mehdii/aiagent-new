import { Button } from "@/components/ui/button"
    import { ChevronRightIcon } from "lucide-react"
    import { AssistantAvatar } from "@/components/AssistantAvatar"
    import Link from "next/link"

    export default function Home() {
      return (
        <div className="relative overflow-hidden min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="relative z-10">
            <div className="container py-24 lg:py-32">
              {/* Announcement Banner */}
              <div className="flex justify-center">
                <a
                  className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition bg-background/50 backdrop-blur hover:bg-background/70"
                  href="#"
                >
                  New Features - Explore AikoAI Pro
                  <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                    <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Main Content */}
              <div className="mt-5 max-w-2xl text-center mx-auto">
                <div className="animate-bounce">
                  <AssistantAvatar className="mx-auto" />
                </div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome to AikoAI
                </h1>
              </div>

              <div className="mt-5 max-w-3xl text-center mx-auto">
                <p className="text-xl text-white/90">
                  Your personal anime-themed companion, here to help with your creative projects, 
                  portfolio management, and anime-inspired adventures! ✨
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
                  <Link href="/chat">
                    Aiko Chat Demo
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
                  Learn More
                </Button>
              </div>

              {/* Installation Guide */}
              <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
                <span className="text-sm text-white/80">
                  Package Manager:
                </span>
                <span className="text-sm font-bold text-white">npm </span>
                <svg
                  className="h-5 w-5 text-white/80"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 13L10 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
                <a
                  className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium text-white"
                  href="#"
                >
                  Installation Guide
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
