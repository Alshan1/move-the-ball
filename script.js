const bug = document.getElementById('bug');
const container = document.querySelector('.container');

// Get dimensions of the bug and container
const bugRect = bug.getBoundingClientRect();
const containerRect = container.getBoundingClientRect();

// Calculate maximum positions within the container
const maxTop = containerRect.top;
const maxBottom = containerRect.bottom - bugRect.height;
const maxLeft = containerRect.left;
const maxRight = containerRect.right - bugRect.width;

// Initial positions of the bug
let bugTop = maxTop + (container.clientHeight - bugRect.height) / 2;
let bugLeft = maxLeft + (container.clientWidth - bugRect.width) / 2;

// Movement step size
const stepSize = 20; // Adjust this value to increase or decrease speed

// Function to update bug's position
function updateBugPosition() {
    bug.style.top = `${bugTop}px`;
    bug.style.left = `${bugLeft}px`;
}

// Event listener for 'Up' button
document.getElementById('up').addEventListener('click', () => {
    bugTop -= stepSize; // Move bug up
    if (bugTop < maxTop) bugTop = maxTop; // Ensure bug doesn't move above container
    updateBugPosition();
});

// Event listener for 'Down' button
document.getElementById('down').addEventListener('click', () => {
    bugTop += stepSize; // Move bug down
    if (bugTop > maxBottom) bugTop = maxBottom; // Ensure bug doesn't move below container
    updateBugPosition();
});

// Event listener for 'Left' button
document.getElementById('left').addEventListener('click', () => {
    bugLeft -= stepSize; // Move bug left
    if (bugLeft < maxLeft) bugLeft = maxLeft; // Ensure bug doesn't move left of container
    updateBugPosition();
});

// Event listener for 'Right' button
document.getElementById('right').addEventListener('click', () => {
    bugLeft += stepSize; // Move bug right
    if (bugLeft > maxRight) bugLeft = maxRight; // Ensure bug doesn't move right of container
    updateBugPosition();
});

// Initialize bug position
updateBugPosition();
