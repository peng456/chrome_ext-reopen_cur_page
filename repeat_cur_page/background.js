// Copyright 2021 Google LLC
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd

// Show the demo page once the extension is installed
chrome.runtime.onInstalled.addListener((_reason) => {
  chrome.tabs.create({
    url: 'demo/index.html'
  });


  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   var currentTab = tabs[0];
  //   var currentUrl = currentTab.url;

  //   // 在新标签页中打开当前页面的URL
  //   chrome.tabs.create({ url: currentUrl });
  // })



});



console.log("nice")