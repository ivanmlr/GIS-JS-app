<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$data = 0;
$data = file_get_contents("php://input");

$error = "No input";


if ($data != 0){


    $array = array();
    // Read POST data

    $array = explode(",", $data);
    $temp = array();
    $i = 0;
    $o = 0;

    $fp = fopen('storage/locations.csv','a');
    while ($i < count($array)){
        if ($o == 3){
            $o = 0;
            fputcsv($fp, $temp);
            empty($temp);
        }
        $temp[$o] = $array[$i];
        
        $i++;
        $o++;

    }

    fclose($fp);





}
else{
    echo $error;
}

?>