var inputs = process.argv.slice(2);
var results = inputs.map(input => input[0])
                    .reduce((output, currentInput) => output += currentInput)

console.log(`[${inputs}] becomes "${results}"`);
