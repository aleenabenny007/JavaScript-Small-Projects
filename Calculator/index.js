let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)

        console.log(num1)
        console.log(num2)

        let result = 0

        function add() {
            result = num1 + num2
            printResult()
        }

        function subtract() {
            result = num1 - num2;
            printResult()
        }

        function multiply() {
            result = num1 * num2;
            printResult()
        }

        function divide() {
            result = num1 / num2;
            printResult()
        }


        function printResult() {
            console.log(result)
            document.getElementById("result").innerHTML = result
        }

