const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    role_id: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    updated_at: { 
        type: Date, 
        default: Date.now 
    }
}, { strict: false });

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;
