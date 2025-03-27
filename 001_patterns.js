const pattern1 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n; j++) {
            output += "* ";
        }
        console.log(output);
    }
}

const pattern2 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += "* ";
        }
        console.log(output);
    }
}

const pattern3 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += j + 1 + " ";
        }
        console.log(output);
    }
}

const pattern4 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += i + 1 + " ";
        }
        console.log(output);
    }
}

const pattern5 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = n; j > i; j--) {
            output += "* ";
        }
        console.log(output);
    }
}

const pattern6 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = n; j > i; j--) {
            output += n - j + 1 + " ";
        }
        console.log(output);
    }
}

const pattern7 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n - i - 1; j++) {
            output += "  ";
        }

        for (let j = 0; j < 2 * i + 1; j++) {
            output += "+ ";
        }

        for (let j = 0; j < n - i - 1; j++) {
            output += "  ";
        }
        console.log(output);
    }
}

const pattern8 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < i; j++) {
            output += "  ";
        }

        for (let j = 0; j < 2 * (n - i) - 1; j++) {
            output += "+ ";
        }

        for (let j = 0; j < i; j++) {
            output += "  ";
        }
        console.log(output);
    }
}

const pattern9 = (n) => {
    pattern7(n)
    pattern8(n)
}

const pattern10 = (n) => {
    pattern2(n)
    n = n - 1;
    pattern5(n)
}

const pattern11 = (n) => {
    for (let i = 0; i < n; i++) {
        let start = 1 - i % 2;
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += start + " ";
            start = 1 - start;
        }
        console.log(output);
    }
}

const pattern12 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = ""
        let start = 0;
        for (let j = start; j <= i; j++) {
            output += j + 1 + " ";
            start++;
        }
        for (let j = start; j <= i + 2 * (n - i - 1); j++) {
            output += "- ";
            start++;
        }
        for (let j = start; j < 2 * n; j++) {
            output += 2 * n - j + " ";
            start++;
        }
        console.log(output)
    }
}

const pattern13 = (n) => {
    let start = 1;
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += start + " ";
            start++;
        }
        console.log(output);
    }
}

const pattern14 = () => {
    let n = 5

    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += String.fromCharCode(65 + j) + " ";
        }
        console.log(output);
    }
}

const pattern15 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n - i; j++) {
            output += String.fromCharCode(65 + j) + " ";
        }
        console.log(output);
    }
}

const pattern16 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += String.fromCharCode(65 + i) + " ";
        }
        console.log(output);
    }
}

const pattern17 = (n) => {
    for (let i = 0; i < n; i++) {
        counter = 0;
        let output = "";
        for (let j = 0; j < n - i - 1; j++) {
            output += "- ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            output += String.fromCharCode(65 + counter) + " ";
            if (j >= Math.floor((2 * i + 1) / 2)) counter--;
            else counter++;
        }
        for (let j = 0; j < n - i - 1; j++) {
            output += "- ";
        }
        console.log(output);
    }
}

const pattern18 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += String.fromCharCode(65 + n - i + j - 1) + " ";
        }
        console.log(output);
    }
}

const pattern19 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n - i; j++) {
            output += "* ";
        }

        for (let j = 0; j < 2 * i; j++) {
            output += "  ";
        }

        for (let j = 0; j < n - i; j++) {
            output += "* ";
        }
        console.log(output);
    }

    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += "* ";
        }

        for (let j = 0; j < 2 * (n - i - 1); j++) {
            output += "  ";
        }

        for (let j = 0; j <= i; j++) {
            output += "* ";
        }
        console.log(output);
    }
}

const pattern20 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j <= i; j++) {
            output += "* ";
        }

        for (let j = 0; j < 2 * (n - i - 1); j++) {
            output += "  ";
        }

        for (let j = 0; j <= i; j++) {
            output += "* ";
        }
        console.log(output);
    }
    n = n - 1
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n - i; j++) {
            output += "* ";
        }

        for (let j = 0; j < 2 * (i + 1); j++) {
            output += "  ";
        }

        for (let j = 0; j < n - i; j++) {
            output += "* ";
        }
        console.log(output);
    }
    console.log("\n========================== \n")
}

const pattern21 = (n) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
                output += "* ";
            } else {
                output += "  ";
            }
        }
        console.log(output);
    }
}

const pattern22 = (n) => {
    for (let i = 0; i < 2 * n - 1; i++) {
        let output = "";
        for (let j = 0; j < 2 * n - 1; j++) {
            let top = i;
            let left = j
            let bottom = (2 * n - 1) - 1 - i;
            let right = (2 * n - 1) - 1 - j;
            output += n - Math.min(Math.min(top, bottom), Math.min(left, right)) + " ";
        }
        console.log(output);
    }
}

const patterns = {
    pattern1,
    pattern2,
    pattern3,
    pattern4,
    pattern5,
    pattern6,
    pattern7,
    pattern8,
    pattern9,
    pattern10,
    pattern11,
    pattern12,
    pattern13,
    pattern14,
    pattern15,
    pattern16,
    pattern17,
    pattern18,
    pattern19,
    pattern20,
    pattern21,
    pattern22,
}

const printPattern = (n) => {
    const functionName = `pattern${n}`;
    if (typeof patterns[functionName] === "function") {
        console.log("==========================")
        console.log(`Pattern ${n}: `)
        console.log("========================== \n")

        patterns[functionName](5);

        console.log("\n========================== \n")

    } else {
        console.log(`Function ${functionName} does not exist`);
    }
}

for (let i = 1; i <= 22; i++) {
    printPattern(i)
}