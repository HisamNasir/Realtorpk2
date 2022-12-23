function firstsectionsearchbtn(){
    var a = document.getElementById("city");
    var b = document.getElementById("property");
    var c = document.getElementById("price");

    var option1 = a.options[a.selectedIndex].text;
    var option2 = b.options[b.selectedIndex].text;
    var option3 = c.options[c.selectedIndex].text;

    console.log("Your Selected City is: ",option1);
    console.log("Your Selected Project Type is: ", option2);
    console.log("Your Selected Price is: ", option3);



}       
   