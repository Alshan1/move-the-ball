// const bug = document.getElementById('bug');
// const container = document.querySelector('.container');

// // Function to update dimensions dynamically
// function updateDimensions() {
//     // Get dimensions of the bug and container
//     const bugRect = bug.getBoundingClientRect();
//     const containerRect = container.getBoundingClientRect();

//     // Calculate maximum positions within the container
//     maxTop = containerRect.top;
//     maxBottom = containerRect.bottom - bugRect.height;
//     maxLeft = containerRect.left;
//     maxRight = containerRect.right - bugRect.width;

//     // Initial positions of the bug
//     bugTop = maxTop + (container.clientHeight - bugRect.height) / 2;
//     bugLeft = maxLeft + (container.clientWidth - bugRect.width) / 2;

//     // Initialize bug position
//     updateBugPosition();
// }

// // Function to update bug's position
// function updateBugPosition() {
//     bug.style.top = `${bugTop}px`;
//     bug.style.left = `${bugLeft}px`;
// }

// // Movement step size
// let stepSize = 50; // Adjust this value to increase or decrease speed

// // Event listener for 'Up' button
// document.getElementById('up').addEventListener('click', () => {
//     bugTop -= stepSize; // Move bug up
//     if (bugTop < maxTop) bugTop = maxTop; // Ensure bug doesn't move above container
//     updateBugPosition();
// });

// // Event listener for 'Down' button
// document.getElementById('down').addEventListener('click', () => {
//     bugTop += stepSize; // Move bug down
//     if (bugTop > maxBottom) bugTop = maxBottom; // Ensure bug doesn't move below container
//     updateBugPosition();
// });

// // Event listener for 'Left' button
// document.getElementById('left').addEventListener('click', () => {
//     bugLeft -= stepSize; // Move bug left
//     if (bugLeft < maxLeft) bugLeft = maxLeft; // Ensure bug doesn't move left of container
//     updateBugPosition();
// });

// // Event listener for 'Right' button
// document.getElementById('right').addEventListener('click', () => {
//     bugLeft += stepSize; // Move bug right
//     if (bugLeft > maxRight) bugLeft = maxRight; // Ensure bug doesn't move right of container
//     updateBugPosition();
// });

// // Update step size based on viewport width
// function updateStepSize() {
//     stepSize = Math.min(window.innerWidth, window.innerHeight) / 10; // Adjust this ratio as needed
// }

// // Update dimensions and step size on window resize
// window.addEventListener('resize', () => {
//     updateDimensions();
//     updateStepSize();
// });

// // Initialize dimensions and step size
// updateDimensions();
// updateStepSize();
