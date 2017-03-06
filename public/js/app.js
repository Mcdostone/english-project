var width = function() {
    return screen.width;
}

var height = function() {
    return screen.height;
}


window.onload = function() {

    var minCovers = function() {
        var total = 0
        var widthScreen = parseInt(input_width.value), heightScreen = parseInt(input_height.value);
        var widthCover = parseInt(input_width_cover.value), heightCover = parseInt(input_height_cover.value);
    
        var xMin = parseInt(widthScreen / widthCover)
        var yMin = parseInt(heightScreen / heightCover)

        if(heightScreen % heightCover != 0) {
            total = xMin * 2
        }
        if(widthScreen % widthCover != 0) {
            total += yMin * 2
        }

        total += xMin * yMin
        return total
    }
    

    var initResolution = function() {
        box_width.innerHTML = width();
        box_height.innerHTML = height();
        if(input_width) {
            input_width.value = width();
            input_height.value = height();    
        }
    }

    var proportionnalListener = function() {
        var tmp = this.value;
        input_width_cover.value = tmp;
        input_height_cover.value = tmp;
        var min = minCovers();
        input_min_covers.value = min;
        label_min_covers.innerHTML = "~ " + min + " covers";
    }



    // All HTML elements 
	var input = document.getElementById('nb-covers');
    var box_width = document.getElementById('width');
    var box_height = document.getElementById('height');


    var input_width = document.getElementById('input-width');
    var input_height = document.getElementById('input-height');

    var input_width_cover = document.getElementById('input-width-cover');
    var input_height_cover = document.getElementById('input-height-cover');

    var input_min_covers = document.getElementById('input-min-covers');
    var label_min_covers = document.getElementById('min-covers');


    initResolution();


    if(input_width_cover) {
        input_height_cover.addEventListener('input', proportionnalListener);
        input_width_cover.addEventListener('input', proportionnalListener);
        
        input_width_cover.dispatchEvent(new Event('input'));
    }


    if(input) {
        input.addEventListener('input', function() {
            var img = document.getElementsByClassName('cover');
            var width = "25%";
            
            if(input.value)
                width = 100 / input.value + "%";
            
            for (var i = img.length - 1; i >= 0; i--) {
                img[i].style.width = width;
            };
        });
    }
	

    
    console.log(width() +" X " + height())
}