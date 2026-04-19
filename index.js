
// Outer function: createLoginTracker
// Accepts userInfo object containing username and password
// Returns an inner arrow function that handles login attempts
const createLoginTracker = (userInfo) => {
  // Initialize attempt counter - kept private via closure
  let attemptCount = 0;
  
  // Inner arrow function: handles each login attempt
  // Accepts passwordAttempt parameter from user
  // Returns appropriate message based on login status
  return (passwordAttempt) => {
    // Check if account is already locked (exceeded 3 attempts)
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }
    
    // Increment attempt count for each login attempt
    attemptCount++;
    
    // Check if password matches
    if (passwordAttempt === userInfo.password) {
      // Password is correct - successful login
      return 'Login successful';
    } else {
      // Password is incorrect - failed login attempt
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};