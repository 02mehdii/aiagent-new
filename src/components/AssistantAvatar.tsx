import Image from "next/image"
    import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

    export function AssistantAvatar() {
      return (
        <Avatar className="h-32 w-32 border-4 border-pink-500/20">
          <AvatarImage 
            src="https://source.unsplash.com/300x300/?anime,girl" 
            alt="Anime AI Assistant" 
            className="object-cover hover:scale-105 transition-transform"
          />
          <AvatarFallback className="bg-gradient-to-br from-pink-500 to-purple-600 text-white text-4xl">
            AI
          </AvatarFallback>
        </Avatar>
      )
    }
