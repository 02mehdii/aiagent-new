import { Navbar } from "@/components/Navbar"

    export default function SettingsPage() {
      return (
        <>
          <Navbar />
          <main className="pt-16 min-h-screen">
            <div className="container">
              <h1 className="text-3xl font-bold mb-8">Settings</h1>
              {/* Settings content will go here */}
            </div>
          </main>
        </>
      )
    }
