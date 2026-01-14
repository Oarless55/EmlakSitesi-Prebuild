import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, BedDouble, Ruler } from "lucide-react";
import { Listing } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ListingCardProps {
    listing: Listing;
    className?: string;
}

export default function ListingCard({ listing, className }: ListingCardProps) {
    return (
        <Link
            href={`/listing/${listing.id}`}
            className={cn(
                "group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg",
                className
            )}
        >
            {/* Image Badge */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Discount Badge */}
                {listing.isDiscounted && (
                    <div className="absolute top-3 left-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                        İndirimli
                    </div>
                )}

                {/* Favorite Button */}
                <button className="absolute top-3 right-3 rounded-full bg-white/80 p-2 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500">
                    <Heart className="h-4 w-4" />
                </button>

                {/* Price Overlay (Mobile style or creative) -> Let's keep it below */}
            </div>

            <div className="p-4">
                {/* Price */}
                <div className="mb-2 flex items-end gap-2">
                    <span className="text-xl font-bold text-blue-900">
                        {listing.price.toLocaleString("tr-TR")} {listing.currency}
                    </span>
                    {listing.oldPrice && (
                        <span className="mb-1 text-sm text-gray-400 line-through">
                            {listing.oldPrice.toLocaleString("tr-TR")} {listing.currency}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                    {listing.title}
                </h3>

                {/* Location */}
                <div className="mb-4 flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    <span>
                        {listing.location.neighborhood}, {listing.location.district}/{listing.location.city}
                    </span>
                </div>

                {/* Specs */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-600">
                    {listing.specs.roomCount && (
                        <div className="flex items-center gap-1">
                            <BedDouble className="h-3.5 w-3.5 text-gray-400" />
                            <span>{listing.specs.roomCount}</span>
                        </div>
                    )}
                    {!listing.specs.roomCount && (
                        <div className="flex items-center gap-1">
                            <span>{listing.specs.type}</span>
                        </div>
                    )}

                    <div className="flex items-center gap-1">
                        <Ruler className="h-3.5 w-3.5 text-gray-400" />
                        <span>{listing.specs.size} m²</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>{listing.specs.floor ? `${listing.specs.floor}. Kat` : 'Zemin'}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
