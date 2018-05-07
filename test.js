const validate = require('./index');

const user = {
    username: 'John',
    email: 'john@gmail.com',
    password: '123456',
    age: 21,
    gender: 'male',
    isActive: true
};

validateUser = new validate(user);

console.log(validateUser);
