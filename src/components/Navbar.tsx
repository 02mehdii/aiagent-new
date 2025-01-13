import Link from "next/link"
    import { Button } from "./ui/button"
    import { Home, MessageCircle, Briefcase, Settings } from "lucide-react"
    import { WalletIntegration } from "./WalletIntegration"

    export function Navbar() {
      return (
        <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <span className="text-2xl">✨ AikoAI</span>
              </Link>
              <div className="hidden md:flex items-center gap-4">
                <Button asChild variant="ghost">
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/chat" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Chat
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/portfolio" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Portfolio
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost">
                <Link href="/settings">
                  <Settings className="h-4 w-4" />
                </Link>
              </Button>
              <WalletIntegration />
            </div>
          </div>
        </nav>
      )
    }
