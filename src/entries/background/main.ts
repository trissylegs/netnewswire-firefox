import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  const url = 'https://zombo.com';
  const tab = browser.tabs.create({ url })
  console.log("Welcome tab created", { url, tab });
});
