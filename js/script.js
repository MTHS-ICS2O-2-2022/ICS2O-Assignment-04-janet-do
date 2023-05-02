// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates the cost of groceries depending on quantity

"use strict"

function myButtonClicked() {
  const deductions = 0.13

  // Get the selected item and quantity values
  const selectedItem = document.getElementById("selected-item").value
  const quantity = parseInt(document.getElementById("quantity").value)

  // Create a dictionary to map grocery items to their prices source: https://blog.hubspot.com/website/javascript-dictionary
  const prices = {
    "Apple $0.50": 0.5,
    "Banana $0.25": 0.25,
    "Bread $2.00": 2.0,
    "Milk $1.50": 1.5,
  }

  // Calculate the total cost based on the selected item and quantity source: https://blog.hubspot.com/website/javascript-dictionary
  let totalCost = 0
  if (selectedItem in prices) {
    const itemPrice = prices[selectedItem]
    totalCost = itemPrice * quantity
  }

  // Display the total cost to the user
  document.getElementById("subTotal").innerHTML =
    "Sub total is: $" + totalCost.toFixed(2)
  const tax = totalCost * deductions
  const finalTotal = totalCost + tax
  document.getElementById("finalTotal").innerHTML =
    "Your final total is: $" + finalTotal.toFixed(2)
  document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
}
