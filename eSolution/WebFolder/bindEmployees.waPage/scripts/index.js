
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid2 = {};	// @dataGrid
	var dataGrid1 = {};	// @dataGrid
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid2.onCellClick = function dataGrid2_onCellClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	dataGrid1.onCellClick = function dataGrid1_onCellClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
// Create the association
    sources.employee.employer.set( sources.company ); 
// Save the employee
    sources.employee.save();
    
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid2", "onCellClick", dataGrid2.onCellClick, "WAF");
	WAF.addListener("dataGrid1", "onCellClick", dataGrid1.onCellClick, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
