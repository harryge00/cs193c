<?php //write_text.php
if(isset($_POST['submit'])){
	header('Location: http://stanford.edu/~alexoz/advising');
	// set the default timezone to use. Available since PHP 5.1
	date_default_timezone_set('America/Los_Angeles');
	$timestamp = date("F j, Y, g:i a");
	$text=$_REQUEST['suggestions'];
	$fd=fopen("/afs/ir/users/a/l/alexoz/uploads/advising/suggestions.txt","a");
	fwrite($fd,$timestamp."\r\n\r\n".$text."\r\n\r\n\r\n");
	fclose($fd);
	$file_contents=file_get_contents("/afs/ir/users/a/l/alexoz/uploads/advising/suggestions.txt");
	print $file_contents;
}
?>