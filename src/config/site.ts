export const siteConfig = {
  name: "サイト名",
  title: "ページタイトル",
  description: "ディスクリプション文",
  url: "https://example.com",      // 本番URL（OGPの絶対パス生成にも使う）
  ogImage: "/ogp.png",
  lang: "ja",
  locale: "ja_JP",
  // SNSや会社情報など、頻繁に変わるものはここに
  sns: {
    x: "https://x.com/...",
    instagram: "",
  },
} as const;