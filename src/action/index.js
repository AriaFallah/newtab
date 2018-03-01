document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var url = e.target.elements.url.value;
  if (!url) {
    return;
  }

  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }
  chrome.storage.sync.set({ tabUrl: url }, function() {
    window.close();
    chrome.tabs.query({ currentWindow: true, active: true }, function(tab) {
      chrome.tabs.update(tab.id, { url: url });
    });
  });
});
