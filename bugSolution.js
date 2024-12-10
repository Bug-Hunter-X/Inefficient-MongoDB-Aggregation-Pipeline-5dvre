```javascript
//Efficient aggregation pipeline with error handling and indexing
db.collection.createIndex( { fieldName: 1 } );
try {
db.collection.aggregate([
  {
    $match: { /* some condition */ }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10
  }
]).toArray((err, result) => {
  if (err) {
    console.error("Aggregation failed:", err);
  } else {
    console.log(result);
  }
});
} catch (error) {
  console.error('An error occurred:', error)
}
```