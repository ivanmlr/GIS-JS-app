<?php

$xmlstr = <<<XML
<xml_response>
        <head>
        <date></date>
            <method>$method</method>
            <parameters>
                <p1>$p1</p1>
                <p2>$p2</p2>
            </parameters>
            <errors_info>
                <error_num>$err</error_num>
                <error_info></error_info>
        </errors_info>
        </head>
        <body>
            <response_value>$res</response_value>
        </body>
    </xml_response>
XML;



/**/


header("Content-Type:text/xml");

echo $xmlstr;

//$xml_obj =new SimpleXMLElement($xmlstr);
//echo $xml_obj->asXML();

?>