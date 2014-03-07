
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid1.onCellClick = function dataGrid1_onCellClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid1", "onCellClick", dataGrid1.onCellClick, "WAF");
// @endregion
};// @endlock
