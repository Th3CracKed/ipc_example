import ipc from 'node-ipc';
ipc.config.id = 'world';
ipc.config.stopRetrying = true;

ipc.serve(
    function () {
        ipc.server.on(
            'message',
            function (data, socket) {
                ipc.log('got a message : ', data);
                ipc.server.stop();
            }
        );
    }
);

ipc.server.start();