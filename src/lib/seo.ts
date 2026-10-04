export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bid-interclasse.vercel.app";

export const siteName = "BID Interclasse CEAP";

export const siteDescription =
  "Portal oficial do Interclasse CEAP/FAC para consulta pública de atletas, times, modalidades, regulamentos e informações institucionais.";

// O Next mescla `openGraph` de forma rasa: o objeto da página substitui o do layout inteiro.
// Toda página espalha esta base para não perder tipo, idioma, nome do site e imagem.
export const sharedOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  siteName,
  images: [
    {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "BID Interclasse CEAP, portal da Federação Atlética CEAP",
    },
  ],
};
