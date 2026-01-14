export interface Agent {
    id: string;
    name: string;
    phone: string;
    image: string;
}

export interface Listing {
    id: string;
    title: string;
    price: number;
    currency: string;
    location: {
        city: string;
        district: string;
        neighborhood: string;
    };
    image: string;
    images: string[];
    specs: {
        roomCount?: string;
        bathCount?: number;
        size: number; // m2
        floor?: number | string;
        buildingAge?: number;
        heating?: string;
        furnished?: boolean;
        type: string; // e.g., 'Daire', 'Villa', 'Dükkan'
    };
    description: string;
    agent: Agent;
    features: string[];
    isFeatured?: boolean;
    isDiscounted?: boolean;
    oldPrice?: number;
    date: string;
}

export const mockAgents: Agent[] = [
    {
        id: "a1",
        name: "Ahmet Yılmaz",
        phone: "+90 555 123 45 67",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: "a2",
        name: "Ayşe Kaya",
        phone: "+90 555 987 65 43",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
];

export const mockListings: Listing[] = [
    {
        id: "1",
        title: "Kartepe Fatih Sultan Mehmet Mah. Cadde Üzeri Kiralık Dükkan",
        price: 75000,
        currency: "₺",
        location: {
            city: "Kocaeli",
            district: "Kartepe",
            neighborhood: "Fatih Sultan Mehmet Mah.",
        },
        image: "https://images.unsplash.com/photo-1582037928769-181f24095e29?auto=format&fit=crop&q=80&w=800",
        images: [
            "https://images.unsplash.com/photo-1582037928769-181f24095e29?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        ],
        specs: {
            size: 222,
            type: "Dükkan & Mağaza",
            buildingAge: 0,
            floor: "Zemin",
        },
        description: "Geniş vitrinli ve yüksek görünürlüklü cadde cephe. Yoğun yaya ve araç trafiğine sahip konum. Her sektöre uygun kullanım imkanı.",
        agent: mockAgents[0],
        features: ["Açık Otopark", "Depo", "Mutfak", "WC"],
        date: "Bugün",
        isFeatured: true,
    },
    {
        id: "2",
        title: "İstanbul Beşiktaş'ta Boğaz Manzaralı Lüks Daire",
        price: 15450000,
        currency: "₺",
        location: {
            city: "İstanbul",
            district: "Beşiktaş",
            neighborhood: "Levazım",
        },
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"],
        specs: {
            size: 145,
            roomCount: "3+1",
            type: "Daire",
            floor: 5,
            buildingAge: 10,
        },
        description: "Boğaz manzaralı, merkezi konumda lüks daire.",
        agent: mockAgents[1],
        features: ["Balkon", "Asansör", "Güvenlik"],
        date: "Dün",
        isFeatured: true,
    },
    {
        id: "3",
        title: "Bodrum Yalıkavak'ta Özel Havuzlu Müstakil Villa",
        price: 45000000,
        currency: "₺",
        location: {
            city: "Muğla",
            district: "Bodrum",
            neighborhood: "Yalıkavak",
        },
        image: "https://images.unsplash.com/photo-1613977257377-234e7ef56156?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1613977257377-234e7ef56156?auto=format&fit=crop&q=80&w=800"],
        specs: {
            size: 350,
            roomCount: "5+1",
            type: "Villa",
            buildingAge: 2,
        },
        description: "Özel havuzlu, geniş bahçeli lüks villa.",
        agent: mockAgents[0],
        features: ["Havuz", "Bahçe", "Otopark", "Şömine"],
        date: "2 Gün Önce",
        isFeatured: true,
    },
    {
        id: "4",
        title: "Ankara Çankaya'da Prestijli Ofis Katı",
        price: 129000,
        currency: "₺",
        location: {
            city: "Ankara",
            district: "Çankaya",
            neighborhood: "Balgat",
        },
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
        images: ["https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"],
        specs: {
            size: 180,
            type: "Ofis",
            buildingAge: 5,
            floor: 8,
        },
        description: "Plaza katında, dekorasyonlu hazır ofis.",
        agent: mockAgents[1],
        features: ["Güvenlik", "Kapalı Otopark", "Jeneratör"],
        date: "3 Gün Önce",
        isDiscounted: true,
        oldPrice: 140000,
    },
    {
        id: "5",
        title: "İzmir Çeşme'de Denize Sıfır Yazlık",
        price: 13300000,
        currency: "₺",
        location: {
            city: "İzmir",
            district: "Çeşme",
            neighborhood: "Alaçatı",
        },
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", // Reused image for variety
        images: [],
        specs: {
            size: 120,
            roomCount: "2+1",
            type: "Yazlık",
            buildingAge: 15,
        },
        description: "Denize sıfır konumda, tadilatlı yazlık.",
        agent: mockAgents[0],
        features: ["Deniz Manzaralı", "Teras"],
        date: "1 Hafta Önce",
        isDiscounted: true,
        oldPrice: 13350000,
    }
];
