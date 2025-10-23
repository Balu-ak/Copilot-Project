#!/usr/bin/env node

/**
 * Simple Application Entry Point
 * A basic Node.js application
 */

function greet(name) {
    return `Hello, ${name}! Welcome to the Copilot Project.`;
}

function main() {
    console.log('=== Copilot Project Application ===');
    console.log(greet('World'));
    console.log('\nApplication is running successfully!');
}

// Run the application
if (require.main === module) {
    main();
}

module.exports = { greet, main };
