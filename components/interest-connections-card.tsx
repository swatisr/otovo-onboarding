"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CopyButton } from "@/components/copy-button"
import { CreateAccountSlideover } from "@/components/create-account-slideover"
import { ConnectAccountSlideover } from "@/components/connect-account-slideover"

interface Interest {
  firstName: string
  lastName: string
  email: string
  phone: string
  customerAccountId?: string
}

interface CustomerAccount {
  id: string
  accountName: string
  organisationNumber: string
  primaryCustomer: {
    firstName: string
    lastName: string
    email: string
  }
}

interface InterestConnectionsCardProps {
  interest: Interest
  customerAccount?: CustomerAccount
}

export function InterestConnectionsCard({
  interest,
  customerAccount,
}: InterestConnectionsCardProps) {
  const [createAccountOpen, setCreateAccountOpen] = useState(false)
  const [connectAccountOpen, setConnectAccountOpen] = useState(false)

  const isConnected = !!customerAccount

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Interest Connections</CardTitle>
          <CardDescription>
            Contact details and customer account connection status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Contact Details Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Contact Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-500">First Name</p>
                  <p className="text-sm font-medium text-gray-900">
                    {interest.firstName || "Not provided"}
                  </p>
                </div>
                {interest.firstName && (
                  <CopyButton text={interest.firstName} />
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Last Name</p>
                  <p className="text-sm font-medium text-gray-900">
                    {interest.lastName || "Not provided"}
                  </p>
                </div>
                {interest.lastName && <CopyButton text={interest.lastName} />}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">
                    {interest.email || "Not provided"}
                  </p>
                </div>
                {interest.email && <CopyButton text={interest.email} />}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Phone Number</p>
                  <p className="text-sm font-medium text-gray-900">
                    {interest.phone || "Not provided"}
                  </p>
                </div>
                {interest.phone && <CopyButton text={interest.phone} />}
              </div>
            </div>
          </div>

          <Separator />

          {/* Account Connection Status Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">
                Customer Account
              </h3>
              <Badge variant={isConnected ? "success" : "outline"}>
                {isConnected ? "Connected" : "Not Connected"}
              </Badge>
            </div>

            {isConnected && customerAccount ? (
              <div className="space-y-3 rounded-md bg-gray-50 p-4">
                <div>
                  <p className="text-xs text-gray-500">Account Name</p>
                  <p className="text-sm font-medium text-gray-900">
                    {customerAccount.accountName}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Organisation Number</p>
                  <p className="text-sm font-medium text-gray-900">
                    {customerAccount.organisationNumber}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                This interest is not connected to a customer account.
              </p>
            )}
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            {!isConnected && (
              <Button
                onClick={() => setCreateAccountOpen(true)}
                className="w-full bg-[#FE8F67] hover:bg-[#FE8F67]/90"
              >
                Create Account
              </Button>
            )}
            {isConnected && (
              <Button
                variant="outline"
                onClick={() => setConnectAccountOpen(true)}
                className="w-full"
              >
                View/Manage Connection
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => setConnectAccountOpen(true)}
              className="w-full"
            >
              Connect to Existing Account
            </Button>
          </div>
        </CardContent>
      </Card>

      <CreateAccountSlideover
        open={createAccountOpen}
        onOpenChange={setCreateAccountOpen}
        interest={interest}
      />
      <ConnectAccountSlideover
        open={connectAccountOpen}
        onOpenChange={setConnectAccountOpen}
        interest={interest}
      />
    </>
  )
}

