var iframe = document.getElementById('iframe');
var loader = document.getElementById('loader');
var overlay = document.getElementById('overlay');
var page = document.getElementById('page');

chrome.storage.sync.get('tabUrl', function(results) {
  var tabUrl = results.tabUrl;

  if (tabUrl) {
    iframe.src = tabUrl;
    return;
  }

  overlay.style.display = null;
});

iframe.onload = function() {
  loader.style.display = 'none';
};
