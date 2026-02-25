import { Link } from "react-router-dom"
import ThemeToggle from "../theme/ThemeToggle"

export default function Navbar() {
  return (
    <nav className="border-b px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <ThemeToggle />
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-muted-foreground text-xl">
            Home
          </Link>
          <Link to="/chapters" className="hover:text-muted-foreground text-xl">
            Chapters
          </Link>
        </div>
      </div>
    </nav>
  )
}
