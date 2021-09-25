module.exports = {
    setCookie: function (name, value, type) {
        type = (typeof type !== 'undefined') ?  type : 'default';
        var date = new Date(),
            expires = 'expires=';
        // in 24 hour
        if(type === '24h') {
            date.setDate(date.getDate() + 1);
            // Test with 60s
            // date.setTime(date.getTime() + 60 * 1000);
        }
        // to 1 hour
        if(type === '1h') {
            date.setTime(date.getTime() + 3600 * 1000);
        }
        // to 12pm this day
        if(type === '12pm' || type === 'default') {
            date.setHours(23,59,59,0);
        }
        expires += date.toGMTString();
        document.cookie = name + '=' + value + '; ' + expires + '; path=/';
    },
    
    getCookie: function (name) {
        var allCookies = document.cookie.split(';'),
        cookieCounter = 0,
        currentCookie = '';
        for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
            currentCookie = allCookies[cookieCounter];
            while (currentCookie.charAt(0) === ' ') {
                currentCookie = currentCookie.substring(1, currentCookie.length);
            }
            if (currentCookie.indexOf(name + '=') === 0) {
                return currentCookie.substring(name.length + 1, currentCookie.length);
            }
        }
        return false;
    }
};
