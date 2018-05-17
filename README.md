# Validate

> a lightweight validation library

## Usage

```javascript
const Validate = require('validate');

const user = {
    email: 'john@gmail.com',
    password: '123456'
};

const validateUser = new Validae({
    email: Validate.control(user.email, [
        Validate.validators.required(),
        Validate.validators.email()
    ]),
    password: Validate.control(user.password, [
        Validate.validators.required(),
        Validate.validators.minAndMaxLength(3, 12)
    ])
});

if (validateUser.valid) {
    user = validateUser.values;
} else {
    console.log(validateUser.errors);
}
```

## License

[MIT](LICENSE)
