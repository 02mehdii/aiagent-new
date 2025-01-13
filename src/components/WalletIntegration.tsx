import { Button } from "./ui/button"
    import { Wallet } from "lucide-react"

    export function WalletIntegration() {
      return (
        <Button variant="outline">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      )
    }
