function ketnoi() {
    my_web_socket = new WebSocket('ws://localhost:3000');

    my_web_socket.onmessage = function (e) {
        console.log('Message:', e.data);
    };
    my_web_socket.onopen = function (e) {
        my_web_socket.send('hello server')
    };

    my_web_socket.onclose = function (e) {

        setTimeout(function () {
            ketnoi();
        }, 1000);
    };

    my_web_socket.onerror = function (err) {

        my_web_socket.close();
    };
}

ketnoi();