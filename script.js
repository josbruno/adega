const produtos = [
    {
        nome: "Ballena Morango com Tequila - 750ml",
        descricao: "Licor sabor morango com tequila, ideal para festas e drinks tropicais.",
        preco: "R$ 114,99",
        imagem: "<img src='img/morango.png'>",
        
    },
    {
        nome: "Ballena Licor Chocolate e Caramelo - 750ml",
        descricao: "Combinação doce e marcante de chocolate com caramelo.",
        preco: "R$ 114,99",
        imagem: "<img src='img/chocolate.png'>",
        
    },
    {
        nome: "Ballena Licor de Coco com Tequila - 750ml",
        descricao: "Licor cremoso com sabor intenso de coco e toque de tequila.",
        preco: "R$ 114,99",
        imagem: "<img src='img/coco.png'>",
    },
    {
        nome: "Kit Ballena 3 Garrafas - 750ml cada",
        descricao: "Inclui Morango, Chocolate com Caramelo e Coco com Tequila + Copo 3x99.",
        preco: "R$ 499,99",
        imagem: "<img src='img/kit3.png'>",
        
    },
    {
        nome: "Kit Ballena Morango - 6 Unidades 750ml",
        descricao: "Kit com 6 garrafas de Morango com Tequila para estocar ou presentear.",
        preco: "R$ 899,00",
        imagem: "<img src='img/kit-morango.png'>",
        
    },
    {
        nome: "Kit Ballena Coco - 6 Unidades 750ml",
        descricao: "Kit com 6 garrafas de Coco com Tequila, ideal para festas.",
        preco: "R$ 899,00",
        imagem: "<img src='img/kit-coco.png'>",
        
    },
    {
        nome: "Kit Ballena Chocolate e Caramelo - 6 Unidades 750ml",
        descricao: "Para quem ama doce! 6 unidades de puro sabor.",
        preco: "R$ 899,00",
        imagem: "<img src='img/kit-chocolate.png'>",
       
    }
];

// Função para exibir os dados
function mostrarProduto(index) {
    const p = produtos[index];
    document.getElementById("imagem").innerHTML = p.imagem;
    document.getElementById("nome").innerHTML = `<strong>Nome:</strong> ${p.nome}`;
    document.getElementById("descricao").innerHTML = `<strong>Descrição:</strong> ${p.descricao}`;
    document.getElementById("preco").innerHTML = `<strong>Preço:</strong> ${p.preco}`;
}
