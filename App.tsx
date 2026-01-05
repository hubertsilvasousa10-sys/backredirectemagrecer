
import React, { useState, useEffect } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Timer, 
  Smartphone, 
  Lock, 
  ChevronRight, 
  Activity, 
  Flame,
  ArrowRight
} from 'lucide-react';

// Sub-components for better organization
const Section = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <section className={`py-12 px-6 md:px-12 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const Feature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex gap-4 items-start mb-6">
    <div className="bg-emerald-100 p-2 rounded-lg shrink-0">
      <Icon className="w-6 h-6 text-emerald-600" />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function App() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/2jpcRdyh6aG6Do5z1Txf";

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Interrupção */}
      <header className="bg-red-600 text-white py-4 px-6 text-center sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm md:text-base font-bold uppercase tracking-wider">
            Espere! Não saia sem antes ver isso...
          </p>
        </div>
      </header>

      <main className="flex-grow">
        {/* Headline & Introdução */}
        <Section className="text-center pt-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Eu entendo. Mudar tudo de uma vez é <span className="text-emerald-600 underline">assustador</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Você talvez sinta que não tem tempo, ou que já tentou de tudo e nada funcionou. E se a gente fizesse diferente desta vez?
          </p>
        </Section>

        {/* Proposta: Começar Pequeno */}
        <Section className="bg-white rounded-3xl shadow-sm border border-slate-100 my-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                PROPOSTA SIMPLIFICADA
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Você não precisa de 2 horas na academia. Precisa de 15 minutos consistentes.
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Desenvolvemos uma rota de entrada para quem quer emagrecer sem radicalismos. 
                Nada de aparelhos caros ou dietas impossíveis. Apenas o essencial.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Sem equipamentos
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Ideal para iniciantes absolutos
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  No conforto da sua sala
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img 
                src="https://picsum.photos/seed/health1/800/600" 
                alt="Treino em casa" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <Timer className="w-5 h-5" />
                  <span>Apenas 15 min/dia</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* O que recebe exatamente */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O que você recebe hoje:</h2>
            <p className="text-slate-600">Um kit enxuto focado em resultados rápidos.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Feature 
              icon={Smartphone}
              title="Mini Guia de Exercícios"
              description="Um guia digital com os 10 exercícios mais potentes para queimar gordura usando apenas o peso do corpo."
            />
            <Feature 
              icon={Activity}
              title="Rotina Express de 15 Minutos"
              description="A sequência exata para você apertar o play e fazer junto, sem precisar pensar no que vem a seguir."
            />
            <Feature 
              icon={Flame}
              title="Protocolo Acelerador"
              description="Dicas simples de como aumentar seu gasto calórico ao longo do dia sem esforço extra."
            />
            <Feature 
              icon={Lock}
              title="Acesso Vitalício"
              description="Pague uma única vez e tenha o guia para sempre no seu celular, tablet ou computador."
            />
          </div>
        </Section>

        {/* Para quem é? */}
        <Section className="bg-slate-900 text-white rounded-[40px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-center">Esse guia foi feito para você que:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Trabalha muito e não tem tempo para ir à academia.",
                "Não gosta de ambientes barulhentos ou lotados.",
                "Está começando agora e tem medo de se machucar.",
                "Busca uma solução barata e eficiente.",
                "Quer perder os primeiros quilos com rapidez.",
                "Precisa de algo que caiba na rotina da família."
              ].map((text, i) => (
                <div key={i} className="bg-slate-800/50 p-6 rounded-2xl border border-white/10">
                  <p className="text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Preço e CTA Final */}
        <Section className="text-center pb-24">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Por que apenas R$ 19,90?</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Eu quero que você dê o primeiro passo hoje, sem desculpas. Por isso, baixei o valor de R$ 29,90 para apenas R$ 19,90. É menos do que um café com pão na chapa para transformar sua saúde.
            </p>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-500 relative overflow-hidden">
              {/* Badge Desconto */}
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-2 rounded-bl-3xl text-sm font-bold">
                OFERTA ÚNICA
              </div>

              <p className="text-slate-500 line-through text-lg">De R$ 29,90</p>
              <div className="flex flex-col items-center mb-6">
                <span className="text-sm font-bold text-slate-400 uppercase">Por apenas</span>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold align-top mt-2">R$</span>
                  <span className="text-6xl font-black text-slate-900">19,90</span>
                </div>
                <span className="text-emerald-600 font-semibold mt-1">Pagamento Único</span>
              </div>

              <a 
                href={checkoutUrl}
                className="group w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 px-8 rounded-2xl font-extrabold text-xl shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Compra 100% Segura
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Acesso Imediato
                </div>
              </div>
            </div>

            {/* Contador Escassez */}
            <div className="mt-8 flex items-center justify-center gap-2 text-red-600 font-medium">
              <Clock className="w-4 h-4" />
              <span>Esta oferta expira em: <b>{formatTime(timeLeft)}</b></span>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer minimalista */}
      <footer className="bg-slate-100 py-10 px-6 text-center text-slate-500 text-xs md:text-sm border-t border-slate-200">
        <div className="max-w-2xl mx-auto space-y-4">
          <p>© 2024 Emagrecimento Express. Todos os direitos reservados.</p>
          <p>
            AVISO LEGAL: Os resultados podem variar de pessoa para pessoa. Este produto não substitui orientação médica. Sempre consulte seu médico antes de iniciar qualquer atividade física.
          </p>
        </div>
      </footer>

      {/* Botão Flutuante Mobile (Z-Index alto) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden bg-gradient-to-t from-white via-white/90 to-transparent z-[100]">
        <a 
          href={checkoutUrl}
          className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-center shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          COMEÇAR POR R$ 19,90
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
