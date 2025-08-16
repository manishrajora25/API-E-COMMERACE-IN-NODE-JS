// const main = document.querySelector("#showdata");

// async function name1() {
//     try {
//         const res = await fetch("https://api-e-commerace-in-node-js.onrender.com/product/all", {
//             credentials: "include"
//         });

//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }

//         const products = await res.json();
//         console.log(products);

//         // Show products
//         main.innerHTML = ""; // clear old data
//         products.forEach(product => {
//             const box = document.createElement("div");
//             box.style.border = "1px solid #ccc";
//             box.style.padding = "10px";
//             box.style.margin = "10px";
//             box.style.width = "200px";
           

//             const img = document.createElement("img");
//             img.src = product.image;
//             img.alt = product.name;
//             img.style.width = "100%";

//             const title = document.createElement("h3");
//             title.textContent = product.name;

//             const price = document.createElement("p");
//             price.textContent = `₹ ${product.discountedPrice}`;

//             box.appendChild(img);
//             box.appendChild(title);
//             box.appendChild(price);

//             main.appendChild(box);
//         });

//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }
// }

// name1();