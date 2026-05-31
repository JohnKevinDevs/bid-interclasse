import type { Metadata } from "next";
import { DivisionOverviewPage } from "@/components/divisions/DivisionOverviewPage";

export const metadata: Metadata = {
  title: "Interclasse EPT",
  description:
    "Central publica da divisao EPT no BID Interclasse CEAP, com acesso a atletas, times e modalidades.",
  alternates: {
    canonical: "/ept",
  },
  openGraph: {
    title: "Interclasse EPT | BID Interclasse CEAP",
    description:
      "Consulte atletas, equipes e modalidades da divisao EPT no portal oficial do Interclasse CEAP.",
    url: "/ept",
  },
};

export default function EptPage() {
  return (
    <DivisionOverviewPage
      division="ept"
      title="Interclasse EPT"
      description="Central publica da divisao EPT: atletas, equipes e modalidades do nucleo tecnico em uma experiencia de consulta clara, densa e oficial."
      overviewTitle="A divisao EPT ganha uma central com panorama esportivo e leitura operacional."
      overviewDescription="A pagina deixa de atuar apenas como encaminhamento e passa a reunir estatisticas, previews e sinais rapidos sobre a composicao esportiva da EPT no BID Interclasse CEAP."
      identityTitle="EPT com leitura tecnica e institucional mais forte"
      identityDescription="A divisao EPT apresenta suas equipes, atletas e modalidades em uma central que reforca organizacao, clareza de consulta e identidade competitiva."
      closingTitle="A central EPT passa a entregar valor logo na primeira dobra."
      closingDescription="O usuario consegue entender o tamanho da divisao, ver os principais registros e navegar com mais seguranca para as listagens completas, tudo sem perder o tom oficial do portal."
    />
  );
}
