import Hero from "@/component/Hero"
import Navbar from "@/component/Navbar"

function page() {
  return (
    <div className="bg-gradient-to-r from-[#0d1b2a] via-[#1b263b] to-[#081225] min-h-[600px] text-white">
      <Navbar />
      <Hero />
    </div>
  )
}

export default page
