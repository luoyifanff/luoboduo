<?php
	require_once 'jssdk.php';
	$jssdk = new JSSDK("wx29104ba99c3341f5", "5d9bb003585c8ab7ddd75e8fdd5847d5");
	$signPackage = $jssdk->GetSignPackage($_POST['url']);
	echo json_encode($signPackage);
?>