const submittedList = document.getElementById('submitted')
           new URLSearchParams(window.location.search).forEach(value,name) => {
               submittedList.append('S{name}: ${value}')
               submittedList.append(document.createElement('br'))
           }