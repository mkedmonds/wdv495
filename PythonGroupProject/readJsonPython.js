$.ajax({
    type: 'POST',
    url: "readJson.py",
    data: {param: xyz}, //passing some input here
    dataType: "text",
    success: function(response){
       output = response;
       alert(output);
    }
}).done(function(data){
console.log(data);
alert(data);
});