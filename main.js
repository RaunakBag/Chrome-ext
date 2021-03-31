chrome.browserAction.onClicked.addListner(function(){
    chrome.tabs.create({'url':"chrome://newtab"})
})