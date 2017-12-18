<?php
	require_once 'jssdk.php';
	$jssdk = new JSSDK("wx828667a21446cb0d", "42d4adc3467ccd25e75212ddd037969e");
	$signPackage = $jssdk->GetSignPackage($_POST['url']);
	echo json_encode($signPackage);
?>