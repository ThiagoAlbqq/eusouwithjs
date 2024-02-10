// Array of professions to display, each followed by a period
const professionsToDisplay = [
  "Programmer.",
  "Youtuber.",
  "Professor.",
  "Garbage Collector.",
];

// Get the heading element where the text will be displayed
const targetHeading = document.getElementById("var");

// Variables for tracking typing progress:
let currentCharacterIndex = 0; // Index of the character being typed within the current string
let isCurrentStringComplete = false; // Flag indicating if the current string has been fully typed
let currentProfessionIndex = 0; // Index of the current profession within the array

function startTyping() {
  // Check if there are more characters to type in the current profession:
  if (
    currentCharacterIndex < professionsToDisplay[currentProfessionIndex].length
  ) {
    // Append the next character to the heading:
    targetHeading.textContent +=
      professionsToDisplay[currentProfessionIndex][currentCharacterIndex];

    // Move to the next character:
    currentCharacterIndex++;

    // Schedule the next character to be typed after a 100ms delay:
    setTimeout(startTyping, 100);
  } else {
    // Mark the current string as complete:
    isCurrentStringComplete = true;

    // Schedule the removal of letters after a 500ms pause:
    setTimeout(removeLetter, 500);
  }
}

function removeLetter() {
  // Get the current text content of the heading:
  const currentText = targetHeading.textContent;

  // Check if there are still characters to remove:
  if (currentText.length > 0) {
    // Remove the last character:
    const updatedText = currentText.slice(0, -1);
    targetHeading.textContent = updatedText;

    // Schedule the next letter removal after a 200ms delay:
    setTimeout(removeLetter, 200);
  } else {
    // Reset flags for the next profession:
    isCurrentStringComplete = false;
    currentCharacterIndex = 0;
    currentProfessionIndex++;

    // Loop back to the first profession if we've reached the end of the array:
    if (currentProfessionIndex === professionsToDisplay.length) {
      currentProfessionIndex = 0;
    }

    // Schedule the typing of the next profession after a 500ms pause:
    setTimeout(startTyping, 500);
  }
}

// Begin the typing animation:
startTyping();
