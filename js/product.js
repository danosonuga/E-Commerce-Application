const product_list = document.querySelector(".product-list");
const LIMIT = 12

function populateData(api_data){
    let card = ""
    for(const data of api_data){
        card += `
            <div class="card">
                <div class="card-header">
                    <div>
                        <img src="${data.image}" alt="">
                    </div>
                    <span>
                        <h3>${data.title}</h3>
                        <p>${data.description.slice(0, 75)}...</p>
                    </span>
                </div>
                <div class="card-footer">
                    <div class="d-flex">
                        <p>&#8358; ${Math.round(data.price * 750)}</p>
                        <p>Ratings: ${data.rating.rate}</p>
                    </div>
                    <button class="primary-button btn-block add-to-cart">Add to cart</button>
                </div>
            </div>`;
    };
    document.querySelector(".row").innerHTML = card;
};

// document.querySelector(".add-to-cart").addEventListener("click", () => {
//     cart += 1;
//     localStorage.setItem("cart", cart);
// });

async function fetchApi(){
    let data = await fetch(`https://fakestoreapi.com/products?limit=${LIMIT}`);
    let api_data = await data.json();
    populateData(api_data);
};

fetchApi();