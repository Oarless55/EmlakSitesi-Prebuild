import Link from "next/link";
import { Menu, Search, User, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tight text-blue-600">
                        RE/MAX
                    </span>
                    {/* <span className="text-sm font-medium text-gray-500">| Türkiye</span> */}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/satilik"
                        className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                    >
                        Danışman Ol
                    </Link>
                    <Link
                        href="/kiralik"
                        className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                    >
                        Danışmanlarımız
                    </Link>
                    <Link
                        href="/ofis"
                        className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                    >
                        Ofis Aç
                    </Link>
                    <Link
                        href="/ofis"
                        className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                    >
                        Ofislerimiz
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 md:flex">
                        <Globe className="h-4 w-4" />
                        <span className="text-red-500">TR</span>
                    </button>

                    <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600">
                        <span>Giriş Yap</span>
                        <User className="h-4 w-4" />
                    </button>

                    <button className="rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700 md:hidden">
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
