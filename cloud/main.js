
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("getCarers", function(request,response)
{
    //var user = new Parse.User();
    //user.id = request.params.clientid;
    var query = new Parse.Query("Relationship");
    //query.include('clientId');
    //query.equalTo("clientId", user);
    query.find(
    {
        success: function(results)
        {  var ids = [];
           for ( var i = 0; i < results.length; ++i )
           {
               ids.push({'carerId':results[i].get('carerId')});
           }
           response.success(ids);
        },
        error: function(error)
        {
           console.log(error)
           response.error(error);
        }
    });
});