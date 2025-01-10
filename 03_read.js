db.inventory.find() // Fetch all documents
db.inventory.find({}) // Fetch all documents
db.inventory.find({ qty: 30 }) // Fetch with specific requirements

db.inventory.find({
  "size.h": { $in: [8, 28] }
})

db.inventory.find( { status: { $in: [ "A", "B" ] } } )

// AND
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// OR
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

db.inventory.findOne( { $or: [ { status: "D" }, { qty: { $lt: 30 } } ] } )
