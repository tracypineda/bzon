# bamazon!

## Welcome to Bamazon! This is an Amazon-like storefront built with MySQL and Node.js. 

Within the customer portal, you can view the inventory, choose an item you'd like to purchase
along with the quantity, and voila! Transaction complete! However, if we do not have enough 
of the selected item in stock deeming us unable to fulfill your purchase, the transaction 
will not go through.

Happy shopping!

# Video Demo of Working APP

Link to [WORKING_APP]()

# What the javascript does

1. `bamazonCustomer.js`
- Prints products to the store in a table.
- Prompts customer which product they would like to purchase by ID number.
- Asks for the quantity.

  - If there is a sufficient amount of the product in stock, it will return the total for that purchase.
  - However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
  - If the purchase goes through, it updates the stock quantity to reflect the purchase.
  - It will also update the product sales in the department table.
    newline\

# Built with:

- Node.js
- Javascript

# Contributers
- Tracy Pineda

