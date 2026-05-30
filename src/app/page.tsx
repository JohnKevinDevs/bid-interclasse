import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,_#ffffff_0%,_#f6f8f7_42%,_#d8e0e7_100%)]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-primary">
              Portal Oficial do Interclasse CEAP
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              BID Interclasse CEAP
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-800 sm:text-xl">
              Uma escola. Grandes talentos. Um legado.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Acompanhe atletas, equipes, modalidades e regulamentos do
              Interclasse CEAP 2026 em um portal publico pensado para organizar
              a competicao e valorizar a cultura esportiva da escola.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/eci"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong"
              >
                Acessar ECI
              </Link>
              <Link
                href="/ept"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Acessar EPT
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card href="/eci">
            <p className="text-sm font-semibold uppercase text-primary">Divisao</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">ECI</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Consulte atletas, equipes e modalidades do nucleo ECI.
            </p>
          </Card>
          <Card href="/ept">
            <p className="text-sm font-semibold uppercase text-primary">Divisao</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">EPT</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Consulte atletas, equipes e modalidades do nucleo EPT.
            </p>
          </Card>
          <Card href="/regulamentos">
            <p className="text-sm font-semibold uppercase text-primary">
              Documentos
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Regulamentos
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Regras, formatos e orientacoes oficiais de cada modalidade.
            </p>
          </Card>
          <Card href="/sobre">
            <p className="text-sm font-semibold uppercase text-primary">
              Institucional
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Sobre
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Entenda o papel da FAC e a proposta do Interclasse CEAP.
            </p>
          </Card>
        </div>
      </Container>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12">
          <SectionTitle
            eyebrow="Projeto Institucional"
            title="O BID organiza a informacao e fortalece a identidade do evento"
            description="Criado para acompanhar a estrutura do Interclasse CEAP 2026, o portal reune o que cada turma precisa consultar: quem participa, como cada modalidade funciona e quais sao as diretrizes oficiais da competicao."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card>
              <h2 className="text-xl font-semibold text-foreground">FAC</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                A Federacao Atletica CEAP amplia a experiencia esportiva da
                escola e ajuda a transformar competicao em pertencimento.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-semibold text-foreground">
                Interclasse 2026
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                O evento reune ECI e EPT em modalidades como FUT7, basquete 3x3,
                volei, tenis e xadrez, com regulamentos proprios e espirito de
                fair play.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-semibold text-foreground">
                Consulta Publica
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                O portal foi pensado para acesso rapido, leitura clara e
                organizacao institucional de atletas, equipes e documentos.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
