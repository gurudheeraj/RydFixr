// backend/websocket/socketHandler.js
const fixpertSockets = new Map(); // fixpertId -> socket
const customerSockets = new Map(); // customerId -> socket

function setupSocket(io) {
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Register Fixpert
    socket.on('register-fixpert', (fixpertId) => {
      fixpertSockets.set(fixpertId, socket);
      console.log(`Fixpert registered: ${fixpertId}`);
    });

    // Register Customer
    socket.on('register-customer', (customerId) => {
      customerSockets.set(customerId, socket);
      console.log(`Customer registered: ${customerId}`);
    });

    // Handle location updates from fixpert
    socket.on('fixpert-location', ({ fixpertId, location }) => {
      console.log(`Fixpert ${fixpertId} location:`, location);
      for (let [customerId, sock] of customerSockets) {
        sock.emit('fixpert-location-update', { fixpertId, location });
      }
    });

    // When fixpert accepts request
    socket.on('request-accepted', ({ customerId, fixpertInfo }) => {
      const customerSocket = customerSockets.get(customerId);
      if (customerSocket) {
        customerSocket.emit('fixpert-accepted', fixpertInfo);
      }
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
      // Remove from maps
      for (let [id, s] of fixpertSockets) {
        if (s.id === socket.id) fixpertSockets.delete(id);
      }
      for (let [id, s] of customerSockets) {
        if (s.id === socket.id) customerSockets.delete(id);
      }
    });
  });
}

module.exports = setupSocket;
