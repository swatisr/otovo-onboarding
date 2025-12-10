"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InterestConnectionsCard } from "@/components/interest-connections-card"

// Mock data - in real app, this would come from API
const mockInterest = {
  firstName: "Swati",
  lastName: "Srivastava",
  email: "swatisr@otovo.com",
  phone: "+1 234 567 8900",
  customerAccountId: undefined,
}

const mockCustomerAccount = {
  id: "1",
  accountName: "Swati's account",
  organisationNumber: "123456789",
  primaryCustomer: {
    firstName: "Swati",
    lastName: "Srivastava",
    email: "swatisr@otovo.com",
  },
}

export default function Home() {
  const [interest, setInterest] = useState(mockInterest)
  const [customerAccount, setCustomerAccount] = useState<
    typeof mockCustomerAccount | undefined
  >(undefined)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-0">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Interest Details
        </h1>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Interest Overview</TabsTrigger>
            <TabsTrigger value="account">Customer Account</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Wider (2/3) */}
              <div className="lg:col-span-2 space-y-6">
                <InterestConnectionsCard
                  interest={interest}
                  customerAccount={customerAccount}
                />
                {/* More cards will go here */}
              </div>
              {/* Right Column - Narrower (1/3) */}
              <div className="lg:col-span-1 space-y-6">
                {/* Right column cards will go here */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="account" className="mt-6">
            {/* Customer Account content will go here */}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

