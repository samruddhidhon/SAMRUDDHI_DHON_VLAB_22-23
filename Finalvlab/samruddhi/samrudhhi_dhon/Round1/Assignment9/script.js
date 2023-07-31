function calculateTriangleArea() {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
        const s = (sideA + sideB + sideC) / 2;
        const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
        document.getElementById("triangleAreaResult").textContent = `Triangle Area: ${area.toFixed(2)}`;
    } else {
        document.getElementById("triangleAreaResult").textContent = "Invalid input. Please enter valid numbers.";
    }
}

function calculateCircleArea() {
    const radius = parseFloat(document.getElementById("radius").value);

    if (!isNaN(radius)) {
        const area = Math.PI * radius * radius;
        document.getElementById("circleAreaResult").textContent = `Circle Area: ${area.toFixed(2)}`;
    } else {
        document.getElementById("circleAreaResult").textContent = "Invalid input. Please enter a valid number.";
    }
}

function findVowels() {
    const inputString = document.getElementById("inputString").value;
    const vowels = inputString.match(/[aeiou]/gi);

    if (vowels) {
        document.getElementById("vowelsResult").textContent = `Vowels: ${vowels.join(", ")}`;
    } else {
        document.getElementById("vowelsResult").textContent = "No vowels found in the input string.";
    }
}

function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
        const simpleInterest = (principal * rate * time) / 100;
        document.getElementById("simpleInterestResult").textContent = `Simple Interest: ${simpleInterest.toFixed(2)}`;
    } else {
        document.getElementById("simpleInterestResult").textContent = "Invalid input. Please enter valid numbers.";
    }
}

function checkPrimeNumber() {
    const number = parseInt(document.getElementById("primeNumber").value);

    if (!isNaN(number) && number > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        document.getElementById("primeNumberResult").textContent = `Is Prime: ${isPrime}`;
    } else {
        document.getElementById("primeNumberResult").textContent = "Invalid input. Please enter a valid number greater than 1.";
    }
}

function calculateFactorial() {
    const number = parseInt(document.getElementById("factorialNumber").value);

    if (!isNaN(number) && number >= 0) {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        document.getElementById("factorialResult").textContent = `Factorial: ${factorial}`;
    } else {
        document.getElementById("factorialResult").textContent = "Invalid input. Please enter a valid non-negative number.";
    }
}
