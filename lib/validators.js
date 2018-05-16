const ALPHA_REGEX = /^[A-Za-z]*$/;
const ALPHA_DASH_REGEX = /^[A-Za-z_-]*$/;
const ALPHA_SPACES_REGEX = /^[A-Za-z ]*$/;
const ALPHA_NUMERIC_REGEX = /^[A-Za-z0-9]*$/;
const ALPHA_NUMERIC_DASH_REGEX = /^[A-Za-z0-9_]*$/;
const ALPHA_NUMERIC_SPACES_REGEX = /^[A-Za-z0-9 ]*$/;
const NUMERIC_REGEX = /^[+-]?\d+(\.\d+)?$/;
const NUMERIC_FLOAT_REGEX = /^\d+(\.\d+)?$/;
const NUMERIC_DIGITS_REGEX = /^\d+$/;
const WITHOUT_NUMBERS_REGEX = /^[^\d]*$/;
const USERNAME_REGEX = /^[A-Za-z0-9_]*$/;
const PASSWORD_REGEX = /^[A-Za-z0-9!@#$%^&*()_]*$/;
const EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
const URL_REGEX = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/;
const IP_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const SLUG_REGEX = /^[a-z][a-z\-]*[a-z]$/;
const TIME_REGEX = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const DATE_REGEX = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
const PHONE_ISRAEL_REGEX = /^((\+972|972)|0)( |-)?([1-468-9]( |-)?\d{7}|(5|7)[0-9]( |-)?\d{7})$/;
const SCRIPT_TAG_REGEX = /<script[^>]*>(.*?)<\/script[^>]*>|<javascript[^>]*>(.*?)<\/javascript[^>]*>/;

class Validators {
    static base(value, message, regex) {
        return !regex.test(value) ? message : null;
    }

    static required(name = 'Field') {
        return value => !value ? `${name} is required` : null;
    }

    static regex(regex, message) {
        return value => Validators.base(value, message, regex);
    }

    static minLength(len) {
        return value => !value || value.toString().length < len ? `The number of characters must be greater than ${len}` : null;
    }

    static maxLength(len) {
        return value => !value || value.toString().length > len ? `The number of characters must be less than ${len}` : null;
    }

    static minAndMaxLength(min, max) {
        return value => !value || ((value.toString().length > max) || (value.toString().length < min)) ? `The number of characters must be greater than ${min} and less than ${max}` : null;
    }

  	static minNumber(min) {
		return value => typeof value !== 'number' || value < min ? `The number must be greater than ${min}` : null;
	}

  	static maxNumber(max) {
    	return value => typeof value !== 'number' || value > max ? `The number must be less than ${max}` : null;
  	}

  	static minAndMaxNumbers(min, max) {
        return value => typeof value !== 'number' || (value > max || value < min) ? `The numerical range must be greater than ${min} and less than ${max}` : null;
    }

  	static alpha() {
		return value => Validators.base(value, 'Only letters are allowed', ALPHA_REGEX);
  	}

  	static alphaDash() {
		return value => Validators.base(value, 'Only letters and dashes are allowed', ALPHA_DASH_REGEX);
  	}

  	static alphaSpaces() {
		return value => Validators.base(value, 'Only letters and spaces are allowed', ALPHA_SPACES_REGEX);
  	}

	static alphaNumeric() {
		return value => Validators.base(value, 'Only letters and numbers are allowed', ALPHA_NUMERIC_REGEX);
	}

	static alphaNumericDash() {
		return value => Validators.base(value, 'Only letters, numbers and dashes are allowed', ALPHA_NUMERIC_DASH_REGEX);
	}

  	static alphaNumericSpaces() {
		return value => Validators.base(value, 'Only letters, numbers and spaces are allowed', ALPHA_NUMERIC_SPACES_REGEX);
  	}

	static numeric() {
		return value => Validators.base(value, 'Only numbers are allowed', NUMERIC_REGEX);
	}

  	static numericFloat() {
		return value => Validators.base(value, 'Only numbers with floating are allowed', NUMERIC_FLOAT_REGEX);
  	}

  	static numericDigits() {
		return value => Validators.base(value, 'Only digit numbers are allowed', NUMERIC_DIGITS_REGEX);
  	}

  	static withoutNumbers() {
		return value => Validators.base(value, 'You cant type numbers', WITHOUT_NUMBERS_REGEX);
  	}

  	static username() {
		return value => Validators.base(value, 'Enter a valid username', USERNAME_REGEX);
  	}

  	static password() {
		return value => Validators.base(value, 'Enter a valid password', PASSWORD_REGEX);
  	}

	static email() {
		return value => Validators.base(value, 'Enter a valid email', EMAIL_REGEX);
	}

	static url() {
		return value => Validators.base(value, 'Enter a valid url', URL_REGEX);
	}

	static ip() {
		return value => Validators.base(value, 'Enter a valid ip', IP_REGEX);
	}

	static slug() {
		return value => Validators.base(value, 'Enter a valid slug', SLUG_REGEX);
	}

	static time() {
		return value => Validators.base(value, 'Enter a valid time', TIME_REGEX);
	}

  	static date() {
		return value => Validators.base(value, 'Enter a valid date', DATE_REGEX);
  	}

  	static phoneIsrael() {
		return value => Validators.base(value, 'Enter a valid israel phone number', PHONE_ISRAEL_REGEX);
    }

    static xss(name = 'value') {
        return value => SCRIPT_TAG_REGEX.test(value) ? `Enter a valid ${name}` : null;
    }
}

module.exports = Validators;
