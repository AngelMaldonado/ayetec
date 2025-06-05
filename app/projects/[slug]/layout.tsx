import { Footer } from "@/components/footer";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav className="container container-fluid mx-auto my-4">
        <Link
          href="/#benefits"
          className="flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Volver</span>
        </Link>
      </nav>
      <div className="container container-fluid mx-auto min-h-[calc(100dvh-10rem)]">
        {children}
      </div>
      <Footer />
    </main>
  )
}
