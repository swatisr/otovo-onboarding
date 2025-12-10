import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-0">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Interest Details
        </h1>
        <p className="text-gray-600">Page content will go here</p>
      </main>
    </div>
  )
}

