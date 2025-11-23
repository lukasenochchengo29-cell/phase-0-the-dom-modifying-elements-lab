// Write your code here
// Remove the <main> element with id="main"
const main = document.getElementById('main');
main.remove();

// Create the new <h1> element
const newHeader = document.createElement('h1');

// Give it the required id
newHeader.id = 'victory';

// Add the required text (replace YOUR-NAME with your actual name)
newHeader.textContent = "Lukas is the champion";

// Append it to the document
document.body.append(newHeader);


