var client = require('cheerio-httpcli');


// var url = "http://www.ajou.ac.kr/main/life/food.jsp?date=2018-11-14";
var url = "http://www.ajou.ac.kr/main/life/food.jsp";

var params = {};

client.fetch(url, params, function(err, $, res){
    if(err){console.log("Error : " + err); return;};
    
    $('.ajou_table li').each(function(idx){
        // var li = $(this).text();
        var li = $(this).html();
        console.log(li);
    })
})