import { Link } from "react-router";
import type {TipoProdutoAll } from "../../types/types";

export default function ProdutoCard({produto, onDelete}:TipoProdutoAll) {
  return (
    <div className="border-2 p-2 mx-5">
        <h2>Nome do Produto:{produto.nome}</h2>
        <p>R$ {produto.preco} </p>
        <figure>
            <img src={produto.avatar} alt={produto.nome} width={40}/>
            <figcaption>Quantidade disponível do produto:{produto.estoque}</figcaption>
        </figure>
        <Link to={`/editar-produtos/${produto.id}`}>Editar</Link> | <button onClick={()=> onDelete(String(produto.id))}>Excluir</button>
    </div>
  )
}



// export default function ProdutoCard({nome,preco,estoque,avatar}:{nome:string,preco:number,estoque:number,avatar:string}) {
//   return (
//     <div className="border-2 p-2 mx-5">
//         <h2>Nome do Produto:{nome}</h2>
//         <p>R$ {preco} </p>
//         <figure>
//             <img src={avatar} alt={nome} width={40}/>
//             <figcaption>Quantidade disponível do produto:{estoque}</figcaption>
//         </figure>
//         AÇÕES
//     </div>
//   )
// }
