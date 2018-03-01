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
  page.style.filter = 'blur(3px)';
  iframe.src = 'https://www.aria.ai';
});

iframe.onload = function() {
  loader.style.display = 'none';
};

overlay.addEventListener('click', function() {
  overlay.style.display = 'none';
  page.style.filter = null;
});
