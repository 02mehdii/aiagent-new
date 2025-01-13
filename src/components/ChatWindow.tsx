'use client'

    import { Input } from "./ui/input"
    import { Button } from "./ui/button"
    import { ChevronRight } from "lucide-react"
    import { useState } from "react"

    interface Message {
      id: string
      text: string
      isUser: boolean
      timestamp: Date
    }

    export function ChatWindow() {
      const [messages, setMessages] = useState<Message[]>([])
      const [input, setInput] = useState('')
      const [isLoading, setIsLoading] = useState(false)

      const handleSend = async () => {
        if (input.trim() && !isLoading) {
          const userMessage: Message = {
            id: Math.random().toString(36).substr(2, 9),
            text: input,
            isUser: true,
            timestamp: new Date()
          }
          
          setMessages(prev => [...prev, userMessage])
          setInput('')
          setIsLoading(true)

          try {
            const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer sk-ce3d0d03802d4caa8b49945baed64c0c`
              },
              body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                  {
                    role: "system",
                    content: "You are an AI anime girl assistant named Aiko, an expert in cryptocurrency, finance, and social media trends. You also enjoy casual conversations about everyday topics and hobbies. You communicate in a friendly and enthusiastic anime girl style, using expressions like 'kawaii', 'sugoi', 'senpai', and include emotive expressions and emojis."
                  },
                  ...messages.map(msg => ({
                    role: msg.isUser ? "user" : "assistant",
                    content: msg.text
                  })),
                  {
                    role: "user",
                    content: input
                  }
                ],
                temperature: 0.7,
                max_tokens: 500
              })
            })

            const data = await response.json()
            const aiMessage = data.choices[0].message.content

            const aiResponse: Message = {
              id: Math.random().toString(36).substr(2, 9),
              text: aiMessage,
              isUser: false,
              timestamp: new Date()
            }
            
            setMessages(prev => [...prev, aiResponse])
          } catch (error) {
            console.error('Error:', error)
            const errorResponse: Message = {
              id: Math.random().toString(36).substr(2, 9),
              text: "Gomen nasai, senpai! 😢 I'm having trouble responding right now. Please try again later!",
              isUser: false,
              timestamp: new Date()
            }
            setMessages(prev => [...prev, errorResponse])
          } finally {
            setIsLoading(false)
          }
        }
      }

      return (
        <div className="flex flex-col h-full bg-gradient-to-b from-pink-50/20 to-purple-50/20 rounded-2xl overflow-hidden border border-pink-100 shadow-lg">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl p-4 ${
                    message.isUser
                      ? 'bg-pink-500 text-white rounded-br-none'
                      : 'bg-purple-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-2 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-2xl p-4 bg-purple-100 text-gray-800 rounded-bl-none">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-pink-100 bg-white/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message, senpai~"
                className="flex-1 bg-white/70 backdrop-blur-sm rounded-2xl border-pink-200 focus:border-pink-300 focus:ring-pink-300"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                size="icon"
                variant="outline"
                className="rounded-2xl bg-pink-500 hover:bg-pink-600 text-white border-pink-600"
                disabled={isLoading}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )
    }
