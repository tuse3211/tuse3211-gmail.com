<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jay Mataji Store</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .header {
            background-color: #ff9900;
            padding: 15px;
            font-size: 24px;
            font-weight: bold;
        }
        .product-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 20px;
        }
        .product {
            border: 1px solid #ddd;
            margin: 10px;
            padding: 15px;
            width: 200px;
            text-align: center;
        }
        .cart {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #000;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="header">Jay Mataji Store</div>
    <div class="product-container">
        <div class="product">
            <h3>Product 1</h3>
            <p>Price: $10</p>
            <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
        </div>
        <div class="product">
            <h3>Product 2</h3>
            <p>Price: $20</p>
            <button onclick="addToCart('Product 2', 20)">Add to Cart</button>
        </div>
    </div>
    <div class="cart">
        <h2>Shopping Cart</h2>
        <ul id="cart-items"></ul>
        <p>Total: $<span id="total">0</span></p>
    </div>
    <script>
        let cart = [];
        function addToCart(name, price) {
            cart.push({ name, price });
            updateCart();
        }
        function updateCart() {
            let cartList = document.getElementById('cart-items');
            let totalElement = document.getElementById('total');
            cartList.innerHTML = '';
            let total = 0;
            cart.forEach(item => {
                let li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price}`;
                cartList.appendChild(li);
                total += item.price;
            });
            totalElement.textContent = total;
        }
    </script>
</body>
</html>
