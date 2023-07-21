### Orders
En el siguiente json se encuetra es schema que es utilizado en la collecion de Orders
```json
{
   _id: ObjectId,
   orderNumber: string,
   customerId: ObjectId, // referencia a la collecion de customers
   status: string,
   paymentStatus: string,
   paymentMethod: string,
   shippingAddress: string,
   shippingMethod: string,
   items: [
      {
         productId: ObjectId, // referencia a la collecion de Products 
         name: string,
         quantity: number,
         price: number
      }
   ],
   createdAt: Date,
   updatedAt: Date
}
``` 

### Reviews
En el siguiente json se encuentra un schema que es utilizadoo en la coleccion de Reviews
```json
{
   _id: ObjectId,
   productId: ObjectId, // referencia a la collecion de Products 
   customerId: ObjectId, // referencia a la collecion de customers
   rating: number,
   comment: string,
   createdAt: Date
}
```
### Sellers
En el siguiente json se encuentra un schema que es utilizado en la coleccion de Sellers

```json
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  identification: {
    type: string, // can be "person", "brand", or "company"
    rut: string // e.g., RUT in Chile
  },
  address: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
  },
  paymentDetails: {
    paymentMethods: [{
      type: string, // e.g., "credit card", "bank transfer", etc.
      description: string,
      data: {
        name: string,   
        rut: string,
        bankName: string,
        typeAccount: string,
        accountNumber: number,
        email: string
      }
    }],
  },
  createdAt: Date,
  updatedAt: Date
}

```

### Customers
En el siguiente json se encuentra un schema el que es utilizado en la coleccion de Customers 

```json
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  paymentMethods: [{
    type: string, // e.g., "credit card", "bank transfer", etc.
    description: string,
    data: {
      // payment method specific data, e.g., credit card number, bank account details, etc.
    }
  }],
  shippingAddress: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
  },
  billingAddress: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
  },
  createdAt: Date,
  updatedAt: Date
}

```

### Products
En el siguiente json se encuentra un schema el que es utilizado en la coleccion de Products

```json
{
    _id: ObjectId,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    Manufacturer: string,
    brand: string,
    seller: string,
    stock: number, 
    tags: [string],
    reviews: [string]  
}
```

### Stadistic 
En el siguiente json se encuentra un schema el que es utilizado en la coleccion de Stadistic

```json 
{
  _id: ObjectId,
  seller_id: string,
  year: integer,
  month: integer,
  total_sales: decimal,
  total_items_sold: integer,
  top_selling_items: [
    {
      product_id: string,
      product_name: string,
      quantity_sold: integer,
      revenue_generated: decimal
    }
  ],
  sales_by_category: [
    {
      category_name: string,
      total_sales: decimal,
      total_items_sold: integer
    }
  ]
}

```