const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    role: { type: String, enum:['user', 'admin'], required: true, default: 'user' },
    
    
},{
    timestamps: true,
    versionKey: false,
});

userSchema.pre('save', async function(next){
    if(this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 10);
        next();
});

module.exports = mongoose.model('User', userSchema);