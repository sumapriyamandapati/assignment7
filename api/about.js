let aboutMessage = "My Company Inventory";


function setMessage(_, { message }) {
    aboutMessage = message;
    return aboutMessage;
  }
  
  function getMessage() {
    return aboutMessage;
  }
  
  module.exports = { getMessage, setMessage };