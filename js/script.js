const productsCont = document.querySelector(".products");

const products = [
    {
        id: "123456789",
        title: "Red T-Shirt",
        image: "images/red.png",
        priceBeforeSale: 150,
        priceAfterSale: 120,
        amount: 1,
    },
    {
        id: "456789123",
        title: "Black T-Shirt",
        image: "images/black.png",
        priceBeforeSale: 180,
        priceAfterSale: 130,
        amount: 1,
    },
    {
        id: "789123456",
        title: "Blue T-Shirt",
        image: "images/blue.png",
        priceBeforeSale: 200,
        priceAfterSale: 160,
        amount: 1,
    },
];
function showData() {
    if (products != "") {
        for (i = 0; i <= products.length; i++) {
            productsCont.innerHTML += `
                <div class="product btn-${i}" id="${products[i].id}">
                    <div class="left">
                        <div class"image">
                            <img src="${products[i].image}">
                        </div>
                        <div class="text">
                            <h2>${products[i].title}</h2>
                            <div class="price">
                                <span class="priceAfterSale">${products[i].priceAfterSale}</span>
                                <span class="priceBeforeSale">${products[i].priceBeforeSale}</span>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="remove-btn">
                            <button data-del="btn-${i}">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="18" stroke="#33363F" stroke-width="2"/>
                                <path d="M18.0002 29.9993L30.0002 17.9993" stroke="#33363F" stroke-width="2"/>
                                <path d="M30 30L18 18" stroke="#33363F" stroke-width="2"/>
                                </svg>
                            </button>
                        </div>
                        <div class="amount">
                            <button class="sub">-</button>
                            <div class="num">${products[i].amount}</div>
                            <button class="add">+</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

showData();
