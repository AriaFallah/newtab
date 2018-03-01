function removeXFrameOptions(info) {
  var responseHeaders = info.responseHeaders.filter(function(header) {
    var name = header.name.toLowerCase();
    return name !== 'x-frame-options' && name !== 'frame-options';
  });

  for (var i = 0; i < responseHeaders.length; ++i) {
    var header = responseHeaders[i];
    if (header.name === 'content-security-policy') {
      header.value = header.value.replace("frame-ancestors 'self';", '');
    }
  }

  return { responseHeaders: responseHeaders };
}

chrome.webRequest.onHeadersReceived.addListener(
  removeXFrameOptions,
  { urls: ['<all_urls>'] },
  ['blocking', 'responseHeaders']
);
