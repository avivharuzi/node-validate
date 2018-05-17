const Validators = require('./validators');
const Security = require('./security');
const Control = require('./control');

const defaultOptions = {
    errorsWithKey: true,
    multiErrors: false
};

class Validate {
    constructor(_obj, _options = {}) {
        this.obj = _obj;
        this.options = Object.assign(defaultOptions, _options);
    }

    get valid() {
        return this.errors ? false : true;
    }

    get invalid() {
        return this.errors ? true : false;
    }

    get errors() {
        let errors = [];
        for (let key in this.obj) {
            let e = this.obj[key].validators.filter(x => {
                return x !== null;
            });
            if (e.length) {
                e = this.options.multiErrors ? e : e[0];
                errors.push(this.options.errorsWithKey ? { [key]: e } : e);
            }
        }
        if (errors.length) {
            return errors;
        } else {
            return null;
        }
    }

    get values() {
        let newObj = {};
        for (let key in this.obj) {
            newObj[key] = Security.testInput(this.obj[key].value);
        }
        return newObj;
    }

    static control(...args) {
        return new Control(...args);
    }

    static get validators() {
        return Validators;
    }
}

module.exports = Validate;
