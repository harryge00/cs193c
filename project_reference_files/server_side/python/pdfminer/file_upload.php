<?php
$text = 'HEADING';

// Include the class
include_once("stanford.fileupload.php");
 
// Create a new StanfordFileUpload using the name of the form field associated with the file
$file = new StanfordFileUpload("my_file");
 
// Set the max filesize (in KB) and allowed extensions
$file->set_max_filesize(1024); // 1 MB
$file->set_allowed_extensions("pdf");
 
// Default setting is to display the form
$display_form = true;
 
// If the file has been uploaded
if($file->has_been_uploaded() == true) {
 
  // Set the save directory (directory must exist)
  $file->set_save_directory(dirname(__FILE__) . "/../uploads/");
 
  // Try to save the file
  if($file->save() == true) {
 
    // Display a success message
    echo "<p>File upload complete!</p>\n";
    exec('python pdfminer/pdf2text.py planner.pdf', $output, $ret_code);
    $x = array (3,2,4,5);
    foreach($x as $element) {
      echo $element.'<br />';
    }
    // Don't display the form
    $display_form = false;
 
  }
 
  // If the file did not pass validation, it was not saved..
  else {
 
    // Display the list of errors
    $file->display_errors();
  }
}
 
// Display form
if($display_form == true) {
 
  // Must set the enctype of the form to multipart/form-data
  echo "<form action='{$_SERVER['PHP_SELF']}' method='post' enctype='multipart/form-data'>\n";
 
  // Set the MAX_FILE_SIZE value (in bytes) -- in this case, we are setting it to 1 megabyte
  echo "<input type='hidden' name='MAX_FILE_SIZE' value='" . $file->get_max_filesize_in_bytes() . "' />\n";
 
  // Create a file input field -- in this case, we are calling it "my_file" (corresponding with our StanfordFileUpload)
  echo "<p><label>Please choose an image file to upload:<br/>\n";
  echo "<input type='file' name='my_file' /></label></p>\n";
 
  // Create a submit button
  echo "<p><input type='submit' name='submit' value='Upload File' /></p>\n";
 
  // End the form
  echo "</form>\n";
 
}
?>