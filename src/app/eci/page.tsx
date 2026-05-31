import type { Metadata } from "next";
import { DivisionOverviewPage } from "@/components/divisions/DivisionOverviewPage";

export const metadata: Metadata = {
  title: "Interclasse ECI",
  description:
    "Central publica da divisao ECI no BID Interclasse CEAP, com acesso a atletas, times e modalidades.",
  alternates: {
    canonical: "/eci",
  },
  openGraph: {
    title: "Interclasse ECI | BID Interclasse CEAP",
    description:
      "Consulte atletas, equipes e modalidades da divisao ECI no portal oficial do Interclasse CEAP.",
    url: "/eci",
  },
};

export default function EciPage() {
  return (
    <DivisionOverviewPage
      division="eci"
      title="Interclasse ECI"
      description="Central publica da divisao ECI: atletas, equipes e modalidades em um fluxo de consulta rapido, organizado e com leitura de BID esportivo."
      overviewTitle="A divisao ECI agora entrega leitura antes mesmo da navegacao detalhada."
      overviewDescription="Aqui a consulta comeca com contexto: visao geral da divisao, destaques de atletas, equipes em evidencia e modalidades que estruturam a participacao da ECI no Interclasse CEAP."
      identityTitle="ECI com representacao esportiva organizada"
      identityDescription="A divisao ECI concentra turmas, atletas e modalidades em uma base publica que reforca pertencimento, leitura institucional e clareza de consulta."
      closingTitle="A central ECI passa a funcionar como ponto de entrada e leitura do BID."
      closingDescription="Em vez de apenas encaminhar para outras paginas, a divisao ECI agora apresenta panorama, previews e contexto institucional para tornar a consulta mais util, mais densa e mais oficial desde o primeiro acesso."
    />
  );
}
