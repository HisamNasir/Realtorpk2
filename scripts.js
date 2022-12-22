var a = document.getElementById("city");
var b = document.getElementById("property");
var c = document.getElementById("price");
var selectedcity = a.option[a.selectIndex].text;
var selectedproperty = b.option[b.selectIndex].text;
var selectedprice = c.option[c.selectIndex].text;
function firstsectionsearchbtn(){
    console.log(selectedcity);
};
