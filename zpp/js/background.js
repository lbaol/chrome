

var localData = {};


function getLocalData() {
    return localData;
}

function saveLocalData(data) {
    
    localData = Object.assign(localData,data);
    console.log(localData,data)
    chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,{type:'localData',data:localData});
        });

}
