<!DOCTYPE html SYSTEM "about:legacy-compat">
<!-- 
/*
    
Oxygen WebHelp Plugin
Copyright (c) 1998-2017 Syncro Soft SRL, Romania.  All rights reserved.

*/
-->
<html lang="en-US">
<head>
    <title>&lt;oXygen/&gt; XML Editor - WebHelp</title>
    <meta name="Description" content="WebHelp Installer"/>
    <META HTTP-EQUIV="CONTENT-LANGUAGE" CONTENT="en-US"/>
    <link rel="stylesheet" type="text/css" href="install.css"/>
</head>
<?php include('../config/config.php'); ?>
<body>
<div id="logo">
    <img src="../../resources/img/LogoOxygen100x22.png" align="middle" alt="OxygenXml Logo"/>
    WebHelp Installer
</div>
<h1 class="centerH">
    Installation Settings for
    <span class="titProduct"><?php echo __PRODUCT_NAME__; ?></span>&nbsp;<span class="titProduct"><?php echo __PRODUCT_VERSION__; ?></span>
</h1>
<form action="index1.php" method="post" name="form" id="doInstallData">

    <div class="panel"><p>Welcome to the WebHelp Installer! It will setup the
            database for WebHelp feedback system and create an appropriate config
            file. In some cases a manual installation cannot be avoided.</p>
        <p>There is an initial Check for (minimal) Requirements appended down
            below for troubleshooting. A MySql database connection must be
            available and ../resources/php/config.php must be
            writable for the webserver!</p>
    </div>
    <?php include('check.php'); ?>

</form>

</body>
</html>
