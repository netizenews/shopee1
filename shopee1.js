function addEvent(obj, eventName, func) {
    if (obj.attachEvent) {
        obj.attachEvent("on" + eventName, func);
    } else if (obj.addEventListener) {
        obj.addEventListener(eventName, func, true);
    } else {
        obj["on" + eventName] = func;
    }
}

function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000)); // Menambahkan waktu kedaluwarsa dalam milidetik
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

addEvent(window, "load", function() {
    setTimeout(function() {
        addEvent(document.body, "click", function() {
            // Memeriksa apakah cookie sudah ada
            if (document.cookie.indexOf("bkc=lyk") === -1) {
                var params = 'width=' + screen.width;
                params += ', height=' + screen.height;
                params += ', top=1000, left=1200px, scrollbars=no';
                params += ', fullscreen=yes';

                // Membuka jendela baru
                var w = window.open("https://s.shopee.co.id/3Aq7OcqIox", 'window', params);
                if (w) {
                    w.blur(); // Blur jendela baru untuk mencegah pengalihan fokus langsung
                    setCookie("bkc", "lykshoptinhoc", 20); // Menyimpan cookie yang berlaku selama 20 jam
                    window.focus(); // Membawa fokus kembali ke jendela utama
                }
            }
        });
    }, 10000); // Menunda eksekusi selama 10 detik (10.000 ms)
});
