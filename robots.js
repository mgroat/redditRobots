javascript:$(".author").each(function(){
    if(!$(this).attr("robotified")) {
        $(this).append(
            "<img src='https://robohash.org/"+$(this).text()+".png?size=60x60&set=any'>"
        );
        $(this).attr("robotified",true);
    }
})