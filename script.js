document.getElementById("btn").addEventListener("click", function () {
    let inputValue = parseFloat(document.getElementById("ip").value);

    if (isNaN(inputValue)) {
        document.getElementById("output").textContent = "Please enter a valid number!";
        return;
    }

    new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById("output").textContent = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num * 2;
                document.getElementById("output").textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num - 3;
                document.getElementById("output").textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num / 2;
                document.getElementById("output").textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num + 10;
                document.getElementById("output").textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then(finalResult => {
        setTimeout(() => {
            document.getElementById("output").textContent = `Final Result: ${finalResult}`;
        }, 1000);
    })
    .catch(error => {
        document.getElementById("output").textContent = `Error: ${error}`;
    });
});
