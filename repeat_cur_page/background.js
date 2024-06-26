// Copyright 2021 Google LLC
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd

// Show the demo page once the extension is installed
// chrome.runtime.onInstalled.addListener((_reason) => {
//   chrome.tabs.create({
//     url: 'demo/index.html'
//   });
// });

console.log("nice")
// chrome.action.onClicked.addListener((tab) => {
//   // 获取当前激活标签页的ID
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (tabs && tabs.length > 0) {
//       const currentTab = tabs[0];
//       console.log(`Current tab URL: ${currentTab.url}`);

//       // 在这里添加你想执行的操作，例如：
//       // chrome.tabs.sendMessage(currentTab.id, {action: "getDetails"});
//     }
//   });
// });

// chrome.runtime.onMessage.addListener(
//   (request, sender, sendResponse) => {
//     if (request.action === "popupOpened") {
//       console.log("Received action from popup.");
//       // 执行你的逻辑
//       sendResponse({ status: "Background received message." });
//     }
//   }
// );

// chrome.action.onClicked.addListener((tab) => {

//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     var currentTab = tabs[0];
//     var currentUrl = currentTab.url;

//     // 在新标签页中打开当前页面的URL
//     chrome.tabs.create({ url: currentUrl });
// });

// chrome.runtime.onMessage.addListener(
//   (request, sender, sendResponse) => {
//     if (request.action === "popupOpened") {
//       console.log("Received action from popup.");
//       // 执行你的逻辑
//       sendResponse({ status: "Background received message." });
//     }
//   }
// );

  // chrome.command.onCommand.addListener(function (command) {

  //   // if (command === 'toggle-feature-x11') {
  //   //   // 当快捷键被触发时，打开特定的URL
  //   //   const urlToOpen = 'https://example.com'; // 将此URL替换为你想打开的页面地址
  //   //   chrome.tabs.create({ url: urlToOpen });

  //   // }
  // });


// chrome.commands.onCommand.addListener((command) => {
//   if (command === 'toggle-feature-x') {
//     // 用户按下了 Ctrl+Shift+F12（或用户自定义的快捷键）
//     // 这里定义你的处理逻辑

//     // 示例：获取当前活跃标签页并执行一些操作
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       if (tabs && tabs.length > 0) {
//         const currentTab = tabs[0];
//         console.log(`快捷键触发，当前标签页URL: ${currentTab.url}`);

//         // 执行具体操作，例如发送消息给内容脚本
//         // chrome.tabs.sendMessage(currentTab.id, {action: "shortcut_pressed"});
//       }
//     });
//   }
// });
// 如果你的扩展还需要监听其他事件，也可以在这里定义

// // 在Chrome扩展环境中使用
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   var currentTab = tabs[0];
//   var currentUrl = currentTab.url;

//   // 在新标签页中打开当前页面的URL
//   chrome.tabs.create({ url: currentUrl });
// });