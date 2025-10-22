import { createFileRoute } from '@tanstack/react-router'
import PageLayout from "@/components/layout/PageLayout"
import HeroSection from "@/components/sections/HeroSection"
import Background from '@/components/layout/Background'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <Background>
            <PageLayout className="flex content-center">
                <HeroSection />
            </PageLayout>
        </Background>
    )
}