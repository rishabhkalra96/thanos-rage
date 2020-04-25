let snapBtn = document.getElementById('snapper');

snapBtn.addEventListener('click', (e) => {
    chrome.tabs.query({}, (tabs) => {
        let totalTabIds = [...tabs.map(t => t.id)];
        // window.alert('total tab ids ' + totalTabIds);
        let tabsToDelete = Math.floor(totalTabIds.length/2);
        let tabdeleteArray = [];
        // window.alert('total tabs to delete ' + tabsToDelete);
        while(tabsToDelete >= 1) {
            let random = Math.floor(Math.random() * (totalTabIds.length - 1 + 1) ) + 1;
            const tabId = totalTabIds[random];
            if (!tabdeleteArray.includes(tabId)) {
                tabdeleteArray.push(tabId);
                tabsToDelete -= 1;
            }
        }
        chrome.tabs.remove(tabdeleteArray, () => {});
    });
});