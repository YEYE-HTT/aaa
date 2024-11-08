// 产品数据
const products = [
    { name: "Small box1", image: "1.jpg", description: "这是商品1的详细描述。", price: "$100" },
    { name: "Small box2", image: "2.jpg", description: "这是商品2的详细描述。", price: "$150" },
    { name: "Small box3", image: "3.jpg", description: "这是商品3的详细描述。", price: "$200" },
    { name: "Small box4", image: "4.jpg", description: "这是商品4的详细描述。", price: "$400" },
    { name: "Small box5", image: "1.jpg", description: "这是商品5的详细描述。", price: "$200" },
    { name: "Small box6", image: "2.jpg", description: "这是商品6的详细描述。", price: "$400" },
    { name: "Small box3", image: "3.jpg", description: "这是商品3的详细描述。", price: "$200" },
    { name: "Small box4", image: "4.jpg", description: "这是商品4的详细描述。", price: "$400" },
    { name: "Small box5", image: "1.jpg", description: "这是商品5的详细描述。", price: "$200" },
    { name: "Small box6", image: "2.jpg", description: "这是商品6的详细描述。", price: "$400" },
    { name: "Small box3", image: "3.jpg", description: "这是商品3的详细描述。", price: "$200" },
    { name: "Small box4", image: "4.jpg", description: "这是商品4的详细描述。", price: "$400" },
    { name: "Small box5", image: "1.jpg", description: "这是商品5的详细描述。", price: "$200" },
    { name: "Small box6", image: "2.jpg", description: "这是商品6的详细描述。", price: "$400" },
    { name: "Small box3", image: "3.jpg", description: "这是商品3的详细描述。", price: "$200" },
    { name: "Small box4", image: "4.jpg", description: "这是商品4的详细描述。", price: "$400" },

    // 添加更多产品项
];

// 获取产品容器
const productContainer = document.getElementById('product-grid');

const maxProductsToShow = 20;
// 动态生成产品展示的HTML
products.slice(0, maxProductsToShow).forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-price">${product.price}</p>
        <p class="product-description">${product.description}</p>
        <button class="product-button">Add to Cart</button>
    `;

    productContainer.appendChild(productItem);
});

