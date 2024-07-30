/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryWise = [...transactions].reduce((pre,cur)=>{
    pre[cur.category] = pre[cur.category]+cur.price||cur.price
    return pre
},[])

const arrnew = []
Object.keys(categoryWise).forEach(function(key, index) {
    arrnew.push({category:`${key}`,totalSpent:categoryWise[key]})
  });

return arrnew;
}

module.exports = calculateTotalSpentByCategory;
