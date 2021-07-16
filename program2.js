import ipc from 'node-ipc';

ipc.config.id = 'hello';
ipc.config.stopRetrying = true;
ipc.connectTo(
    'world',
    function () {
        ipc.of.world.on(
            'connect',
            function () {
                ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
                ipc.of.world.emit(
                    'message',
                    'hello World');
                ipc.disconnect('world');
            }
        );
    }
);
