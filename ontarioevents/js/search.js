let eventList = [
    {
      "name": "Rhye",
      "ticket": 50,
      "date": new Date('2017-01-03'),
      "city": "Toronto",
      "link": "info.html"
    },
    {
        "name": "Radiohead",
        "ticket": 100,
        "date": new Date('2017-01-05'),
        "city": "Toronto",
        "link": "radiohead.html"
    },
    {
        "name": "Van Gogh Exibition",
        "ticket": 100,
        "date": new Date('2017-08-03'),
        "city": "Vancouver",
        "link": "vangogh.html"
    }
]



function searchEvent() {

    let searchResult = document.getElementById("search-result");
    let city = document.getElementById("search").value;
    if(city === "") {
        searchResult.innerHTML = "<h2 class='error'>City cannot be empty</h2>"
    }
    else {

        let eventString = "";
        
        for(let i = 0; i < eventList.length; i++) {
            let obj = eventList[i];

            
            if( obj.city == city) {
                eventString += `<h2><a href="${obj.link}" class="link">${obj.name}</a></h2>`
            }
            
            
        }
        if(eventString === "") {
            searchResult.innerHTML = "<h2 class='error'>Sorry! Couldn't find any events in your city</h2>"
        }
        else {
            searchResult.innerHTML = eventString;
        }
        
        
    }
    

}