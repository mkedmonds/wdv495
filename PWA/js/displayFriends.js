$(document).ready(function() {
  
    //alert("JQUERY WORKING");
    //console.log("JQUERY WORKING");
  
    $("#pP").hide();
    $("#pN").hide();
    $("#aD").hide();
    //$("#mobileNav").hide();

   $("#hamBurger").click(function() {
       $("#mobileNav").toggle();
   });

   

    //$("#changeContent").show();

    // let friendContact = JSON.parse(window.localStorage.getItem("FriendsInfo"));

    // console.log(friendContact)

    // $.getJSON("js/friends.json",function(json) {
    //     console.log(json);
    //     alert(json);
    // });

    //AMY'S PROFILE

    $("#amyA").click(function() {
        
        
        //alert("YOU CLICKED AMY");
        $("#changeContent").hide();

        $.getJSON("js/friends.json",function(json) {
            //console.log(json[0].Amy);
            //alert(json);

            $("#changeName").html(json[0].Amy.name);

            $("#pP").show();

            $("#pN").show();
            $("#aD").show();

            $("#profilePic").html("<img src='" + json[0].Amy.img + "'></img>")
            $("#phoneNumber").html(json[0].Amy.phone);
            $("#address").html(json[0].Amy.address);
        });
    });

    //JESSE'S PROFILE

    $("#jesseJ").click(function() {
        //alert("YOU CLICKED Jesse");

        

        $("#changeContent").hide();

        $.getJSON("js/friends.json",function(json) {
            //console.log(json[0].Jesse);
            //alert(json);

            $("#changeName").html(json[0].Jesse.name);

            $("#pP").show();
            $("#pN").show();
            $("#aD").show();


            $("#profilePic").html("<img src='" + json[0].Jesse.img + "'></img>")
            $("#phoneNumber").html(json[0].Jesse.phone);
            $("#address").html(json[0].Jesse.address);
        });
    });

    //MARI'S PROFILE

    $("#mariM").click(function() {
        //alert("YOU CLICKED Mari");

        

        $("#changeContent").hide();

        $.getJSON("js/friends.json",function(json) {
            //console.log(json[0].Mari);
            //alert(json);

            $("#changeName").html(json[0].Mari.name);

            $("#pP").show();
            $("#pN").show();
            $("#aD").show();

            $("#profilePic").html("<img src='" + json[0].Mari.img + "'></img>")
            $("#phoneNumber").html(json[0].Mari.phone);
            $("#address").html(json[0].Mari.address);
        });
    });

    //NOODLE'S PROFILE

    $("#noodleN").click(function() {
        //alert("YOU CLICKED Noodle");

      

        $("#changeContent").hide();

        $.getJSON("js/friends.json",function(json) {
            //console.log(json[0].Noodle);
            //alert(json);

            $("#changeName").html(json[0].Noodle.name);

            $("pP").show();
            $("#pN").show();
            $("#aD").show();

            $("#profilePic").html("<img src='" + json[0].Noodle.img + "'></img>")
            $("#phoneNumber").html(json[0].Noodle.phone);
            $("#address").html(json[0].Noodle.address);
        });
    });

    //OLIVE'S PROFILE
  
    $("#oliveO").click(function() {
        //alert("YOU CLICKED Olive");

        

        $("#changeContent").hide();

        $.getJSON("js/friends.json",function(json) {
            //console.log(json[0].Olive);
            //alert(json);

            $("#changeName").html(json[0].Olive.name);

            $("#pP").show();
            $("#pN").show();
            $("#aD").show();

            $("#profilePic").html("<img src='" + json[0].Olive.img + "'></img>")
            $("#phoneNumber").html(json[0].Olive.phone);
            $("#address").html(json[0].Olive.address);
        });
    });


});