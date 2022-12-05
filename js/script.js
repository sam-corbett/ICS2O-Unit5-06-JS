// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-JS/sw.js", {
    scope: "/ICS2O-Unit5-06-JS/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var numA = parseFloat(document.getElementById("variable1").value)
  var numB = parseFloat(document.getElementById("variable2").value)
  var product = 0
  var counter = 0

  while (counter < Math.abs(numB)) {
    counter++
    product = product + Math.abs(numA)
  }

  if ((numA < 0 && numB > 0) || (numB < 0 && numA > 0))
    document.getElementById("product-of-variables").innerHTML =
      "Both numbers multiply to -" + product + "."
  else
    document.getElementById("product-of-variables").innerHTML =
      "Both numbers multiply to " + product + "."
}
