import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import ListingCard from "./ListingCard";
import { Listing } from "@/lib/data";

interface ListingSectionProps {
    title: string;
    listings: Listing[];
    href?: string;
    icon?: React.ReactNode;
}

export default function ListingSection({ title, listings, href, icon }: ListingSectionProps) {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {icon}
                        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">{title}</h2>
                    </div>
                    {href && (
                        <Link
                            href={href}
                            className="group flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                        >
                            Tümünü Gör
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    )}
                </div>

                {/* Grid Layout (matching 'Vitrin İlanları') */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {listings.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>
            </div>
        </section>
    );
}
