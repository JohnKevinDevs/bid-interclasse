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
      description="Atletas, times e modalidades da EPT em uma consulta simples e oficial."
      summary="Acompanhe a base da EPT com os principais registros da divisao, sem excesso de texto."
    />
  );
}
