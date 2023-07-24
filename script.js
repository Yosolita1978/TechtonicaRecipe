const ingredientList = [
    "Olive Oil", "Onion","Garlic", "Green Onions", "Chicken Broth", "Chicken Bouillon", 
"Boneless  Chicken Breast", "Dried Guascas", "Cilantro", 
"Fresh Corn", "3 different types of Popatoes (Combination of Golden, Red and Russet)"];

function check(target, phrase) { // adds checkboxes
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', "checkbox")
    label.innerHTML = phrase;
    // label.style.textDecoration = "none";
    
    input.addEventListener('change', function () {
        if (this.checked) {
            label.style.textDecoration = "line-through";
        } 
        else {
            label.style.textDecoration = "none";
        }
    })

    target.appendChild(input);
    target.appendChild(label);
}

for (let i = 0; i < ingredientList.length; i++) {
    const li = document.createElement('li');
    check(li, ingredientList[i]);
    document.getElementById("Ingredients").appendChild(li);
}