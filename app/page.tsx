import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InterestConnectionsCard } from "@/components/interest-connections-card"

export default function Home() {
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
            <InterestConnectionsCard />
          </TabsContent>
          <TabsContent value="account" className="mt-6">
            <p className="text-gray-600">Customer Account content will go here</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

