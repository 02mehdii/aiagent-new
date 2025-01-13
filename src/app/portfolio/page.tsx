import { Navbar } from "@/components/Navbar"

    export default function PortfolioPage() {
      return (
        <>
          <Navbar />
          <main className="pt-16 min-h-screen">
            <div className="container">
              <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
              {/* Portfolio content will go here */}
            </div>
          </main>
        </>
      )
    }
