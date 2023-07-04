This example demonstrates how to use [Express](http://expressjs.com/) 4.x and
[Passport](http://passportjs.org/) to authenticate users via the HTTP Bearer
scheme.  Use this example as a starting point for your own web applications.

This examples uses static json data as a database.  

Credit source: https://www.passportjs.org/packages/passport-http-bearer

## Instructions

To install this example on your computer, clone the repository and install
dependencies.

```bash
$ git clone git@github.com:anotherjung/express-4.x-http-bearer-example.git
$ cd express-4.x-http-bearer-example
$ npm install
```

another option using pnpm
```bash
pnpm install
```

## Start the server.
see ./db/users.js

```bash
$ node server.js
```

## Expected Return is HTTP/1.1 200 OK
HTTP/1.1 200 OK
{"username":"jack","email":"jack@example.com"}

key/token/bearer is 123456789

Use `curl` to send an authenticated request.
```bash
$ curl -v -H "Authorization: Bearer 123456789" http://127.0.0.1:3000/
```

Use Chrome web browser 
```
http://127.0.0.1:3000/?access_token=123456789
```

Expected console.log
11, 123456789, user.js, key/token/bearer value
12, 123456789 + loop, user.js, loops database to match key value
13, 123456789 + token, server.js, express, passport  

## Expected Return is HTTP/1.1 401 Unauthorized
Unauthorized

key/tocken/bearer is 0 

Use `curl` to send an authenticated request.
```bash
$ curl -v -H "Authorization: Bearer 0" http://127.0.0.1:3000/
```

Use Chrome web browser 
```
http://127.0.0.1:3000/?access_token=0
```

Expected console.log
11, 0, user.js, key/token/bearer value
12, 0 + loop, user.js, loops database to match key value
13, 0 + null, server.js, express, passport  
