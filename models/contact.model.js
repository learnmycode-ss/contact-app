// const mong = require("mongoose");
import mong from 'mongoose';
import mongoPagination from 'mongoose-paginate-v2';

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

contactSchemas.plugin(mongoPagination)

const contact = mong.model("Contact",contactSchemas);
// module.exports = contact;
export default contact;