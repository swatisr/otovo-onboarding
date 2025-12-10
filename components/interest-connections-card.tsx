"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Interest {
  firstName: string
  lastName: string
  email: string
  phone: string
  similarInterestsCount?: number
  similarUsersCount?: number
}

interface InterestConnectionsCardProps {
  interest: Interest
}

export function InterestConnectionsCard({
  interest,
}: InterestConnectionsCardProps) {
  const hasSimilarMatches =
    (interest.similarInterestsCount && interest.similarInterestsCount > 0) ||
    (interest.similarUsersCount && interest.similarUsersCount > 0)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Interest Connections</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Alert Banner - Step 2.1 */}
        {hasSimilarMatches && (
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-black flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                This interest similar to {interest.similarInterestsCount || 0}{" "}
                other interest and {interest.similarUsersCount || 0} existing
                users
              </p>
              <p className="text-sm text-gray-600 mt-1">Check and take action</p>
            </div>
          </div>
        )}

        {/* Details Section Header - Step 2.2 */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">
            Details provided by Interest in the activation form
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => console.log("Edit clicked")}
            className="text-blue-600 hover:text-blue-700"
          >
            Edit
          </Button>
        </div>

        {/* Contact Details - existing */}
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

