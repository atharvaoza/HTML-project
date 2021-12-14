let closebtn = document.getElementsByClassName("close");
let i;

for(i = 0; i < closebtn.length; i++)
{
    closebtn[i].addEventListener("click", function()
    {
        this.parentElement.style.display = 'none';
    });
}