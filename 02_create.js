db.inventory.insertOne( { _id: 10, "item" : "packing peanuts", "qty" : 200 } );
db.inventory.insertOne( { _id: 11, "item" : "packing potatos", "qty" : 20 } );
db.inventory.insertOne( { _id: 12, "item" : "packing noodles", "qty" : 400 } );
db.inventory.insertOne( {"item" : "packing pizza", "qty" : 50 } );
db.inventory.insertOne( {"item" : "packing burger", "qty" : 20 } );

db.inventory.insertMany([
    {"item" : "Table", "qty" : 30, size: { h: 28, w: 32, uom: "cm" } },
    {"item" : "Chair", "qty" : 25, size: { h: 8, w: 6, uom: "cm" } },
    {"item" : "Laptop", "qty" : 45, size: { h: 22, w: 13, uom: "cm" } },
    {"item" : "MacBook", "qty" : 55, size: { h: 25, w: 24, uom: "cm" } }
]);

db.inventory.insertMany([
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);

