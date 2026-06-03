export const siteConfig = {
  name: "居酒屋食堂 いしばしさん家",
  title: "居酒屋食堂 いしばしさん家 | 熊本市東区・健軍の居酒屋食堂",
  description:
    "熊本市東区・健軍電停近くの居酒屋食堂 いしばしさん家。昼はカレー、夜はお酒と食事を気軽に楽しめる居酒屋食堂です。からあげやハムカツなど人気メニューも。おひとり様からグループまでゆっくりお過ごしいただけます。",
  url: "https://ishibashi-izakaya.pages.dev/",
  ogImage: "/ogp.png",
  lang: "ja",
  locale: "ja_JP",
  keywords: [
    "居酒屋食堂 いしばしさん家",
    "居酒屋",
    "食堂",
    "熊本",
    "熊本市東区",
    "健軍",
    "健軍電停",
    "カレー",
    "からあげ",
    "ランチ",
    "ディナー",
    "宴会",
  ],
  phone: "+81-96-369-0650",
  address: {
    streetAddress: "東区東本町1-98",
    addressLocality: "熊本市",
    addressRegion: "熊本県",
    addressCountry: "JP",
  },
  geo: {
    latitude: 32.7892,
    longitude: 130.7634,
  },
  priceRange: "¥",
  servesCuisine: ["Japanese", "Izakaya"],
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:30", closes: "14:00" },
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "18:00", closes: "23:00" },
    { dayOfWeek: ["Saturday"], opens: "18:00", closes: "23:00" },
    { dayOfWeek: ["Sunday", "PublicHolidays"], opens: "12:00", closes: "20:00" },
  ],
  sns: {
    instagram: "https://www.instagram.com/ishibashisanchi_kengun/",
  },
  themeColor: "#eb4141",
} as const;

export function absoluteUrl(path: string, base = siteConfig.url): string {
  return new URL(path, base).href;
}
