import type { Metadata } from "next";
import { DivisionOverviewPage } from "@/components/divisions/DivisionOverviewPage";

export const metadata: Metadata = {
  title: "Interclasse ECI",
  description:
    "Central pública da divisão ECI no BID Interclasse CEAP, com acesso a times e modalidades.",
  alternates: {
    canonical: "/eci",
  },
  openGraph: {
    title: "Interclasse ECI | BID Interclasse CEAP",
    description:
      "Consulte equipes e modalidades da divisão ECI no portal oficial do Interclasse CEAP.",
    url: "/eci",
  },
};

export default function EciPage() {
  return (
    <DivisionOverviewPage
      division="eci"
      title="Interclasse ECI"
      description="Times e modalidades da divisão ECI em uma consulta simples e oficial."
      summary="A ECI concentra a consulta pública em equipes cadastradas e modalidades disponíveis."
    />
  );
}
