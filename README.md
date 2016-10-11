# redditRobots
A bookmarklet to add unique icons to each user on a Reddit discussion
[Copy this to a bookmark](function robotify(){javascript:$(".author").each(function(){if(!$(this).attr("robotified")){$(this).append("<img src='https://robohash.org/"+$(this).text()+".png?size=60x60&set=any'>");$(this).attr("robotified",!0)}})}
setInterval(robotify,1000))