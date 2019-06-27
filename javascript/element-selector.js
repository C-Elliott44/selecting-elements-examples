function idSelector() {
    // Select the element and store it in a variable
    var el = document.getElementById('one');

    // Change the calue of the class attribute
    el.className = 'cool'
}

function classSelect() {
    // FInd hot elements
    var elements = document.getElementsByClassName('hot');

    // Check if there are 3 or more
    if (elements.length > 2) {
        // Select the third one from the NodeList
        var el = elements[2]; // or you could do elements.item(2)

        // Change the calue of its class arrtibute
        el.className = 'cool';
    }
}

function tagNameSelect() {
    // Find <li> elements
    elements = document.getElementsByTagName('li');

    // If 1 or more are found
    if (elements.length > 1) {
        // Select the first one using array syntax
        el = elements[0];

        // Change the value of the class attribute
        el.className = 'cool';
    }
}

function cssSelect() {
    // querySelector() only returns the first match
    var el = document.querySelector('li.hot');
    el.className = 'cool';

    // querySelectorAll retuns a NodeList
    // The second mathcing element (the third list item) is selected and changed
    var els = document.querySelectorAll('li.hot');
    els[1].className = 'cool';
}

function nodeListLoop() {
    // Find all li elements with class hot
    hotItems = document.querySelectorAll('li.hot');

    // Check that there is something in the variable el
    if (hotItems.length > 1) {
        // Loop through each item
        for (i = 0; i < hotItems.length; i++) {
            // Change class of all elements to cool
            hotItems[i].className = 'cool';
        }
    }
}

function replaceNodeText() {
    // Get second list item 
    var itemTwo = document.getElementById('two');

    // Get its text content
    var elText = itemTwo.firstChild.nodeValue;

    // Change pine nute to kale
    elText = elText.replace('pine nuts', 'kale');

    //Update the list item
    itemTwo.firstChild.nodeValue = elText;
}

function textAndMarkUp() {
    // Store the first list item in a variable
    var firstItem = document.getElementById('one');

    // Get the content of the first list item so it is a link
    var itemContent = firstItem.innerHTML;

    // Update the content of the first list item so it is a link
    firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';
}

function addElement() {
    // Create a new element and store it in a variable.
    var newEl = document.createElement('li');

    // Create a text node and store it in a variable
    var newText = document.createTextNode('quinoa');

    // Attach the new text node to the new element
    newEl.appendChild(newText);

    // Find the position where the new element should be added
    var position = document.getElementsByTagName('ul')[0];

    // Insert the new element into its position
    position.appendChild(newEl);
}

function removeElement() {
    // Get element that you wish to remove
    var removeEl = document.getElementsByTagName('li')[3];

    // Place parent in a variable
    var containerEl = removeEl.parentNode;

    // Remove the elemenet from the parent
    containerEl.removeChild(removeEl);
}