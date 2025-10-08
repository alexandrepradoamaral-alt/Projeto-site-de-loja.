const cartCountElement = document.getElementById('cart-count');
// Tenta ler o valor do carrinho do Local Storage, se não existir, usa 0
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// Função para atualizar o contador do carrinho na tela
function updateCartCount() {
    cartCountElement.textContent = cartCount;
    // Salva o novo valor no Local Storage
    localStorage.setItem('cartCount', cartCount);
}

// Função para simular a adição de um item ao carrinho
function addToCart(event) {
    // 1. Pega o ID do produto no botão clicado
    const productId = event.target.dataset.id;
    
    // 2. Pega o elemento pai (o product-card) para pegar o nome
    const productCard = event.target.closest('.product-card');
    const productName = productCard ? productCard.dataset.name : `Produto ID ${productId}`;
    
    // 3. Atualiza o contador
    cartCount++;
    updateCartCount();

    // 4. Feedback visual (simulação)
    alert(`"${productName}" adicionado ao carrinho! Total: ${cartCount} itens.`);
}

// Inicializa a exibição do contador ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Adiciona o evento de clique a TODOS os botões de compra na página
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});