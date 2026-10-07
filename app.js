// Read the environment name from the pipeline configuration
const currentEnv = process.env.TARGET_ENV || 'Local Machine';

console.log('====================================');
console.log(`🚀 App running successfully!`);
console.log(`📍 Environment Context: ${currentEnv.toUpperCase()}`);
console.log('====================================');
