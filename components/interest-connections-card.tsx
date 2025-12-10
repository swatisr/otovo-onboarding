import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Interest {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface InterestConnectionsCardProps {
  interest: Interest
}

export function InterestConnectionsCard({
  interest,
}: InterestConnectionsCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Interest Connections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-500">First Name</p>
            <p className="text-sm font-medium text-gray-900">
              {interest.firstName}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

