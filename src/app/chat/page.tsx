import { Navbar } from "@/components/Navbar"
    import { ChatWindow } from "@/components/ChatWindow"

    export default function ChatPage() {
      return (
        <>
          <Navbar />
          <main className="pt-16 min-h-screen">
            <div className="container h-[calc(100vh-8rem)]">
              <ChatWindow />
            </div>
          </main>
        </>
      )
    }
