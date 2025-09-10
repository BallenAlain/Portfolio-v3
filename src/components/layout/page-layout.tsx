import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
    return (
        <div className={`min-h-screen flex flex-col border-x-1 bg-background border-zinc-100 mx-100 ${className}`}>
          <main className="flex-1 flex flex-col">{children}</main>
        </div>
      )
}

export default PageLayout;