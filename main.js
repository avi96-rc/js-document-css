const portfolio = [
  { name: "mark", stock: "FB" },
  { name: "mark", stock: "FB" },
  { name: "steve", stock: "AAPL" },
  { name: "tim", stock: "AAPL" },
  { name: "steve", stock: "MSFT" },
  { name: "bill", stock: "MSFT" },
  { name: "bill", stock: "AAPL" },
];


// shareholder = [{ stock: "aple", name: ["steve", "tim", "bill"], count: 3 }];




const stockList = [{ ...portfolio[0], count: 1 }];
for (let index = 1; index < portfolio.length; index++) {
  for (let i = 0; i < stockList.length; i++) {
    // console.log(portfolio[index].stock)
    if (portfolio[index].stock === stockList[i].stock) {
      console.log("true");
      stockList[i].count += 1;
      break;
    }else{
      
    }
  }
}



console.log(stockList)