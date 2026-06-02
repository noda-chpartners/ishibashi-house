export const siteConfig = {
  name: "サイト名",
  title: "居酒屋食堂 いしばしさん家",
  description: "ディスクリプション文",
  url: "https://example.com",      // 本番URL（OGPの絶対パス生成にも使う）
  ogImage: "/ogp.png",
  lang: "ja",
  locale: "ja_JP",
  // SNSや会社情報など、頻繁に変わるものはここに
  sns: {
    instagram: "https://www.instagram.com/ishibashisanchi_kengun/",
  },
} as const;