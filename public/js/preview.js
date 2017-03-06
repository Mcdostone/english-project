
window.onload = function() {

	var preview = document.getElementById('preview');
	var widthScreen = width()
    var heightScreen = height();

    //var input_width_cover = document.getElementById('input-width-cover');
    //var input_height_cover = document.getElementById('input-height-cover');

	//var widthCover = parseInt(input_width_cover.value), heightCover = parseInt(input_height_cover.value);

	if(preview) {
		console.log(preview.style.width  + " - " + preview.style.height);
		console.log(preview);
	}
	
}
