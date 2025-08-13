// async function name1() {
//      const res = await fetch("https://api-e-commerace-in-node-js.onrender.com/product/all")
//      const result = await res.json();
//      console.log(result);
     

// }
// name1();



async function name1() {
    try {
        const res = await fetch("https://api-e-commerace-in-node-js.onrender.com/product/all");
        withCredential:true;

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        console.log(result); // Backend ka pura response
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

name1();
