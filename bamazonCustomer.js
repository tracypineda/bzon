var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var colors = require("colors");
var chalk = require("chalk");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    // Your password
    password: "Saludesvida2019!",
    database: "bamazon_db"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    showInventory();
});

function showInventory() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        promptCustomer();
    });

}
function promptCustomer() {
    inquirer.prompt([
        {
            type: "input",
            name: "choice",
            message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
            validate: function (val) {
                if (val.toLowerCase() === 'q') {
                    console.log(chalk.magenta.bold("\n\n Thank you for shopping at Bamazon !! \n"));
                    //Close Connection 
                    connection.end();
                    //exits the app 
                    process.exit();
                }
                else if (isNaN(val) || parseInt(val) <= 0 || val === '') {
                    console.log(chalk.redBright("Please provide a valid item_id number \n"));
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "purchase_quantity",
            message: "How many would you like to purchase? [Quit with Q]",
            validate: function (val) {
                if (val.toLowerCase() === 'q') {
                    console.log(chalk.magenta.bold("\n\n Thank you for shopping at Bamazon !! \n"));
                    //Close Connection 
                    connection.end();
                    //exits the app 
                    process.exit();
                }
                else if (isNaN(val) || parseInt(val) <= 0 || val === '') {
                    console.log(chalk.redBright("Please provide a valid quantity! \n"));
                    return false;
                }
                else {
                    return true;
                }
            }
        },
    ]).then(function (input) {
        var quantity = input.purchase_quantity;
        // var item = res[0].item_id;


        connection.query("SELECT * FROM products WHERE item_id=? ;", [input.choice], function (err, res) {
            //throw error 
            if (err) throw chalk.red.bold(err);

            if (res.length === 0) {
                console.log("Error: Invalid Item ID. Please select a valid item ID.");
                showInventory();
            } else {
                var productData = res[0];
                console.log(productData.item_id);

                if (quantity <= productData.stock_quantity) {
                    console.log("Congratulations, the product you requested is in stock! Placing order!");

                    var updateQuery = ("UPDATE products SET stock_quantity= ") + (productData.stock_quantity - quantity) + " WHERE item_id= " + productData.item_id;

                    connection.query(updateQuery, function (err, res) {
                        if (err) throw err;

                        console.log("Your order has been place! Your total is $" + productData.price * quantity);
                        console.log("Thank you for shopping with us!");
                        console.log("\n---------------------------------\n");
//recursive loop
                        showInventory();
                        console.log("Would you like to make another purchase?");

                    })
                } else {
                    console.log("Sorry, there is not enough product in stock, your order can't be placed.");
                    console.log("Please modify the quantity.");
                    console.log("\n-----------------------------------------------\n");
                    showInventory();
                }
            }
        })
    })
}

