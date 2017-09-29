({
	doInit : function(component, event, helper) {
        var resName = component.get("v.resourceName");
		var profUrl = $A.get('$Resource.' + resName);        
        if(profUrl) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', profUrl, false);
            xhr.send();
            
            if (xhr.status != 200) {
                component.set("v._errorMessage", xhr.status + ': ' + xhr.statusText);
            } else {
                component.set("v._raw", xhr.responseText);
            }    
        } else {
            component.set("v._errorMessage", 'Static Resource with name \'' + resName + '\' was not found');
        }
        
	}
})