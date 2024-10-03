const app =require('express')();
let {products}=require('./data')

app.get('/',(req,res)=>{
  res.send(`<h1>Home page</h1><a href="/api/products">products</a>`)
  
})



app.get('/api/products',(req,res)=>{
   const newproducts = products.map((product)=>{
    const {id,name,image}=product

    return {id,name,image};
   })

   res.json(newproducts )
})


app.get('/api/products/1',(req,res)=>{

  const newproducts =products.find((product)=>{

    if(product.id === 1){
      return {product}
    }
  })
  res.json(newproducts)
})




// but if more than 4 products we dont work with  aboue page; so we need the route params

app.get('/api/products/:productID',(req,res)=>{
  // console.log(req);
  // console.log(req.params);
   const {productID} =req.params;
  //  const singleproduct = products.find((product)=>{
  //   const id =product.id;
  //   if(id === productID){
  //     return {product}
  //   }
  //  })

    const singleproduct = products.find((product)=> product.id=== Number(productID));

    if(!singleproduct){
      return res.status(404).send(`<h1> product not found</h1>`)
    }

    return res.json(singleproduct);


})

app.get('/api/products/:productID/review/:reviewsId',(req,res)=>{
  console.log(req.params);
  res.send("hello world");
})



//query string parameter

app.get('/api/v1/query',(req,res)=>{
  const {search,limit} =req.query;

  let sortedproducts =[...products]

  if(search){
    sortedproducts =sortedproducts.filter((product)=> {
      return product.name.startsWith(search)
    })
  }

  if(limit){
    sortedproducts=sortedproducts.slice(0,Number(limit));
  }

  if(sortedproducts.length<1){
    // return res.status(200).send("products not found");
    return res.status(200).json({result:true , data:[]})
  }

  return res.status(200).json(sortedproducts);
})



app.listen(5000,()=>{
  console.log("server is loading .........");
})






