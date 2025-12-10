"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface ConnectAccountSlideoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConnectAccountSlideover({
  open,
  onOpenChange,
}: ConnectAccountSlideoverProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Connect to customer account</SheetTitle>
        </SheetHeader>
        {/* Content will be added in next steps */}
      </SheetContent>
    </Sheet>
  )
}
