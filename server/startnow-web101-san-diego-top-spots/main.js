$(document).ready(function () {
    // write your code here
    $.getJSON("data.json", function (data) {
        $.each(data,function(i,item){
            $("#mytable").append("<tr><td>"+item.name+"</td><td>"+item.description+"</td><td><a href='https://www.google.com/maps?q="+item.location[0]+item.location[1]+"'>Open in Google Maps</a></td></tr>" )
            })
    } )
});


/*var namelist= [data.name];
        var deslist=[data.description];
        var location1=[data.location];
        //var location2=[];
       // for (i = 0; i < data.name.length; i++) {
         //   namelist.push(data.name[i]);
        //}
        console.log(namelist); */