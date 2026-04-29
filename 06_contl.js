const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function loginSystem() {
    let maxAttempts = 3;
    let currentAttempt = 0;
    
    function askCredentials() {
        currentAttempt++;
        let remaining = maxAttempts - currentAttempt;
        
        rl.question(`Attempt ${currentAttempt} of ${maxAttempts}\nUsername: `, (username) => {
            rl.question("Password: ", (password) => {
                if (username === "admin" && password === "1234") {
                    console.log("\n Access granted! Welcome admin!");
                    rl.close();
                } else {
                    console.log(`\n Invalid credentials!`);
                    if (remaining > 0) {
                        console.log(` ${remaining} attempt(s) remaining.\n`);
                        askCredentials();
                    } else {
                        console.log("Account locked. Too many failed attempts.");
                        rl.close();
                    }
                }
            });
        });
    }
    
    askCredentials();
}

// Run the function
loginSystem();






















// Login Attempt Limiter
// Simulate a login system where a user has 3 attempts.
// If username is "admin" and password is "1234", grant access.
// Otherwise show "Invalid credentials" and reduce attempts.
// Stop after 3 failures.

