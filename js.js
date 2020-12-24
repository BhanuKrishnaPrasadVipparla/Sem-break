var fruits, text, fLen, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++) {
         text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
function practice()
{
    document.getElementById("para").innerHTML="It's time for JS";
    var a;
    a=10;
    document.getElementById("para").innerHTML=a+10;
    var trip={1:"Kanyakumari",2:"Madurai",3:"Dhanush Kodi",4:"Munnar"};
    document.getElementById("para1").innerHTML=trip[1];
    var s='bhanu'
    var len=s.length;
    alert("F U")
    

    document.getElementById("demo").innerHTML = text;
}
