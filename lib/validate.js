class Validate {
    constructor(_controls) {
        this.controls = _controls;
    }

    valid() {
        return this.checkForErrors() ? true : false;
    }

    invalid() {
        return this.checkForErrors() ? false : true;
    }

    checkForErrors() {
        for (let key in this.controls) {
            if (this.controls.hasOwnProperty(key) && !this.controls[key]) {
                return false;
                break;
            }
        }
        return true;
    }
}

module.exports = Validate;
