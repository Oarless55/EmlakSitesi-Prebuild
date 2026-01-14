import Image from "next/image";
import { Search, Home as HomeIcon, Star, Sparkles, TrendingDown } from "lucide-react";
import ListingSection from "@/components/ListingSection";
import { mockListings } from "@/lib/data";

export default function Home() {
  const featuredListings = mockListings.filter((l) => l.isFeatured);
  const discountedListings = mockListings.filter((l) => l.isDiscounted);
  const newListings = mockListings; // For now just all

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative flex h-[500px] items-center justify-center bg-gray-900 text-white">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000"
          alt="Hero Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Hayalinizdeki Evi <br className="hidden md:block" />
            <span className="text-blue-400">Bugün Bulun</span>
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Binlerce satılık ve kiralık ilan arasından size en uygun olanı seçin.
          </p>

          {/* Search Bar */}
          <div className="mx-auto flex max-w-3xl items-center overflow-hidden rounded-full bg-white p-2 shadow-xl ring-1 ring-gray-900/5 transition-all hover:ring-blue-500/20">
            <div className="flex-1 px-4">
              <input
                type="text"
                placeholder="İl, ilçe, mahalle veya ilan no..."
                className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
            <button className="hidden items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 md:flex">
              <Search className="h-5 w-5" />
              <span>Ara</span>
            </button>
            <button className="rounded-full bg-blue-600 p-3 text-white md:hidden">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <ListingSection
        title="Vitrin İlanları"
        listings={featuredListings.slice(0, 4)}
        href="/vitrin"
        icon={<HomeIcon className="h-6 w-6 text-blue-600" />}
      />

      <div className="bg-blue-50/50">
        <ListingSection
          title="Dikkat Çeken İlanlar"
          listings={featuredListings.slice(0, 4).reverse()}
          href="/dikkat-ceken"
          icon={<Star className="h-6 w-6 text-orange-500" />}
        />
      </div>

      <ListingSection
        title="Yeni Eklenen İlanlar"
        listings={newListings.slice(0, 4)}
        href="/yeni"
        icon={<Sparkles className="h-6 w-6 text-yellow-500" />}
      />

      <div className="bg-red-50/30">
        <ListingSection
          title="İndirimli İlanlar"
          listings={discountedListings}
          href="/indirimli"
          icon={<TrendingDown className="h-6 w-6 text-red-500" />}
        />
      </div>
    </main>
  );
}
