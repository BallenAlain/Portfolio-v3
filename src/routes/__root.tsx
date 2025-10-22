import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Background from '@/components/layout/Background'

const RootLayout = () => (
  <Background>
  <div className='flex flex-1 flex-col h-screen'>
    <div className="static max-w-6xl w-full mx-auto p-2 px-10 bg-white flex gap-2 justify-end">
      <Link to="/chat" className="[&.active]:font-bold">
        chat
        // dynamically show chat or home
      </Link>{' '}
    </div>

    <Outlet />
    <TanStackRouterDevtools />
  </div>
  </Background>
)

export const Route = createRootRoute({ component: RootLayout })