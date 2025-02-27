import "../styles/produtos.css";
import Card from "../components/Card";

const Produtos = () => {
  return (
    <>
      <h1>Pizzas:</h1>
      <div className="cards">
        <Card
          imagem={
            "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1932-5a1b7911dfda6e3c351c30de564da267.jpg"
          }
          nomeProduto={"Mozzarella Pizza"}
          descricaoProduto={"Mozzarella cheese pizza"}
          preco={"30,00"}
        />
        <Card
          imagem={
            "https://pilotandofogao.com.br/wp-content/uploads/2016/05/Pizza-De-Calabresa.jpg"
          }
          nomeProduto={"Pepperoni pizza"}
          descricaoProduto={"Smoked Calabrian sausage pizza"}
          preco={"28,00"}
        />

        <Card
          imagem={
            "https://img.freepik.com/fotos-premium/pizza-brasileira-com-queijo-mussarela-e-manjericao_206895-2005.jpg"
          }
          nomeProduto={"Basil Pizza"}
          descricaoProduto={"Basil margherita pizza"}
          preco={"42,00"}
        />
      </div>
      <div className="cards">
        <Card
          imagem={
            "data:image/jpeg;base64,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"
          }
          nomeProduto={"Baiana Pizza"}
          descricaoProduto={"Bahian pizza with Calabrese sausage, mozzarella cheese, onion and pepper"}
          preco={"32,00"}
        />
        <Card
          imagem={
            "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-chocolate-730x449.jpg"
          }
          nomeProduto={"Chocolate pizza"}
          descricaoProduto={"Strawberry chocolate pizza"}
          preco={"50,00"}
        />
      </div>
      <h1>Cold Drinks:</h1>
      <div className="cards">
        <Card
          imagem={
            "http://www.banca43.com.br/cdn/imagens/produtos/det/117939.jpg"
          }
          nomeProduto={"Coca-Cola"}
          descricaoProduto={"Coca-Cola 350ml"}
          preco={"10,00"}
        />
        <Card
          imagem={
            "http://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/fanta-3501-f2e0836be024d42fc915698485225379-640-0.png"
          }
          nomeProduto={"Fanta Orange"}
          descricaoProduto={"Fanta Orange 350ml"}
          preco={"9,00"}
        />
        <Card
          imagem={
            "http://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/fanta-uva-3501-012134716f394f6f1a15698487625514-640-0.png"
          }
          nomeProduto={"Fanta Grape"}
          descricaoProduto={"Fanta Grape 350ml"}
          preco={"8,00"}
        />
      </div>
    </>
  );
};

export default Produtos;

