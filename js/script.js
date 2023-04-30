// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates the cost of groceries depending on quantity

"use strict"

function myButtonClicked() {
  const deductions = 0.13
  // input
  const item = parseInt(document.getElementById("item").value)
  const quantity = parseInt(document.getElementById("quantity").value)

  // process
  const subTotal = item * quantity
  const tax = item * quantity * deductions
  const finalTotal = subTotal + tax

  // output
  document.getElementById("subTotal").innerHTML =
    "Sub total is:" + subTotal.toFixed(2)
  document.getElementById("finalTotal").innerHTML =
    "Your final total is:" + finalTotal.toFixed(2)
  document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
}
