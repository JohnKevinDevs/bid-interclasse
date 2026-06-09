import type { Metadata } from "next";
import { DivisionOverviewPage } from "@/components/divisions/DivisionOverviewPage";

export const metadata: Metadata = {
  title: "Interclasse ECI",
  description:
    "Central pública da divisão ECI no BID Interclasse CEAP, com acesso a atletas, times e modalidades.",
  alternates: {
    canonical: "/eci",
  },
  openGraph: {
    title: "Interclasse ECI | BID Interclasse CEAP",
    description:
      "Consulte atletas, equipes e modalidades da divisão ECI no portal oficial do Interclasse CEAP.",
    url: "/eci",
  },
};

export default function EciPage() {
  return (
    <DivisionOverviewPage
      division="eci"
      title="Interclasse ECI"
      description="Atletas, times e modalidades da divisão ECI em uma consulta simples e oficial."
      summary="Um recorte rápido da divisão antes de acessar as listas completas."
    />
  );
}
