class Security {
    static testInput(data) {
        if (!data || data.constructor !== String) {
            return data;
        } else {
            data = data.trim();
            data = Security.stripslashes(data);
            data = Security.htmlspecialchars(data);
            return data;
        }
    }

    static stripslashes(str) {
        str = str.replace(/\\'/g, '\'');
        str = str.replace(/\\"/g, '"');
        str = str.replace(/\\0/g, '\0');
        str = str.replace(/\\\\/g, '\\');
        return str;
    }

    static htmlspecialchars(str) {
        const MAP = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return str.replace(/[&<>"']/g, (m) => MAP[m]);
    }

    static decodeHtml(str) {
        const MAP = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#039;': "'"
        };

        return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, (m) => MAP[m]);
    }
}

module.exports = Security;
