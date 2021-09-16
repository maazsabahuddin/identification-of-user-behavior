
// import { $ } from './jquery.js';

// try { init(); } catch (e) { console.error(e); }
// function init() {
//   console.log("HII")
// }

// try {
//   importScripts('C:\Users\Maaz\Desktop\Naik-POC\jquery.js');
// } catch (e) {
//   console.error(e);
// }

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
  });
});
