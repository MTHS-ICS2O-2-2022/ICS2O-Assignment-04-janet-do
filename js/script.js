// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates the area of a triangle
"use strict"
function calculate() {
  // input
  const base = parseInt(document.getElementById("base").value)
  const height = parseInt(document.getElementById("height").value)

  // process
  const area = base * height / 2

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}
