const http =require('http');

const {readFileSync} =require('fs')

const navhtml= readFileSync('./navbar-app/index.html');

const navcss= readFileSync('./navbar-app/styles.css');

const navsvg= readFileSync('./navbar-app/logo.svg');

const navjs= readFileSync('./navbar-app/browser-app.js');

 const server =http.createServer((req,res)=>{
  const url = req.url;

  if(url === '/'){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(navhtml);
    res.end();
  }
  else if(url === '/styles.css'){
    res.writeHead(200,{'content-type':'text/css'});
    res.write(navcss);
    res.end();
  }
  else if(url === '/logo.svg'){
    res.writeHead(200,{'content-type':'image/svg+xml'});
    res.write(navsvg);
    res.end();
  }

  else if(url === '/browser-app.js'){
    res.writeHead(200,{'content-type':'test/javascript'});
    res.write(navjs);
    res.end();
  }
  
  else{
    res.writeHead(404,{'content-type':'text/html'});
    res.write('<h1 style="font:large"> 404 error </h1>');
    res.end();
  }


 })

 server.listen(5000)