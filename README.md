# nick-calc

This calculator web app uses socket.io, express, AWS Elastic Beanstalk, AWS CodePipeline, NodeJS, Nodemon, pug, and GitHub.

Since AWS uses port # 8080, that's the port number assigned to this app's server "nick-calc.js"

You access this app by visiting AWS url: 
http://nick-calc.us-east-1.elasticbeanstalk.com/

A second (optional) way to access this app is by entering "npm install" and then "npm start" in CLI and then going to "localhost:8080" in your browser.

The GitHub repository link is https://github.com/itsmenick212/nick-calc

Please refresh your browser to only see last 10 calculations log, otherwise, it may show all the logs. You have to use your keyboard to do the calculations. Only numbers and addition(+), subtraction(-), multiplication(*), division(/), and/or modulus (%) operators are allowed. You may use several operations in one calculations in legal manner, which will follow the order of operation with precedence given to parentheses. Thank you.
