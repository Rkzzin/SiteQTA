import React from "react";
import Head from "next/head";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-6xl mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Introdução e Contextualização</h2>
          <p>O monitoramento da qualidade da água é essencial para entender os impactos ambientais e a saúde dos ecossistemas aquáticos. Este projeto analisa diferentes pontos de coleta para avaliar a qualidade da água em relação aos parâmetros estabelecidos.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Objetivos do Projeto</h2>
          <ul className="list-disc ml-6">
            <li>Identificar a qualidade da água nos pontos de coleta.</li>
            <li>Comparar os resultados com as normas ambientais.</li>
            <li>Analisar a evolução histórica dos parâmetros de qualidade.</li>
            <li>Avaliar o impacto do saneamento e das políticas públicas.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Galeria de Imagens</h2>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-gray-300 h-32 flex items-center justify-center">
                [Imagem {index + 1}]
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2025 Monitoramento das Águas</p>
      </footer>
    </div>
  );
}
