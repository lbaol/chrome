

function hideItem(keywords){
    var workInfos = $('.work-info');
    workInfos.each(function(){
        var workInfo = $(this);
        var items = workInfo.find('.len-style');
        var isHide = false;
        items.each(function(){
            var item = $(this);
            if(keywords){
                keywords = keywords.replace('，',',');
                var kwArray = keywords.split(',');
                for(var i=0;i<kwArray.length;i++){
                    if(item.text().indexOf(kwArray[i])>=0){
                        isHide = true;
                    }
                }
            }
        })
        if(isHide){
            workInfo.closest('.caimi-list').hide();
        }else{
            workInfo.closest('.caimi-list').show();
        }
    })
    
}

function lightItem(keywords){
    var workInfos = $('.work-info');
    workInfos.each(function(){
        var workInfo = $(this);
        var items = workInfo.find('.len-style');
        var isHide = false;
        items.each(function(){
            var item = $(this);
            if(keywords){
                keywords = keywords.replace('，',',');
                var kwArray = keywords.split(',');
                var isLight = false;
                for(var i=0;i<kwArray.length;i++){
                    if(item.text().indexOf(kwArray[i])>=0){
                        isLight = true;
                    }
                }
                if(isLight == true){
                    item.css("background-color","violet");
                }else{
                    item.css("background-color","#fff");
                }
            }else{
                item.css("background-color","#fff");
            }
        })
    })
}

var localData = {};

chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse) {
        console.log(req)
        if(req.type == 'localData'){
            localData = req.data;
        }
    });
    

setInterval(function(){
    hideItem(localData.hideKws);
    lightItem(localData.lightKws)
},3000)