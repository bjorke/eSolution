
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var mainmenu = {};	// @menuItem
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	mainmenu.click = function mainmenu_click (event)// @startlock
	{// @endlock
		prompt("en ruta som kommer upp här");
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		alert ("thanks for being here"); 
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		alert ("success"); 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("mainmenu", "click", mainmenu.click, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
