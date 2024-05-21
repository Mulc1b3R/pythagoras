const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const sequence = [3.1415926535, 3.236067977, 4.510566367, 5.55252107831, 7.15371926177, 9.05572689525];
let circles = [];
let colors = ['red', 'blue', 'green', 'orange', 'pink', 'cyan', 'lime', 'purple', 'yellow', 'teal', 'magenta', 'violet', 'turquoise', 'maroon', 'gold', 'silver'];
let colorIndex = 0; // Color index to cycle through the colors

function generateColor() {
    const color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
    return color;
}

function generateCircles() {
    circles = []; // Reset circles array
    let thirdNumber = Math.sqrt((sequence[0] ** 2) + (sequence[1] ** 2));

    // Generate random circles based on the third number
    const circleCount = parseInt(document.getElementById('circleCount').value);
    for (let i = 0; i < circleCount; i++) {
        let radius = Math.random() * thirdNumber;
        let color = generateColor(); // Generate and use a color for the circle
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        circles.push({ x, y, radius, color });
    }
}

function renderCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.closePath();
    });
}

// You can further enhance this code to increase color complexity based on the generative concept