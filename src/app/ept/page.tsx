import type { Metadata } from "next";
import { DivisionOverviewPage } from "@/components/divisions/DivisionOverviewPage";

export const metadata: Metadata = {
  title: "Interclasse EPT",
  description:
    "Central pública da divisão EPT no BID Interclasse CEAP, com acesso a atletas, times e modalidades.",
  alternates: {
    canonical: "/ept",
  },
  openGraph: {
    title: "Interclasse EPT | BID Interclasse CEAP",
    description:
      "Consulte atletas, equipes e modalidades da divisão EPT no portal oficial do Interclasse CEAP.",
    url: "/ept",
  },
};

export default function EptPage() {
  return (
    <DivisionOverviewPage
      division="ept"
      title="Interclasse EPT"
      description="Atletas, times e modalidades da divisão EPT em uma consulta simples e oficial."
      summary="Um recorte rápido da divisão técnica antes de acessar as listas completas."
    />
  );
}
