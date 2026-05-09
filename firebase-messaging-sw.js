self.addEventListener('push', function(event) {
  const data = event.data?.json() || {};
  self.registration.showNotification(data.title || 'Kaveri University Hostel', {
    body: data.body || 'New notification received',
    icon: '/logo.png'
  });
});
