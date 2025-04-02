// Import required module
const { performance } = require('perf_hooks');

// Function to get the current timestamp
function getCurrentTime(): number {
    return Math.floor(performance.now() / 1000); // Convert to seconds
}

// Transaction interface
interface Transaction {
    txId: string;
    sender: string;
    receiver: string;
    amount: number;
    gasLimit: number;
    maxFeePerGas: number;
    nonce: number;
    timestamp: number;
}

// Function to create a transaction
function createTransaction(): Transaction {
    const now = getCurrentTime();

    return {
        txId: "tx123",
        sender: "Alice",
        receiver: "Bob",
        amount: 1000,
        gasLimit: 21000,
        maxFeePerGas: 100,
        nonce: 1,
        timestamp: now,
    };
}

// Main function
function main() {
    console.log("Starting simulation...");

    // Create a sample transaction
    const sampleTransaction = createTransaction();

    // Clone the transaction
    const clonedTransaction = { ...sampleTransaction };

    console.log("Original Transaction:", sampleTransaction);
    console.log("Cloned Transaction:", clonedTransaction);
}

// Run the simulation
main();
