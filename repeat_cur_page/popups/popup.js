// document.getElementById('myButton').addEventListener('click', function () {
//   // chrome.runtime.sendMessage({ action: "buttonClicked" }, function (response) {
//   //   console.log("Received response from background:", response);
//   // });

//     // const urlToOpen = 'https://example.com'; // 将此URL替换为你想打开的页面地址
//     // chrome.tabs.create({ url: urlToOpen });

//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     var currentTab = tabs[0];
//     var currentUrl = currentTab.url;

//     // 在新标签页中打开当前页面的URL
//     chrome.tabs.create({ url: currentUrl });
//   })


// });

// // 与后台脚本通信的示例
// chrome.runtime.sendMessage({ action: "popupOpened" }, response => {
//   console.log("Received response from background:", response);
// });

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTab = tabs[0];
  var currentUrl = currentTab.url;

  // 在新标签页中打开当前页面的URL
  chrome.tabs.create({ url: currentUrl });
})