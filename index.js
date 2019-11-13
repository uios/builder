function init() {
  if('serviceWorker' in navigator) {
    //navigator.serviceWorker.register('sw.js');
    //navigator.serviceWorker.addEventListener('message', event => {
      //if(event.data.typ === 'notification') { notify(event.data.msg, event.data.exp); }
    //});
  } 
  document.body.removeAttribute('data-nojs');
  window.location.pathname.router();
}