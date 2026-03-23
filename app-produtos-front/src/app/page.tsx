"use client";

import { useEffect, useState } from "react";
import { getProdutosTodos } from "@/services/api";
// Importamos o componente e a interface que criámos
import CardProduto, { Produto } from "@/components/CardProduto";

export default function Home() {
  const [produtos, atualizarProdutos] = useState<Produto[]>([]);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    getProdutosTodos()
      .then((resultado) => {
        atualizarProdutos(resultado.data.products);
      })
      .catch((erro) => console.error("Erro ao buscar produtos:", erro));
  }, []);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.title.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      
      <header className="mb-10 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-gray-800">Catálogo de Produtos</h1>
        
        <input
          type="text"
          placeholder="Pesquisar produto pelo título..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
        />
      </header>

      <main className="max-w-7xl mx-auto">
        {produtosFiltrados.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 text-lg">
            Nenhum produto encontrado para "{termoBusca}".
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* Agora usamos o nosso componente e passamos as props! */}
            {produtosFiltrados.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
            
          </div>
        )}
      </main>
      
    </div>
  );
}