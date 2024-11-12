function addEvent(obj, eventName, func) {
    if (obj.attachEvent) {
        obj.attachEvent("on" + eventName, func);
    } else if (obj.addEventListener) {
        obj.addEventListener(eventName, func, true);
    } else {
        obj["on" + eventName] = func;
    }
}

addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
        if (document.cookie.indexOf("bkc=lyk") == -1) {
            var params = 'width=' + screen.width;
            params += ', height=' + screen.height;
            params += ', top=1000, left=1200px, scrollbars=no';
            params += ', fullscreen=yes, width=1000, height=800';
            
            var w = window.open("https://s.shopee.co.id/3Aq7OcqIox", 'window', params).blur();
            document.cookie = "bkc=lykshoptinhoc";
            window.focus();
        }
    });
});