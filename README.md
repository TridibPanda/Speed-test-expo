# Speed-test-expo
<html>

<head>
    <script>
        //function that display value 
        function dis(val) {
            document.getElementById("result").value += val
            this.getMyChatbot();
        }

        //function that evaluates the digit and return result 
        function solve() {
            let x = document.getElementById("result").value
            let y = eval(x)
            document.getElementById("result").value = y
        }

        //function that clear the display 
        function clr() {
            document.getElementById("result").value = ""

        }

        function getMyChatbot() {
            if (!document.getElementById("cai-webchat")) {
                var value = document.createElement("script");
                value.setAttribute("id", "cai-webchat");
                value.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
                value.setAttribute("ChannelId", "d7690180-21f0-48fc-a2b1-0f303f3cc2c7");
                value.setAttribute("token", "db7c386ff54b9b52b1dc8b264dfa91c4");
                document.body.appendChild(value);
            }
        }
    </script>
    <!-- for styling -->
    <style>
        .title {
            margin-bottom: 10px;
            text-align: center;
            width: 50%;
            color: rgb(24, 73, 231);
            border: solid black 2px;
            margin-left: 25%;
            height: 30px;
            font-size: 24px;
        }
        
        input[type="button"] {
            background-color: rgb(226, 227, 231);
            color: black;
            border: solid black 2px;
            width: 100%;
            height: 60px;
            font-size: 35px;
        }
        
        input[type="text"] {
            background-color: white;
            border: solid black 2px;
            font-size: 40px;
            width: 100%;
            height: 60px;
            direction: RTL;
        }
    </style>
</head>

<body>
    <div class="title"> JavaScript Calculator</div>
    <center>
        <table border="1" width="50%">
            <tr height="60px">
                <td colspan="3"><input type="text" id="result" placeholder="0" /></td>
                <!-- clr() function will call clr to clear all value -->
                <td><input type="button" value="c" onclick="clr()" /> </td>
            </tr>
            <tr height="60px">
                <!-- create button and assign value to each button -->
                <!-- dis("1") will call function dis to display value -->
                <td><input type="button" value="1" onclick="dis('1')" /> </td>
                <td><input type="button" value="2" onclick="dis('2')" /> </td>
                <td><input type="button" value="3" onclick="dis('3')" /> </td>
                <td><input type="button" value="/" onclick="dis('/')" /> </td>
            </tr>
            <tr height="60px">
                <td><input type="button" value="4" onclick="dis('4')" /> </td>
                <td><input type="button" value="5" onclick="dis('5')" /> </td>
                <td><input type="button" value="6" onclick="dis('6')" /> </td>
                <td><input type="button" value="-" onclick="dis('-')" /> </td>
            </tr>
            <tr height="60px">
                <td><input type="button" value="7" onclick="dis('7')" /> </td>
                <td><input type="button" value="8" onclick="dis('8')" /> </td>
                <td><input type="button" value="9" onclick="dis('9')" /> </td>
                <td><input type="button" value="+" onclick="dis('+')" /> </td>
            </tr>
            <tr height="60px">
                <td><input type="button" value="." onclick="dis('.')" /> </td>
                <td><input type="button" value="0" onclick="dis('0')" /> </td>
                <!-- solve function call function solve to evaluate value -->
                <td><input type="button" value="=" onclick="solve()" /> </td>
                <td><input type="button" value="*" onclick="dis('*')" /> </td>
            </tr>
        </table>
        <footer>
            <p>Tridib Panda<br>
                <a href="https://mail.google.com">nits.tridib@gmail.com</a></p>
        </footer>
    </center>

</body>

</html>
