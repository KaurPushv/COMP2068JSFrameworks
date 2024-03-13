const connect = require('connect');
const url = require('url');

const app = connect();

// Middleware to handle requests
app.use((req, res, next) => {
    const parsedUrl = url.parse(req.url, true);

    // Check if the URL has parameters
    if (parsedUrl.query.method && parsedUrl.query.x && parsedUrl.query.y) {
        const method = parsedUrl.query.method;
        const x = parseFloat(parsedUrl.query.x);
        const y = parseFloat(parsedUrl.query.y);

        // Calculate the result based on the method
        let result;
        switch (method) {
            case 'add':
                result = x + y;
                break;
            case 'subtract':
                result = x - y;
                break;
            case 'multiply':
                result = x * y;
                break;
            case 'divide':
                if (y !== 0) {
                    result = x / y;
                } else {
                    res.end('Error: Division by zero');
                    return;
                }
                break;
            default:
                res.end('Error: Invalid method');
                return;
        }

        // Send response with the formatted math operation and result
        res.end(`${x} ${method} ${y} = ${result}`);
    } else {
        res.end('Error: Missing parameters');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
