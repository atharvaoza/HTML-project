
    // Declared images as an array
    let myImagesArray = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];

   //Here's the image slide builder
     let lowerLimit = 0;
     let upperLimit = myImagesArray.length - 1;

      //setInterval('changeImage(-1)',1000)
      function changeImage(direction) {
        lowerLimit = lowerLimit + direction;
        if (lowerLimit > upperLimit) {
          lowerLimit = 0;
        }
        if (lowerLimit < 0) {
          lowerLimit = upperLimit;
        }
        document.getElementById('slideshow').src = myImagesArray[lowerLimit];
      }

