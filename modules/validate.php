<?php

//echo "<br>--------------------Módulo VALIDATE";
/* Validar si el método existe*/

//////////////////////////////////////////////////////
function _ValidateMethodExists($pMethod){

    //echo "<br>:::::function _ValidateMethodExists<br>";

    $method_list = array('lcase', 'ucase', 'reverse', 'sumar');

    if (in_array($pMethod, $method_list, TRUE)) {
        return 0;
    } else {
        return 5001;
    };
};
//////////////////////////////////////////////////////
function _ValidateParamsForThisMethod($pMethod, $pP1,$pP2){
    $err=99999999;
    switch ($pMethod){
        case "lcase":
            $err=ValidString($pP1);
            break;
        case "ucase":
            $err=ValidString($pP1);
            break;
        case "suma":

            break;
    }

    return $err;
};
//////////////////////////////////////////////////////

$err= _ValidateMethodExists($method);

if ($err==0){
   $err= _ValidateParamsForThisMethod($method,$p1,$p2);
}











?>