"use client"

import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface Interest {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface CreateAccountSlideoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  interest: Interest
}

export function CreateAccountSlideover({
  open,
  onOpenChange,
  interest,
}: CreateAccountSlideoverProps) {
  const [accountName, setAccountName] = useState(
    `${interest.firstName}'s account`
  )
  const [organisationNumber, setOrganisationNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Account Created",
        description: `Customer account "${accountName}" has been created successfully.`,
      })
      onOpenChange(false)
      // Reset form
      setAccountName(`${interest.firstName}'s account`)
      setOrganisationNumber("")
    }, 1000)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Customer Account</SheetTitle>
          <SheetDescription>
            Create a new customer account and assign this interest as the
            primary account owner.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="accountName">Account Name</Label>
            <Input
              id="accountName"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="Enter account name"
              required
            />
            <p className="text-xs text-gray-500">
              Default: {interest.firstName}'s account
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organisationNumber">Organisation Number</Label>
            <Input
              id="organisationNumber"
              value={organisationNumber}
              onChange={(e) => setOrganisationNumber(e.target.value)}
              placeholder="Enter organisation number"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#FE8F67] hover:bg-[#FE8F67]/90"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}

