"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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
        <CardTitle>Customer Account Connect</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Alert Banner - Improved contrast */}
        {hasSimilarMatches && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-black flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                This interest similar to {interest.similarInterestsCount || 0}{" "}
                other interest and {interest.similarUsersCount || 0} existing
                users
              </p>
              <p className="text-xs text-gray-600 mt-1">Check and take action</p>
            </div>
          </div>
        )}

        {/* Details Section - Better spacing and typography */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              Details provided by Interest in the activation form
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => console.log("Edit clicked")}
              className="text-[#FE8F67] hover:text-[#FE8F67]/80"
            >
              Edit
            </Button>
          </div>

          {/* Contact Details - Better layout and spacing */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-1.5">Name</p>
              <p className="text-sm text-gray-700">
                {interest.firstName} {interest.lastName}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-gray-900 mb-1.5">
                  Email
                </p>
                <p className="text-sm text-gray-700">{interest.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 mb-1.5">
                  Phone
                </p>
                <p className="text-sm text-gray-700">{interest.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Connection Status Section - Better typography */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            Account Connection Status
          </h3>
          <p className="text-sm text-gray-600">
            Not connected to an account yet
          </p>
        </div>

        {/* Action Button - Better spacing */}
        <Button
          onClick={() => console.log("Connect to account clicked")}
          className="w-full bg-[#1B2438] hover:bg-[#1B2438]/90 text-white mt-6"
        >
          Connect to a customer account
        </Button>
      </CardContent>
    </Card>
  )
}

