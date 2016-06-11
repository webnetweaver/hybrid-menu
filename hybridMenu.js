function initNav()
{
	mainNavEles =	$(".js-nav-toggle > li");

	if(!isMobileBrowser() && !isTabletBrowser())
	{
		mainNavEles.on("hover", function(event){
			if(event.type=="mouseenter")
			{
				clearTimeout(menuTimer);
				menuEle = $(this);
				menuTimer = setTimeout(function(){
					menuEle.addClass("hover");
					var tLabel = menuEle.children("a").data("clickEvent");
					if(typeof hoverAdConfig != 'undefined')
						findHoverAd(menuEle);
				},300);
			}
			else if(event.type=="mouseleave")
			{
				clearTimeout(menuTimer);
				menuEle.removeClass("hover");
			}
			return false;
		});
	}
	else
	{
		mainNavLinks =	$(".js-nav-toggle > li > a");

		//suppress default behavior for these links
		mainNavLinks.each(function(){
			$(this).removeAttr("onclick").on("click",function(event){
				event.preventDefault();
			});
		});

		//mouseover responds faster than click

		//kindle silk browser responds to initial element click with mouseover and click, subsequent clicks only register click
		//android browser only responds to initial element click with mouseover and subsequent clicks with click

		mainNavEles.on("mouseover", function(event){
			var oldMenuEle = menuEle || $(this);
			menuEle = $(this);
			if(menuEle.hasClass("hover"))
			{
				var aLink = menuEle.children("a");
				if(event.target==menuEle.get(0) || event.target==aLink.get(0))
				{
					document.location.href = aLink.attr("href");
				}
			}
			else
			{
				oldMenuEle.removeClass("hover");
				menuEle.addClass("hover");
				var tLabel = menuEle.children("a").data("clickEvent");
				if(typeof hoverAdConfig != 'undefined')
					findHoverAd(menuEle);
				menuOpen = true;
			}
			menuTS = event.pageX;//store mouse position for silk and android
			event.stopPropagation();
		}).on("click", function(event){//this is for mobile browsers which don't register consecutive mouseover events,
			var oldMenuEle = menuEle || $(this);

			//this is either a propagation event following mouseover, or a new subsequent click for silk or android
			//compare to previous event mouse position to determine if this event was handled already
			if(menuTS==event.pageX){event.stopPropagation();return;}
			menuEle = $(this);
			if(menuEle.hasClass("hover"))
			{
				var aLink = menuEle.children("a");
				if(event.target==menuEle.get(0) || event.target==aLink.get(0))
				{
					document.location.href = aLink.attr("href");
				}
			}
			else
			{
				oldMenuEle.removeClass("hover");
				menuEle.addClass("hover");
				var tLabel = menuEle.children("a").data("clickEvent");
				menuOpen = true;
			}
			event.stopPropagation();
		});

		//capture clicks in the document to  the menu if it's currently open
		$(document).on("mouseover", function(event) {
			if(menuOpen)//menu is open
			{
				if (!$(event.target).closest('#js-nav-toggle', document.getElementById("js-nav-toggle")).length) 
				{
					//not from the menu
					menuEle.removeClass("hover");
					menuOpen = false;
				}
			}
		}).ready(function(){//for safari ios which only bubbles events on elements with cursor = "pointer"
			document.getElementById("container").style.cursor = "pointer";
			document.getElementById("global_header").style.cursor = "pointer";
		});

	}
}