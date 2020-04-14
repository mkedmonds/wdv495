<?php

    $candyProject = array(

        "laffyTaffy"=>array(
            "candy_description"=>"How do you make holy water? You boil the hell out of it!",
            "candy_price"=>2.99,
            "candy_img"=>"laffyTaffy.jpg"
        ),

        "twix"=>array(
            "candy_description"=>"The best candy!",
            "candy_price"=>2.35,
            "candy_img"=>"twix.jpg"
        ),

        "candyCorn"=>array(
            "candy_description"=>"Cuz Halloween!! ¯\_(ツ)_/¯",
            "candy_price"=>5.55,
            "candy_img"=>"candyCorn.jpg"
        )

     );
     
     $candyJSON = json_encode($candyProject);

     echo $candyJSON;

?>