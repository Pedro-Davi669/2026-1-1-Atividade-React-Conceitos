// Interface do Produto definida
export interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

// O componente recebe produto
interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={produto.images[0]}
        alt={produto.title}
        
      />
      
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-1">
          {produto.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {produto.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            $ {produto.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}