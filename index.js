const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const datas = [
  {
    name: "sawi",
    satuan: "200gr",
    price: "9000",
  },
  {
    name: "wortel",
    satuan: "500gr",
    price: "7000",
  },
  {
    name: "bawang merah",
    satuan: "200gr",
    price: "12000",
  },
  {
    name: "tomat",
    satuan: "1kg",
    price: "20000",
  },
  {
    name: "brokoli",
    satuan: "500gr",
    price: "15000",
  },
  {
    name: "anggur",
    satuan: "250gr",
    price: "22000",
  },
  {
    name: "semangka",
    satuan: "1pcs",
    price: "40000",
  },
  {
    name: "apel",
    satuan: "500gr",
    price: "7000",
  },
  {
    name: "jeruk",
    satuan: "200gr",
    price: "9000",
  },
  {
    name: "pisang",
    satuan: "1pcs",
    price: "40000",
  },
  {
    name: "mangga",
    satuan: "500gr",
    price: "7000",
  },
];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json.
app.use(bodyParser.json());

app.get("/api/products", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Data fetched successful!",
    data: datas,
  });
});

app.post("/api/products", (req, res) => {
  const {name, satuan, price} = req.body;
  res.status(200).json({
    success: true,
    message: "successful!",
    data: 
      {
        name: name,
        satuan: satuan,
        price: price
      } 
  });
});

// rest API order

app.post('/api/order', (req, res) => {
    const { name, adress, province, city, district, postalcode, phone, email, product, total, unit } = req.body;
    res.status(201).json({
        messege: "create data successfully",
        data: 
            {
                name: name,
                adress: adress,
                province: province,
                city: city,
                district: district,
                postalcode: postalcode,
                phone: phone,
                email: email,
                product: product,
                total: total,
                unit: unit
            }
    })
})

app.get('/api/order', (req, res) => {
    res.status(200).json({
        messege: 'get success data all customers',
        data:
        {
            name: 'Rahul',
            adress: 'jl.bunga1',
            province: 'kalimantan barat',
            city: 'Palangkaraya',
            district: 'jekan raya',
            postalcode: '73111',
            phone: '0821222133',
            email: 'rahul@gmail.com',
            product: 'brokoli',
            total: '2',
            unit: 'kg'
        }
    })
})



const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}!`));