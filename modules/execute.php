<?php

//echo "<br>---------------------------Module EXECUTE";

/////////////////////////////////////////////////////////
function ExecuteMethod($pMethod, $pP1, $pP2, $pP3){
   $err=0;
   global $res;

    switch ($pMethod){
        case "lcase":
            $res=strtolower($pP1);
            //echo "executeMethod". $response;
            break;
        case "ucase":
            $res=strtoupper($pP1);
            //echo "executeMethod". $response;
            break;

    }
    return $err;
}

///////////////////////////////////////////////////////////

if ($err==0) {
    $err=ExecuteMethod($method, $p1,$p2, $p3);
}


?>