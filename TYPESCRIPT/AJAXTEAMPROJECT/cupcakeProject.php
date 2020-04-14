<?php

    /* $vanillaObject = new stdClass();
    $vanillaObject->name = "Vanilla"
    $vanillaObject->cupcake_description = "A delicious vanilla cupcake";
    $vanillaObject->cupcake_price = 4.99;
    $vanillaObject->cupcake_image = "";

    $chocolateObject = new stdClass();
    $chocolateObject->name = "Chocolate"
    $chocolateObject->cupcake_description = "A delicious chocolate cupcake";
    $chocolateObject->cupcake_price = 4.99;
    $chocolateObject->cupcake_image = "";

    $redVelvetObject = new stdClass();
    $redVelvetObject->name = "Red Velvet"
    $redVelvetObject->cupcake_description = "A delicious red velvet cupcake";
    $redVelvetObject->cupcake_price = 4.99;
    $redVelvetObject->cupcake_image = ""; */


    $cupcakeArray = array(
        "vanilla"=> 
            array(
                "cupcake_description"=>"A delicious vanilla cupcake",
                "cupcake_price"=>4.99,
                "cupcake_img"=>"vanilla.jpg"
            ), 
           
        "chocolate"=>
            array(
                "cupcake_description"=>"A delicious chocolate cupcake",
                "cupcake_price"=>4.99,
                "cupcake_img"=>"chocolate.jpg"
            ),
        "redVelvet"=>
            array(
                "cupcake_description"=>"A delicious red velvet cupcake",
                "cupcake_price"=>4.99,
                "cupcake_img"=>"redVelvet.jpg"
            )

    );

    $cupcakeJSON = json_encode($cupcakeArray);

    echo $cupcakeJSON;

    /* //Write an output file	
	$my_file = $vanillaObject->cupcake_description . ".js";
	$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $vanillaObjJSON;
	fwrite($handle, $data); */

?>