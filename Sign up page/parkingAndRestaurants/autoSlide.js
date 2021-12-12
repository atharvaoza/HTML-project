// Declared images as an array
    let myRestaurantsArray = ["images/1r.jpg","images/2r.jpg","images/3r.jpg","images/4r.jpg","images/5r.jpg","images/6r.jpg"];

// code to make an automatic slide

    let ImageNumber = 0;
    let difference = myRestaurantsArray.length -1;

    let delay = 2000; //milliseconds    1sec=1000milliseconds

    setInterval("ChangeImages(-1)", delay);
    //-1 to show the slide backwards
    //1 to show the slide forwards

    function ChangeImages(direction)
    {//begin function
        
		ImageNumber = ImageNumber + direction;

		if(ImageNumber > difference)
		{//begin inner first if
			ImageNumber = 0;
		}//end inner first if

		if(ImageNumber < 0)
		{//begin inner second if
			ImageNumber = difference;
		}//end inner second if
		//document.slideshow.src = myRestaurantsArray[ImageNumber];
		document.getElementById('food_slideshow').src = myRestaurantsArray[ImageNumber];
    }