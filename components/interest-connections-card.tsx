"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { AlertTriangle } from "lucide-react"

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
  const [isSlideoverOpen, setIsSlideoverOpen] = useState(false)
  const [isAssignSlideoverOpen, setIsAssignSlideoverOpen] = useState(false)
  const hasSimilarMatches =
    (interest.similarInterestsCount && interest.similarInterestsCount > 0) ||
    (interest.similarUsersCount && interest.similarUsersCount > 0)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Connect to customer account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Alert Banner - Red warning with action link */}
        {hasSimilarMatches && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-gray-900">
                This interest is similar to {interest.similarInterestsCount || 0}{" "}
                other {interest.similarInterestsCount === 1 ? "interest" : "interests"} and {interest.similarUsersCount || 0} existing{" "}
                {interest.similarUsersCount === 1 ? "user" : "users"}
              </p>
              <Button
                variant="link"
                size="sm"
                onClick={() => console.log("Check and fix clicked")}
                className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal whitespace-nowrap"
              >
                Check and fix
              </Button>
            </div>
          </div>
        )}

        {/* Details Section - Better spacing and typography */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              Details from activation form
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => console.log("Edit clicked")}
              className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
            >
              Edit
            </Button>
          </div>

          {/* Contact Details - Name, Phone, Email order */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-1.5">Name</p>
              <p className="text-sm text-gray-700">
                {interest.firstName} {interest.lastName}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-1.5">
                Phone
              </p>
              <p className="text-sm text-gray-700">{interest.phone}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-1.5">
                Email
              </p>
              <p className="text-sm text-gray-700">{interest.email}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Connection Status Section */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            Customer account connection
          </h3>
          <p className="text-sm text-gray-600">
            No account connected
          </p>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => setIsSlideoverOpen(true)}
          className="w-full bg-[#1B2438] hover:bg-[#1B2438]/90 text-white mt-6"
        >
          Connect to customer account
        </Button>

        {/* Assign Button */}
        <Button
          onClick={() => setIsAssignSlideoverOpen(true)}
          variant="outline"
          className="w-full mt-3"
        >
          Assign a customer account
        </Button>
      </CardContent>

      {/* Connect Slide-over */}
      <Sheet open={isSlideoverOpen} onOpenChange={setIsSlideoverOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Connect to customer account</SheetTitle>
            <SheetDescription>
              Connect this interest to a new or existing customer account.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            {/* Content will go here */}
          </div>
        </SheetContent>
      </Sheet>

      {/* Assign Slide-over */}
      <Sheet open={isAssignSlideoverOpen} onOpenChange={setIsAssignSlideoverOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Assign a customer account</SheetTitle>
            <SheetDescription>
              Assign this interest to a customer account.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            {/* Content will go here */}
          </div>
        </SheetContent>
      </Sheet>
    </Card>
  )
}

