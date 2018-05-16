class Control {
    constructor(_value, _validators) {
        this.value = _value;
        this.validators = _validators.map(validator => {
            return validator(this.value);
        });
    }
}

module.exports = Control;
