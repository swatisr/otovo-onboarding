import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
            {/* Interest Overview content will go here */}
          </TabsContent>
          <TabsContent value="account" className="mt-6">
            {/* Customer Account content will go here */}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

