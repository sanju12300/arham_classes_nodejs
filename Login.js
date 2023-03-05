let http = require("http");
let url = require("url");
let Port = 6547;

let loginForm = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
<form action="/Login">
    <table>
        <tr>
            <th colspan="2" align="center">
                Login Page
            </th>
        </tr>
        <tr>
            <th> Username</th>
            <td><input type="text" name="Username" >  </td>
        </tr>
        <tr>
            <th> Password</th>
            <td><input type="text" name="Password">  </td>
        </tr>
        <tr>
            <th colspan="2" align="center">
                <input type="submit" value="Login">
                <input type="reset" value="clear">
            </th>
        </tr>
    </table>

</form>
</body>
</html>`

let app = http.createServer((req, res)=>{
   console.log(req.url,)

    let urlInfo=url.parse(req.url,true);
    if(urlInfo.path!="/favicon.ico")
    {
        if (urlInfo.path=="/LoginForm")
        {
            res.write(loginForm)
        }
        else if(urlInfo.pathname=="/Login")
        {
            let username = "admin"
            let password = "admin123"

            let Username = urlInfo.query.Username
            let Password = urlInfo.query.Password
            console.log(Username)
            console.log(Password)

            if (Username == username && Password == password)
            {
                res.write(`<html><body> <h1>User login Successfully</h1>`);
                res.write('<a href="LoinForm">Login</a></body></html>');

            }
            else{
                res.write(`</h1>Enter a valid username and password</h1>`)

            }


        }
        else {
            res.write(loginForm)
         }
    }

res.end();

})

app.listen(Port, ()=>{
console.log(`server is running on Port : ${Port}`)
})