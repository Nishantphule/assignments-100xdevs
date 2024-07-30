const arr = [{
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
},{
    id: 2,
    timestamp: 1656076800000,
    price: 15,
    category: 'Food',
    itemName: 'Pasta',
},{
    id: 3,
    timestamp: 1656076800000,
    price: 20,
    category: 'Lunch',
    itemName: 'Pizza',
},
{
    id: 4,
    timestamp: 1656076800000,
    price: 25,
    category: 'Lunch',
    itemName: 'Pizza',
},{
    id: 5,
    timestamp: 1656076800000,
    price: 30,
    category: 'dinner',
    itemName: 'Pasta',
},{
    id: 6,
    timestamp: 1656076800000,
    price: 40,
    category: 'dinner',
    itemName: 'Pizza',
}]
// { category: 'Food', totalSpent: 10 }
const newObj = [...arr].reduce((pre,cur)=>{
    const obj = {}
    pre[cur.category] = pre[cur.category]+cur.price||cur.price
    return pre
},[])

const arrnew = []
Object.keys(newObj).forEach(function(key, index) {
    arrnew.push({category:`${key}`,totalSpent:newObj[key]})
  });

console.log(arrnew);