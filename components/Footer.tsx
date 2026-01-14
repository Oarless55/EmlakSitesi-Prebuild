import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">Kurumsal</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-blue-600">Hakkımızda</Link></li>
                            <li><Link href="/" className="hover:text-blue-600">Yönetim Kurulu</Link></li>
                            <li><Link href="/" className="hover:text-blue-600">Kariyer</Link></li>
                            <li><Link href="/" className="hover:text-blue-600">İletişim</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">Hizmetler</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-blue-600">Gayrimenkul Değerleme</Link></li>
                            <li><Link href="/" className="hover:text-blue-600">Danışmanlık</Link></li>
                            <li><Link href="/" className="hover:text-blue-600">Satış & Kiralama</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">Yasal</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-blue-600">Gizlilik Politikası</Link></li>
                            <li><Link href="/" className="hover:text-blue-600">Kullanım Koşulları</Link></li>
                            <li><Link href="/" className="hover:text-blue-600">Çerez Politikası</Link></li>
                            <li><Link href="/" className="hover:text-blue-600">KVKK</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">Bizi Takip Edin</h3>
                        <div className="flex gap-4 text-gray-400">
                            {/* Social placeholders */}
                            <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                            <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                            <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} RE/MAX Türkiye. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
