// Dados de Exemplo (simulando uma lista de produtos)
const products = [
    { id: 1, name: "Mini Ventilador Portátil USB", price: 50.00, oldPrice: 100.00, sold: "5k", image: "placeholder.png" },
    { id: 2, name: "Fone de Ouvido Sem Fio Bluetooth 5.0", price: 85.50, oldPrice: 120.00, sold: "2.1k", image: "placeholder.png" },
    { id: 3, name: "Capa de Celular Anti-Impacto", price: 15.90, oldPrice: 25.00, sold: "10k", image: "placeholder.png" },
    { id: 4, name: "Kit Pincéis de Maquiagem Profissional 12pç", price: 45.00, oldPrice: 90.00, sold: "7.8k", image: "placeholder.png" },
    { id: 5, name: "Smartwatch Fitness Tracker", price: 150.00, oldPrice: 250.00, sold: "1.5k", image: "placeholder.png" },
    // Adicione mais produtos conforme necessário...
];

const productList = document.getElementById('product-list');
const cartCountElement = document.getElementById('cart-count');
let cartCount = 0;

// Função para renderizar os produtos na tela
function renderProducts() {
    productList.innerHTML = ''; // Limpa o conteúdo atual

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Formata os preços para BRL
        const currentPriceFormatted = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const oldPriceFormatted = product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <p class="name">${product.name}</p>
                <div class="price-section">
                    <span class="old-price">${oldPriceFormatted}</span>
                    <span class="current-price">${currentPriceFormatted}</span>
                </div>
                <div class="footer-card">
                    <span class="sold-count">${product.sold} vendidos</span>
                    <button class="add-to-cart-btn" data-id="${product.id}">Comprar</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });

    // Adiciona o evento de clique aos botões de compra após a renderização
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Função para simular a adição de um item ao carrinho
function addToCart(event) {
    const productId = event.target.dataset.id;
    const product = products.find(p => p.id == productId);

    if (product) {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert(`"${product.name}" adicionado ao carrinho! Total: ${cartCount} itens.`);
    }
}

// Inicializa a renderização dos produtos ao carregar a página
document.addEventListener('DOMContentLoaded', renderProducts);