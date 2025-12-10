"use client"

import { useState, useEffect } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Search } from "lucide-react"

interface Interest {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface CustomerAccount {
  id: string
  accountName: string
  organisationNumber: string
  primaryCustomer: {
    firstName: string
    lastName: string
    email: string
    phone?: string
  }
  address?: string
}

interface ConnectAccountSlideoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  interest: Interest
}

// Mock data for similar accounts - in real app, this would come from API
const mockSimilarAccounts: CustomerAccount[] = [
  {
    id: "1",
    accountName: "Swati's account",
    organisationNumber: "123456789",
    primaryCustomer: {
      firstName: "Swati",
      lastName: "Srivastava",
      email: "swati@example.com",
      phone: "+1 234 567 8900",
    },
    address: "123 Main St, City, Country",
  },
  {
    id: "2",
    accountName: "John's account",
    organisationNumber: "987654321",
    primaryCustomer: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "+1 234 567 8901",
    },
    address: "456 Oak Ave, City, Country",
  },
]

export function ConnectAccountSlideover({
  open,
  onOpenChange,
  interest,
}: ConnectAccountSlideoverProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [similarAccounts, setSimilarAccounts] = useState<CustomerAccount[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const { toast } = useToast()

  const handleSearch = async () => {
    setIsSearching(true)
    // Simulate API call to find similar accounts
    // In real app, this would search by name, email, phone, address
    setTimeout(() => {
      // Filter mock accounts based on search (simplified matching)
      const filtered = mockSimilarAccounts.filter(
        (account) =>
          account.primaryCustomer.firstName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          account.primaryCustomer.lastName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          account.primaryCustomer.email
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          account.accountName.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSimilarAccounts(filtered.length > 0 ? filtered : mockSimilarAccounts)
      setIsSearching(false)
    }, 500)
  }

  const handleConnectAsSecondary = async (accountId: string) => {
    // Simulate API call
    toast({
      title: "Connected",
      description: "Interest connected as secondary user to the account.",
    })
    onOpenChange(false)
  }

  const handleConnectAsPrimary = async (accountId: string) => {
    // Simulate API call
    toast({
      title: "Connected",
      description:
        "Interest details updated and connected as primary user to the account.",
    })
    onOpenChange(false)
  }

  // Auto-load similar accounts when slideover opens
  useEffect(() => {
    if (open) {
      setSimilarAccounts(mockSimilarAccounts)
    }
  }, [open])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Connect to Existing Account</SheetTitle>
          <SheetDescription>
            Search for similar customer accounts and connect this interest as a
            secondary user or update the interest to connect as primary.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Search Section */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Search by name, email, phone, or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch()
                  }
                }}
              />
              <Button
                onClick={handleSearch}
                disabled={isSearching}
                className="bg-[#FE8F67] hover:bg-[#FE8F67]/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Matching criteria: name, email, phone, address
            </p>
          </div>

          <Separator />

          {/* Similar Accounts List */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Similar Customer Accounts
            </h3>
            {similarAccounts.length === 0 ? (
              <p className="text-sm text-gray-500">
                No similar accounts found. You can create a new account instead.
              </p>
            ) : (
              <div className="space-y-3">
                {similarAccounts.map((account) => (
                  <Card key={account.id}>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div>
                            <p className="text-xs text-gray-500">
                              Account Name
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              {account.accountName}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">
                              Organisation Number
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              {account.organisationNumber}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">
                              Primary Customer
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              {account.primaryCustomer.firstName}{" "}
                              {account.primaryCustomer.lastName}
                            </p>
                            <p className="text-xs text-gray-500">
                              {account.primaryCustomer.email}
                            </p>
                          </div>
                          {account.address && (
                            <div>
                              <p className="text-xs text-gray-500">Address</p>
                              <p className="text-sm text-gray-700">
                                {account.address}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <Separator />
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleConnectAsSecondary(account.id)
                          }
                          className="flex-1"
                        >
                          Connect as Secondary User
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleConnectAsPrimary(account.id)}
                          className="flex-1 bg-[#FE8F67] hover:bg-[#FE8F67]/90"
                        >
                          Connect as Primary (Update Interest)
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

