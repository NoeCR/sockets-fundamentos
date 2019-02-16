var socket = io();
// Escucha con el metodo on
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
// Enviar información con el metodo emit
socket.emit('enviarMensaje', {
    usuario: 'Noé',
    mensaje: 'Hola sockets'
}, function(resp) {
    console.log('Respuesta server: ', resp);

});
// Escuchar información
socket.on('enviarMensaje', function(resp) {
    console.log('Servidor', resp);
});