
//connect?

/* const apiBase = "http://cross-course.local/"
const woocommerceBase = "wp-json/wc/store/"
const productsBase = "products"
 */



const jacketsContent = document.querySelector(".content-container");

const url = "http://cross-course.local/wp-json/wc/store/products";

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

async function getJackets() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        jacketsContent.innerHTML = "";

        for (let i = 0; i < data.length; i++) {

            console.log (data[i].images[0].thumbnail);

            jacketsContent.innerHTML += `<a href="details.html?id=${data[i].id}"> 
                                        <div class="item-jacket">


                                            <h2 class="name-jacket"> ${data[i].name}</h2> 
                                            <img class="listed-img" src="${data[i].images[0].thumbnail}" alt= "${data[i].images[0].alt}"/>
                                            <p>
                                            
                                            
                                            </a>`; 
                                                                          
        }

       
        //console.log (data.name[i])
    }

    catch (error) {
            console.log("OOOPSIE:/sjekk internettforbindelse!", error);
            jacketsContent.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
        }
    }

getJackets();





/* 
jacketsContent.innerHTML = `<div> <h2>Jacket name</h2


</div>`
console.log ("hello"); */