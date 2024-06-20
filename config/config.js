require('dotenv').config();

console.log('JWT_SECRET:', process.env.JWT_SECRET);  // Debugging

module.exports = {
    port: process.env.PORT || 5000,
    dbURI: process.env.DB_URI || 'mongodb://localhost:27017/Auth',
    jwtSecret: process.env.JWT_SECRET,
};



// bIn6Ina1zSS6Sz5q