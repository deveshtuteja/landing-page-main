import { ModeToggle } from "./ModeToggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SVGProps } from "react"
import { CloudIcon } from "../Icons"
export default function Header() {
  return (
    <header className="flex h-16 items-center bg-foreground border-b border-border/20 text-white fixed w-full  z-[5] justify-between px-6 md:px-12">
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
      <CloudIcon className="h-8 w-8 text-cyan-400" />
      <span className="text-2xl font-bold">CredLedger</span>
    </Link>
    <nav className="hidden gap-6 md:flex">
      <Link href="#" className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400" prefetch={false}>
        Features
      </Link>
      <Link href="#" className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400" prefetch={false}>
        Pricing
      </Link>
      <Link href="#" className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400" prefetch={false}>
        About
      </Link>
      <Link href="#" className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400" prefetch={false}>
        Contact
      </Link>
    </nav>
    <Button>Start Free Trial</Button>
  </header>
  )
}
