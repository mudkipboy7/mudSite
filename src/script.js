/*
	Functions
*/
// Makes it go to the next line
function ln(){
	document.write("<br>");
}
// Draws a header
function header(string,size){
	document.write("<h1 style=font-size:" + size + ";>" + string + "</h1>");
}

// Draws the name of a site
function siteName(string){
	document.write("<v style=font-size:20px>" + string + "</v>");
	ln();
}

// Draws a site link
function siteLink(string, lnk){
	document.write("<a style=font-size:20px href=" + lnk + ">" + string + "</a>");
	ln();
	ln();
}



/*
	Actual code
*/

// The title
header("mudkipboy7's Website", "60px");
	header("Links:", "40px");
		siteLink("Youtube", "https://www.youtube.com/channel/UCrXtqEWE-T7JZhUWKnb9gSg");
		siteLink("Twitter", "https://twitter.com/mudkipboy7");
		siteLink("Reddit", "https://reddit.com/u/mudkipboy7");
		siteLink("GitHub", "https://github.com/mudkipboy7");
		siteLink("Twitch", "https://twitch.tv/mudkipboy7");


