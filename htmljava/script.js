async function name1(params) {
     const res = await fetch("https://api-e-commerace-in-node-js.onrender.com/poduct/all")
     const result = await res.json();
     console.log(result);
     

}
name1();