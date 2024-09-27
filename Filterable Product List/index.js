let productsContainer = document.getElementById("products");

let selectedCategory = 'all';
displayProducts();
function displayProducts() {
    productsContainer.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        // console.log(data[i]);
        if (data[i].category === selectedCategory || selectedCategory === 'all') {
            div.innerHTML = `<div class="card m-3 bg-light">
                <img src="no-image.jpg" alt="" class="card-img ">
                <div class="card-body p-2">
                    <div class="text-secondary ">Name: <span class="product-name font-bold font-md">`+ data[i].name + `</span>
                    </div>
                    <div class="text-secondary pt-1">Category: <span
                            class="product-category font-bold font-md">`+ data[i].category + `</span>
                    </div>
                    <div class="text-secondary pt-1">Price: <span class="product-price font-bold font-md">`+ data[i].price + `$</span>
                    </div>
                </div>
            </div>`;
            productsContainer.appendChild(div);

        }
    }
}


const allCategory = document.getElementById("All");
const electronicsCategory = document.getElementById("Electronics");
const clothingCategory = document.getElementById("Clothing");
const homeCategory = document.getElementById("Home Appliances");
const foodCategory = document.getElementById("Food & Beverages");
const healthCategory = document.getElementById("Health & Fitness");
const artCategory = document.getElementById("Art Supplies");
const musicalCategory = document.getElementById("Musical Instruments");


function changeVariableOnClick(id) {
    console.log('id =   ', id)
    if (id === 'Electronics') {
        selectedCategory = 'Electronics'
    } else if (id === 'Clothing') {
        selectedCategory = 'Clothing'
    } else if (id === 'Home Appliances') {
        selectedCategory = 'Home Appliances'
    } else if (id === 'Food & Beverages') {
        selectedCategory = 'Food & Beverages'
    } else if (id === 'Health & Fitness') {
        selectedCategory = 'Health & Fitness'
    } else if (id === 'Art Supplies') {
        selectedCategory = 'Art Supplies'
    } else if (id === 'Musical Instruments') {
        selectedCategory = 'Musical Instruments'
    } else if (id === 'All') {
        selectedCategory = 'all'
    } else {
        selectedCategory = 'all'
    }
    console.log('selectedCategory = ', selectedCategory)
    displayProducts()
    console.log('selectedCategory = ', selectedCategory)
}


allCategory.addEventListener('click', function () {
    changeVariableOnClick('All');
});
electronicsCategory.addEventListener('click', function () {
    changeVariableOnClick('Electronics');
});
clothingCategory.addEventListener('click', function () {
    changeVariableOnClick('Clothing');
});
homeCategory.addEventListener('click', function () {
    changeVariableOnClick('Home Appliances');
});
foodCategory.addEventListener('click', function () {
    changeVariableOnClick('Food & Beverages');
});
healthCategory.addEventListener('click', function () {
    changeVariableOnClick('Health & Fitness');
});
artCategory.addEventListener('click', function () {
    changeVariableOnClick('Art Supplies');
});
musicalCategory.addEventListener('click', function () {
    changeVariableOnClick('Musical Instruments');
});