$.ajax({
    url:'http://services.odata.org/V4/Northwind/Northwind.svc/Products?$select=ProductName',
    //url:'https://cfcorsdemo.azurewebsites.net/api/values',
    success: function(data) {
        console.log(data.value);
    }
});

/*$.get('https://cfcorsdemo.azurewebsites.net/api/values',
    function(data) {
        console.log(data);
    }
);*/

/*$.post(
    'https://cfcorsdemo.azurewebsites.net/api/values',
    {value:"value"},
    function(data) {
        console.log(data);
    }
);*/