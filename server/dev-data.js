const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const Product = require("./model/product");
const fs = require('fs');
//!Start Application
const DB = process.env.CONNECTION_STRING.replace("<password>", process.env.DB_PASSWORD);


mongoose.connect(DB, (err) => {
    // if (err) { return console.log(err); }


    const data = JSON.parse(fs.readFileSync('./testData.json'));

    async function importData() {
        try {
            await Product.create(data);
            console.log('Data created.');
        } catch (error) {
            console.log(error);
        }
        process.exit();
    }
    async function deleteData() {
        try {
            await Product.deleteMany();
            console.log('Datas deleted');

        } catch (error) {
            console.log(error);
        }
        process.exit();

    }

    if (process.argv[2] === 'import') {
        importData();
    } else if (process.argv[2] === 'delete') {
        deleteData();
    }
})
