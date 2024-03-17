import crypto from 'crypto'

// Function to generate a secure secret key
function generateSecretKey(length: number): string {
    return crypto
        .randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length)
}

// Generate a secret key with 32 characters (256 bits)
const secretKey = generateSecretKey(32)
console.log('Secure Secret Key:', secretKey)