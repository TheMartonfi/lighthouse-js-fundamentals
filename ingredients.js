const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0
while (i <= ingredients.length - 1) {
  console.log(ingredients[i])
  i++
}

// Write a for loop that prints out the contents of ingredients:
for (let x = 0; x <= ingredients.length - 1; x++) {
  console.log(ingredients[x]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let r = ingredients.length - 1; r >= 0; r--) {
  console.log(ingredients[r]);
}