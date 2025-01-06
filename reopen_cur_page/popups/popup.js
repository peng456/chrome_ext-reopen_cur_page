chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTab = tabs[0];
  var currentUrl = currentTab.url;

  // 在新标签页中打开当前页面的URL
  chrome.tabs.create({ url: currentUrl });
})