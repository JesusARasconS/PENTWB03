/*$('#results').load('https://cfcorsdemo.azurewebsites.net/api/values');*/
/*$.get('https://cfcorsdemo.azurewebsites.net/api/values',
    function(data) {
        console.log(data);
    }
);*/

/*$.get('http://services.odata.org/V4/Northwind/Northwind.svc/Products?$select=ProductName',
    function(data) {
        console.log(data);
    }
);*/

$.get('http://services.odata.org/V4/Northwind/Northwind.svc/Products?$select=ProductName').then(
    function(data) {
        console.log("get with then " + data);
		console.log(data);
    });