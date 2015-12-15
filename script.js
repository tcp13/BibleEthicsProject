var topic = "topic";
var topicUnder = "topic_";
var topicPlus = "topic+";

$(window).load(function()
{
    toHome();
    
    precache();
    
    $("#toHome").click(toHome);
    $("#toBible").click(toBible);
    $("#toBible2").click(toBible2);
    $("#toGospel").click(toGospel);
    $("#toOthers").click(toOthers);
    $("#toWise").click(toWise);
});



function toHome()
{
    $("#title").fadeOut(function() {
        $(this).text("The Bible Ethics Project")
    }).fadeIn(2000);
    
    $("#bgHome").animate({opacity: 1}, 2000);
    $("#bgBible").animate({opacity: 0}, 2000);
    $("#bgBible2").animate({opacity: 0}, 2000);
    $("#bgOthers").animate({opacity: 0}, 2000);
    $("#bgGospel").animate({opacity: 0}, 2000);
    $("#bgWise").animate({opacity: 0}, 2000);
    
    $("#homeContent").show(2000);
    $("#bibleContent").hide(2000);
    $("#bible2Content").hide(2000);
    $("#othersContent").hide(2000);
    $("#gospelContent").hide(2000);
    $("#wiseContent").hide(2000);
}

function toBible()
{
    $("#title").fadeOut(function() {
        $(this).text("Does the Bible specifically address " + topic + "?")
    }).fadeIn(2000);
    
    $("#bgHome").animate({opacity: 0}, 2000);
    $("#bgBible").animate({opacity: 1}, 2000);
    $("#bgBible2").animate({opacity: 0}, 2000);
    $("#bgOthers").animate({opacity: 0}, 2000);
    $("#bgGospel").animate({opacity: 0}, 2000);
    $("#bgWise").animate({opacity: 0}, 2000);

    $("#homeContent").hide(2000);
    $("#bibleContent").show(2000);
    $("#bible2Content").hide(2000);
    $("#othersContent").hide(2000);
    $("#gospelContent").hide(2000);
    $("#wiseContent").hide(2000);
}

function toBible2()
{
    $("#title").fadeOut(function() {
        $(this).text("Is " + topic + " addressed by other Biblical principles and commands?")
    }).fadeIn(2000);
    
    $("#bgHome").animate({opacity: 0}, 2000);
    $("#bgBible").animate({opacity: 0}, 2000);
    $("#bgBible2").animate({opacity: 1}, 2000);
    $("#bgOthers").animate({opacity: 0}, 2000);
    $("#bgGospel").animate({opacity: 0}, 2000);
    $("#bgWise").animate({opacity: 0}, 2000);
    
    $("#homeContent").hide(2000);
    $("#bibleContent").hide(2000);
    $("#bible2Content").show(2000);
    $("#othersContent").hide(2000);
    $("#gospelContent").hide(2000);
    $("#wiseContent").hide(2000);
}

function toOthers()
{
    $("#title").fadeOut(function() {
        $(this).text("Would " + topic + " cause other Chrisitians to violate their convictions?")
    }).fadeIn(2000);
    
    $("#bgHome").animate({opacity: 0}, 2000);
    $("#bgBible").animate({opacity: 0}, 2000);
    $("#bgBible2").animate({opacity: 0}, 2000);
    $("#bgOthers").animate({opacity: 1}, 2000);
    $("#bgGospel").animate({opacity: 0}, 2000);
    $("#bgWise").animate({opacity: 0}, 2000);
    
    $("#homeContent").hide(2000);
    $("#bibleContent").hide(2000);
    $("#bible2Content").hide(2000);
    $("#othersContent").show(2000);
    $("#gospelContent").hide(2000);
    $("#wiseContent").hide(2000);
}

function toGospel()
{
    $("#title").fadeOut(function() {
        $(this).text("Would " + topic + " impact someone's ability to spread the gospel?")
    }).fadeIn(2000);
    
    $("#bgHome").animate({opacity: 0}, 2000);
    $("#bgBible").animate({opacity: 0}, 2000);
    $("#bgBible2").animate({opacity: 0}, 2000);
    $("#bgOthers").animate({opacity: 0}, 2000);
    $("#bgGospel").animate({opacity: 1}, 2000);
    $("#bgWise").animate({opacity: 0}, 2000);
    
    $("#homeContent").hide(2000);
    $("#bibleContent").hide(2000);
    $("#bible2Content").hide(2000);
    $("#othersContent").hide(2000);
    $("#gospelContent").show(2000);
    $("#wiseContent").hide(2000);
}

function toWise()
{
    $("#title").fadeOut(function() {
        $(this).text("Is " + topic + " wise?")
    }).fadeIn(2000);
    
    $("#bgHome").animate({opacity: 0}, 2000);
    $("#bgBible").animate({opacity: 0}, 2000);
    $("#bgBible2").animate({opacity: 0}, 2000);
    $("#bgOthers").animate({opacity: 0}, 2000);
    $("#bgGospel").animate({opacity: 0}, 2000);
    $("#bgWise").animate({opacity: 1}, 2000);
    
    $("#homeContent").hide(2000);
    $("#bibleContent").hide(2000);
    $("#bible2Content").hide(2000);
    $("#othersContent").hide(2000);
    $("#gospelContent").hide(2000);
    $("#wiseContent").show(2000);
}

function precache()
{
    var bgArray = [
        '/images/home.jpg',
        '/images/bible.jpg',
        '/images/bible2.jpg',
        '/images/gospel.jpg',
        '/images/others.jpg',
        '/images/wise.jpg'
    ]
    
    $.each(bgArray, function(){
        var img = new Image();
        img.src = this;
    });
}

function setTopic()
{
    topic = document.getElementById("topicIn").value;
    topicUnder = topic.replace(/ /g,"_");
    topicPlus = topic.replace(/ /g,"+");
    
    $(".topic").html(topic);
        
    $("#gatewayLink").attr("href", "https://www.biblegateway.com/quicksearch/?quicksearch=" + topicPlus + "&qs_version=NIV");
    $("#esvLink").attr("href", "http://www.esvbible.org/search/?q=" + topicPlus);
    $("#allLink").attr("href", "http://www.biblestudytools.com/search/?s=bibles&q=" + topicPlus + "&t=&c=all");
    
    $("#openbibleLink").attr("href", "http://www.openbible.info/topics/" + topicUnder);
    $("#allrefLink").attr("href", "http://www.biblestudytools.com/search/?s=references&q=" + topicPlus + "&rc=");
    
    toBible();
}

function setTopic1()
{
    topic = "abortion";
    
    $(".topic").html("abortion");
    
    $("#gatewayLink").attr("href", "https://www.biblegateway.com/quicksearch/?quicksearch=abortion&qs_version=NIV");
    $("#esvLink").attr("href", "http://www.esvbible.org/search/?q=abortion");
    $("#allLink").attr("href", "http://www.biblestudytools.com/search/?s=bibles&q=abortion&t=&c=all");
    
    $("#openbibleLink").attr("href", "http://www.openbible.info/topics/abortion");
    $("#allrefLink").attr("href", "http://www.biblestudytools.com/search/?s=references&q=abortion&rc=");
    
    toBible();
}

function setTopic2()
{
    topic = "homosexuality";
    
    $(".topic").html("homosexuality");
    
    $("#gatewayLink").attr("href", "https://www.biblegateway.com/quicksearch/?quicksearch=homosexuality&qs_version=NIV");
    $("#esvLink").attr("href", "http://www.esvbible.org/search/?q=homosexuality");
    $("#allLink").attr("href", "http://www.biblestudytools.com/search/?s=bibles&q=homosexuality&t=&c=all");
    
    $("#openbibleLink").attr("href", "http://www.openbible.info/topics/homosexuality");
    $("#allrefLink").attr("href", "http://www.biblestudytools.com/search/?s=references&q=homosexuality&rc=");
    
    toBible();
}

function setTopic3()
{
    topic = "marriage";
    
    $(".topic").html("marriage");
    
    $("#gatewayLink").attr("href", "https://www.biblegateway.com/quicksearch/?quicksearch=marriage&qs_version=NIV");
    $("#esvLink").attr("href", "http://www.esvbible.org/search/?q=marriage");
    $("#allLink").attr("href", "http://www.biblestudytools.com/search/?s=bibles&q=marriage&t=&c=all");
    
    $("#openbibleLink").attr("href", "http://www.openbible.info/topics/marriage");
    $("#allrefLink").attr("href", "http://www.biblestudytools.com/search/?s=references&q=marriage&rc=");
    
    toBible();
}
