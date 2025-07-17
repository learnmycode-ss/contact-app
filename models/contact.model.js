const mong = require("mongoose");

const contactSchemas = mong.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
})

const contact = mong.model("Contact",contactSchemas);
module.exports = contact;