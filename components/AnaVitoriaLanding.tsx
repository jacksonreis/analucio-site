"use client";


import { useEffect, useRef, useState } from "react";
import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import styles from "./AnaVitoriaLanding.module.css";
import { AnimateIn } from "@/components/AnimateIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from 'next/image';

// ---- Fonts (troque pelos imports em app/layout.tsx se preferir carregar globalmente) ----
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// ---- Dados do carrossel de resultados (troque pelos casos reais depois) ----
const results = [
  { id: 1, label: "Antes / Depois — Cliente 1" },
  { id: 2, label: "Antes / Depois — Cliente 2" },
  { id: 3, label: "Antes / Depois — Cliente 3" },
  { id: 4, label: "Antes / Depois — Cliente 4" },
  { id: 5, label: "Antes / Depois — Cliente 5" },
  { id: 6, label: "Antes / Depois — Cliente 6" },
  { id: 7, label: "Antes / Depois — Cliente 7" },
  { id: 8, label: "Antes / Depois — Cliente 8" },
];


export default function AnaVitoriaLanding() {

  return (
    <div className={`${styles.page} ${playfair.variable} ${cormorant.variable} ${poppins.variable}`}>

      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <AnimateIn direction="up" delay={0.6}>
            <div className={`${styles.heroName} ${styles.script}`} style={{ fontFamily: "var(--font-cormorant)" }}>
              Ana Vitória Lúcio
            </div>
            <h1 className={styles.heroTitle}>
              Estratégias nutricionais baseadas na sua realidade para você{" "}
              <b><em>emagrecer</em></b> e ter <b><em>resultados reais</em></b>.
            </h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <p className={styles.heroDesc}>
              Você já tentou de tudo — e o peso voltou. O problema nunca foi sua
              força de vontade. Foi a falta de um plano feito pro seu corpo, sua
              rotina e sua vida real.
            </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <div className={styles.heroCta}>
              <a href="#cta" className={styles.btn}>
                Quero resultado de vez
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            </AnimateIn>
          </div>

          
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.benefitsTitle}>
            <AnimateIn direction="fade" delay={0.6}>
            <h2 className={styles.eyebrow}>
              Emagreça de Forma Inteligente e Alcance
              Sua Melhor Performance
            </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <p className={styles.lede}>
              Seu objetivo é emagrecer? Com um acompanhamento nutricional
              personalizado, você aprende a emagrecer de forma saudável, ganhar
              mais disposição e potencializar seu desempenho físico.
            </p>
            </AnimateIn>
          </div>
          <AnimateIn direction="fade" delay={0.6}>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Plano Alimentar Personalizado</h3>
              <p>Nada de dietas prontas. Seu plano alimentar é desenvolvido de acordo com sua rotina, preferências, objetivos e necessidades, tornando o processo mais leve e eficiente.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16M6 6l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 10v6M15 10v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Emagreça com Saúde</h3>
              <p>Conquiste a redução de gordura corporal de forma saudável, preservando sua massa muscular e criando hábitos alimentares que você consegue manter no dia a dia.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </div>
              <h3>Mudança de Hábitos</h3>
              <p>Aprenda a fazer escolhas conscientes, sem restrições extremas, construindo uma alimentação equilibrada que proporciona resultados duradouros e mais qualidade de vida.</p>
            </div>
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className={styles.about}>
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div>
            <AnimateIn direction="right" delay={0.8}>
            <h2 className={styles.eyebrow}>Quem sou Eu?</h2>
            <p>
              Sou nutricionista graduada com pós-graduação em Nutrição Esportiva, e
              trabalho na fronteira entre os dois mundos: o{" "}
              <strong>emagrecimento saudável</strong> e a{" "}
              <strong>performance física</strong>. Isso significa que seu plano
              alimentar não é genérico — ele é calculado a partir do seu gasto
              energético, sua rotina de treino, seus exames e sua relação com a
              comida.
            </p>
            <p>
              Atendo tanto quem está começando a se exercitar e quer perder
              gordura sem perder energia no dia a dia, quanto atletas amadores e
              avançados que precisam de estratégias de bulking, cutting e
              periodização nutricional alinhadas ao calendário de treinos.
            </p>
            </AnimateIn>

            <div className={styles.aboutCreds}>
              <AnimateIn direction="up" delay={0.5}>
              <div className={styles.cred}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                <div className={styles.textForm}>
                  <p>Pós em Nutrição Esportiva</p>
                  <span>Formação específica em suplementação e performance.</span>
                </div>
              </div>
              </AnimateIn>
              <AnimateIn direction="up" delay={0.7}>
              <div className={styles.cred}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <div className={styles.textForm}>
                  <p>Registro ativo CRN</p>
                  <span>Atuação clínica regulamentada e responsável.</span>
                </div>
              </div>
              </AnimateIn>
            </div>
          </div>

          {/* Troque por <Image src="/ana-vitoria/about.jpg" alt="Ana Vitória Lúcio" fill /> dentro de um wrapper com position:relative */}
          <AnimateIn direction="scale" delay={0.5}>
          <div className={styles.aboutPhoto}>
            
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* ============ PARA QUEM ============ */}
      <section className={styles.audience}>
        <div className={styles.container}>
          <div className={styles.audienceTitle}>
            <AnimateIn direction="fade" delay={0.6}>
            <h2 className={styles.eyebrow}>
              Para quem é o Acompanhamento?
            </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <p className={styles.lede}>
              Seja para emagrecer, ganhar massa muscular, melhorar seu desempenho
              esportivo ou simplesmente cuidar melhor da saúde, o acompanhamento é
              totalmente adaptado às suas necessidades.
            </p>
            </AnimateIn>
          </div>
          <AnimateIn direction="fade" delay={0.6}>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceItem}>
              <h3>Emagrecer</h3>
              <p>Redução de gordura corporal preservando massa muscular.</p>
            </div>
            <div className={styles.audienceItem}>
              <h3>Ganhar Massa Muscular</h3>
              <p>Hipertrofia com alimentação adequada e eficiente.</p>
            </div>
            <div className={`${styles.audienceItem} ${styles.noBorderRight}`}>
              <h3>Melhorar Performance</h3>
              <p>Nutrição específica para atletas e praticantes de atividade física.</p>
            </div>
            <div className={`${styles.audienceItem} ${styles.noBorderRight}`}>
              <h3>Mais Saúde</h3>
              <p>Controle alimentar visando qualidade de vida e prevenção.</p>
            </div> 
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* ============ RESULTS CAROUSEL ============ */}
      <section className={styles.results}>
        <div className={styles.container}>
          <AnimateIn direction="fade" delay={0.6}>
          <h2 className={styles.eyebrow}>Resultados Reais</h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.6}>
          <p className={styles.lede}>Os resultados que você vê aqui são consequência de um método personalizado, construído com planejamento, constância e acompanhamento próximo. Cada evolução representa um passo em direção a uma vida mais saudável</p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.7}>
          <Carousel className="w-full max-w-5xl mx-auto mt-10">
            <CarouselContent>
              {results.map((result) => (
                <CarouselItem
                  key={result.id}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden border">
                    {/* Troque pela imagem real do resultado */}
                    <Image
                      src={`/imagens/results/image${result.id}.jpg`}
                      alt={result.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
            <CarouselDots className="sm:hidden" />
          </Carousel>
          </AnimateIn>
          
        </div>

      {/* <div className={styles.scrollCue}>
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div> */}
      </section>

      {/* ============ O QUE MUDA ============ */}
      <section className={styles.changes}>
        <div className={styles.container}>
          <AnimateIn direction="fade" delay={0.6}>
          <h2 className={styles.eyebrow}>
            O que muda no seu Acompanhamento?
          </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.6}>
          <p className={styles.lede}>
            Detalhes que fazem diferença entre um plano que você segue por uma
            semana e um plano que vira estilo de vida.
          </p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.7}>
          <div className={styles.changesRow}>
            <div className={styles.changeItem}>
              <div className={styles.changeNum} style={{ fontFamily: "var(--font-merriweather)" }}>1</div>
              <h3>Plano 100% individual</h3>
              <p>Nada de dieta de gaveta. Cada cardápio é montado a partir dos seus exames, sua rotina e suas preferências alimentares.</p>
            </div>
            <div className={styles.changeItem}>
              <div className={styles.changeNum} style={{ fontFamily: "var(--font-merriweather)" }}>2</div>
              <h3>Foco em adesão</h3>
              <p>Refeições realistas para quem trabalha, treina e tem vida social — sem depender da força de vontade infinita.</p>
            </div>
            <div className={styles.changeItem}>
              <div className={styles.changeNum} style={{ fontFamily: "var(--font-merriweather)" }}>3</div>
              <h3>Suplementação orientada</h3>
              <p>Indicação de suplementos apenas quando fazem sentido clínico, com base em evidência científica atual.</p>
            </div>
            <div className={styles.changeItem}>
              <div className={styles.changeNum} style={{ fontFamily: "var(--font-merriweather)" }}>4</div>
              <h3>Suporte entre consultas</h3>
              <p>Canal direto para dúvidas do dia a dia, para você nunca ficar perdido entre uma consulta e outra.</p>
            </div>
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      
      <section className={styles.finalCta} id="cta">
        <div className={`${styles.container} ${styles.finalGrid}`}>
          
          <div className={styles.finalCopy}>
            <AnimateIn direction="up" delay={0.5}>
            <h1 className={styles.heroTitle}>
              Sua próxima fase começa com um plano feito para <b><em>você</em></b>.
            </h1>
            <p>
              Agende sua avaliação inicial e receba um plano alimentar construído
              a partir do seu objetivo, sua rotina e seus exames.
            </p>
            </AnimateIn>
            <AnimateIn direction="blur" delay={0.8}>
            <div className={styles.finalCtaBtn}>
              <a href="#" className={styles.btn}>
                Agendar minha consulta
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            </AnimateIn>
          </div>

          {/* Troque por <Image src="/ana-vitoria/cta.jpg" alt="Ana Vitória Lúcio" fill /> dentro de um wrapper com position:relative */}
          
        </div>
      </section>

      <footer className={styles.footer}>
        © 2026 Ana Vitória Lúcio — Todos os direitos reservados.
        <br />
        Site feito por <b>Jackson Reis</b>.
      </footer>
    </div>
  );
}