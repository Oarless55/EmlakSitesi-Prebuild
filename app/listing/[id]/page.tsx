import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    Share2,
    Printer,
    Flag,
    MessageCircle,
    Phone,
    MapPin,
    Home,
    Calendar,
    Layers,
    Maximize,
    Thermometer,
    CheckCircle2,
} from "lucide-react";
import { mockListings } from "@/lib/data";

// Next.js 16 params are promises
interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return mockListings.map((listing) => ({
        id: listing.id,
    }));
}

export default async function ListingPage({ params }: PageProps) {
    const { id } = await params;
    const listing = mockListings.find((l) => l.id === id);

    if (!listing) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="mb-6 text-sm text-gray-500">
                    <Link href="/" className="hover:text-blue-600">Anasayfa</Link> &gt;{" "}
                    <span className="hover:text-blue-600">{listing.location.city}</span> &gt;{" "}
                    <span className="hover:text-blue-600">{listing.location.district}</span> &gt;{" "}
                    <span className="text-gray-900">{listing.location.neighborhood}</span>
                </div>

                {/* Header Section */}
                <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            {listing.title}
                        </h1>
                        <div className="mt-2 text-blue-600 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {listing.location.neighborhood}, {listing.location.district} / {listing.location.city}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-blue-900">
                            {listing.price.toLocaleString("tr-TR")} {listing.currency}
                        </div>
                        {listing.oldPrice && (
                            <div className="text-sm text-gray-400 line-through">
                                {listing.oldPrice.toLocaleString("tr-TR")} {listing.currency}
                            </div>
                        )}
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-3 h-[400px] md:h-[500px]">
                    {/* Main Image */}
                    <div className="relative h-full overflow-hidden rounded-xl lg:col-span-2">
                        <Image
                            src={listing.image}
                            alt={listing.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                            1/{listing.images.length + 1}
                        </div>
                    </div>
                    {/* Side Images (Hidden on mobile usually or stacked) */}
                    <div className="hidden grid-rows-2 gap-4 lg:grid">
                        {listing.images.slice(0, 2).map((img, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-xl">
                                <Image
                                    src={img}
                                    alt={`${listing.title} ${idx}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        {/* If no extra images, show placeholders or map */}
                        {listing.images.length === 0 && (
                            <>
                                <div className="relative overflow-hidden rounded-xl bg-gray-200"></div>
                                <div className="relative overflow-hidden rounded-xl bg-gray-200"></div>
                            </>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Tabs */}
                        <div className="flex gap-4 border-b border-gray-200 pb-px">
                            <button className="border-b-2 border-blue-600 px-4 py-2 font-medium text-blue-600">
                                Açıklama
                            </button>
                            <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-900">
                                Konumu
                            </button>
                            <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-900">
                                Emlak Endeksi
                            </button>
                        </div>

                        {/* Description */}
                        <div className="prose max-w-none text-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900">İlan Detayları</h3>
                            <p>{listing.description}</p>

                            <h4 className="mt-4 font-medium text-gray-900">Öne Çıkan Özellikler</h4>
                            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {listing.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <h4 className="mt-4 font-medium text-gray-900">Konum Avantajı</h4>
                            <p className="text-sm">
                                Bölgenin en çok tercih edilen lokasyonlarından biridir. Toplu taşımaya ve marketlere yürüme mesafesindedir.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-6">
                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <button className="flex items-center justification-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 text-gray-600 hover:bg-gray-50">
                                <Heart className="h-4 w-4" /> Favoriye Ekle
                            </button>
                            <button className="flex items-center justify-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 text-gray-600 hover:bg-gray-50">
                                <Share2 className="h-4 w-4" /> Paylaş
                            </button>
                            <button className="flex items-center justify-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 text-gray-600 hover:bg-gray-50">
                                <Printer className="h-4 w-4" /> Yazdır
                            </button>
                            <button className="flex items-center justify-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 text-gray-600 hover:bg-gray-50">
                                <Flag className="h-4 w-4" /> Bildir
                            </button>
                        </div>

                        {/* Agent Card */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-gray-100">
                                    <Image src={listing.agent.image} alt={listing.agent.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{listing.agent.name}</div>
                                    <div className="text-sm text-gray-500">Gayrimenkul Danışmanı</div>
                                    <div className="mt-1 text-xs text-blue-600 uppercase font-bold tracking-wide">RE/MAX Premium</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                                    <MessageCircle className="h-4 w-4" />
                                    Mesaj Gönder
                                </button>
                                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 font-medium text-white transition-colors hover:bg-red-700">
                                    <Phone className="h-4 w-4" />
                                    Danışmanı Ara
                                </button>
                            </div>
                        </div>

                        {/* Property Summary Table */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                            <table className="w-full text-sm text-left">
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <th className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Portföy No</th>
                                        <td className="px-4 py-3 text-gray-900">P{Math.floor(Math.random() * 1000000)}</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Emlak Tipi</th>
                                        <td className="px-4 py-3 text-gray-900">{listing.specs.type}</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-gray-50 px-4 py-3 font-medium text-gray-500">m²</th>
                                        <td className="px-4 py-3 text-gray-900">{listing.specs.size}</td>
                                    </tr>
                                    {listing.specs.roomCount && (
                                        <tr>
                                            <th className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Oda Sayısı</th>
                                            <td className="px-4 py-3 text-gray-900">{listing.specs.roomCount}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <th className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Bina Yaşı</th>
                                        <td className="px-4 py-3 text-gray-900">{listing.specs.buildingAge}</td>
                                    </tr>
                                    {listing.specs.floor && (
                                        <tr>
                                            <th className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Bulunduğu Kat</th>
                                            <td className="px-4 py-3 text-gray-900">{listing.specs.floor}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <th className="bg-gray-50 px-4 py-3 font-medium text-gray-500">İlan Tarihi</th>
                                        <td className="px-4 py-3 text-gray-900">{listing.date}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
