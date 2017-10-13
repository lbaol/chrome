var background = chrome.extension.getBackgroundPage();





document.addEventListener('DOMContentLoaded', () => {


    $('#hide-kws-input').on('input',function(){
        var hideKws = $(this).val();
        background.saveLocalData({hideKws:hideKws});
        
    })

    $('#light-kws-input').on('input',function(){
        var lightKws = $(this).val();
        background.saveLocalData({lightKws:lightKws}); 
    })


    var localData = background.getLocalData()
    $('#hide-kws-input').val(localData.hideKws);
    $('#light-kws-input').val(localData.lightKws)
    
});
  


