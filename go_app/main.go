// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This program calculates the total cost of a grocery bill
package main

import (
	"fmt"
	"strconv"
)

func main() {
	const deductions = 0.13

	// Create a map to map grocery items to their prices
	prices := map[string]float64{
		"apple":  0.5,
		"banana": 0.25,
		"bread":  2.0,
		"milk":   1.5,
	}

	// Get the selected item and quantity values
	var selectedItem string
	fmt.Print("Enter grocery item out of apple, banana, bread and milk: ")
	fmt.Scanln(&selectedItem)
	fmt.Print("Enter quantity: ")
	var quantityStr string
	fmt.Scanln(&quantityStr)
	quantity, err := strconv.Atoi(quantityStr)
	if err != nil {
		fmt.Println("Invalid quantity.")
		return
	}

	// Calculate the total cost based on the selected item and quantity
	itemPrice, exists := prices[selectedItem]
	if !exists {
		fmt.Println("Item not found.")
		return
	}
	totalCost := itemPrice * float64(quantity)

	// Display the total cost to the user
	fmt.Println()
	fmt.Printf("Sub total is: $%.2f\n", totalCost)
	tax := totalCost * deductions
	finalTotal := totalCost + tax
	fmt.Printf("Your final total is: $%.2f\n", finalTotal)
	fmt.Printf("Tax: $%.2f\n", tax)
}
