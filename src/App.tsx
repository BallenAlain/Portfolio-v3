import PageLayout from "@/components/layout/page-layout"
import HeroSection from "@/components/sections/hero-section"

 const App = () => {
  return (
    <div className="bg-zinc-50">
      <PageLayout className="flex content-center">
        <HeroSection />
      </PageLayout>
    </div>
  )
}

export default App;