import PageLayout from '@/components/layout/PageLayout'
import { createFileRoute } from '@tanstack/react-router'
import Chat from '@/components/sections/Chat'
import Background from '@/components/layout/Background'

export const Route = createFileRoute('/chat/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <Background>
            <PageLayout>
                <Chat />
            </PageLayout>
        </Background>)
}
