import type { Metadata } from "next"
    import "./globals.css"
    import { Navbar } from "@/components/Navbar"
    import { Footer } from "@/components/Footer"
    import { ShootingStars } from "@/components/ui/shooting-stars"

    export const metadata: Metadata = {
      title: "AikoAI",
      description: "Your personal anime-themed AI companion",
    }

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en">
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
              href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
              rel="stylesheet"
            />
          </head>
          <body className="font-quicksand bg-black">
            {/* Shooting Stars Background */}
            <div className="fixed inset-0 -z-10">
              <ShootingStars
                starColor="#9E00FF"
                trailColor="#2EB9DF"
                minSpeed={15}
                maxSpeed={35}
                minDelay={1000}
                maxDelay={3000}
              />
              <ShootingStars
                starColor="#FF0099"
                trailColor="#FFB800"
                minSpeed={10}
                maxSpeed={25}
                minDelay={2000}
                maxDelay={4000}
              />
              <ShootingStars
                starColor="#00FF9E"
                trailColor="#00B8FF"
                minSpeed={20}
                maxSpeed={40}
                minDelay={1500}
                maxDelay={3500}
              />
              {/* Additional Shooting Stars Layers */}
              <ShootingStars
                starColor="#FF00FF"
                trailColor="#FF00A0"
                minSpeed={25}
                maxSpeed={45}
                minDelay={500}
                maxDelay={2500}
              />
              <ShootingStars
                starColor="#00FFFF"
                trailColor="#00A0FF"
                minSpeed={5}
                maxSpeed={15}
                minDelay={3000}
                maxDelay={5000}
              />
            </div>

            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      )
    }
