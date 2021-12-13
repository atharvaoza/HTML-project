let imgArray = ["images/Canadian-Opera-Company.jpg","images/bicycleView.jpg"
                ,"images/image.jpg","images/shoes.jpg","images/party.jpeg","images/rhye.jpg"]

let imgNumber = 0;
let diff = imgArray.length - 1;

let delay = 2000;

// setInterval("ChangeImage(-1)", delay);

function ChangeImage(direction)
{
    imgNumber = imgNumber + direction;
    if(imgNumber > diff)
    {
        imgNumber = 0;
    }

    if(imgNumber < 0)
    {
        imgNumber = diff;
    }

    document.getElementById('slideshow').src = imgArray[imgNumber];
}

// ======================================================================

let acc = document.getElementsByClassName("accordion");
let i;

for(i = 0; i < acc.length; i++)
{
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if(panel.style.display === "block")
        {
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }
    })
}

// ======================================================================

$(document).ready( () => 
            $("#accordion").accordion({ 
                heightStyle: "content",
                collapsible: true 
            })
        )