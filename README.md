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

## Api

### new Validate()

valid

invalid

errors

values

### validators

control([validators])

| Name     | Args           |
| -------- | -------------- |
| required |
| regex | regex, message |
| minLength | len
| maxLength | len
| minAndMaxLength | min, max
| minNumber | min
| maxNumber | max
| minAndMaxNumber | min, max
| alpha |
| alphaDash |
| alphaSpaces |
| alphaNumeric |
| alphaNumericDash |
| alphaNumericSpaces |
| numeric |
| numericFloat |
| numericDigits |
| withoutNumbers |
| username |
| password |
| email |
| url |
| ip |
| slug |
| time |
| date |
| phoneIsrael |
| xss |

### Options (Object)

new Validate(obj, options)

| Option   | Default        |
| -------- | -------------- |
| errorsWithKey | true |
| multiErrors | false |

## License

[MIT](LICENSE)
