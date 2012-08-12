<?php
// Include the class
include_once("stanford.fileupload.php");
 
// Create a new StanfordFileUpload using the name of the form field associated with the file
$file = new StanfordFileUpload("file");
 
// Set the max filesize (in KB) and allowed extensions
$file->set_max_filesize(1024); // 1 MB
$file->set_allowed_extensions("pdf");

// Change the filename (in this case, we are using a the time)
$timestamp = date('ymd_H-i-s');

$file->set_filename("$timestamp.pdf");

// Default setting is to display the form
$display_form = true;
 
// If the file has been uploaded
if($file->has_been_uploaded() == true) {
 
  // Set the save directory (directory must exist)
  $file->set_save_directory("/afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/unnamed");
 
  // Try to save the file
  if($file->save() == true) {
 
    system("python /afs/ir/users/a/l/alexoz/cgi-bin/python/pdfminer/pdf2txt.py -o /afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/unnamed/$timestamp.txt /afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/unnamed/$timestamp.pdf");
    //$pdf_text = str_replace("\n", " ", file_get_contents("/afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/unnamed/$timestamp.txt"));
    $pdf_text = file_get_contents("/afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/unnamed/$timestamp.txt");
    $student_name_array = explode("Academic", $pdf_text);
    $student_name = str_replace(" ", "_", strtolower($student_name_array[0]));
    $timestamp_student_name = $timestamp."_".$student_name;

    //copy pdf and txt files such that they include the student's name.
    copy("/afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/unnamed/$timestamp.pdf", "/afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/named/$timestamp_student_name.pdf");
    copy("/afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/unnamed/$timestamp.txt", "/afs/ir/users/a/l/alexoz/uploads/advising/four_year_plans/named/$timestamp_student_name.txt");

    print json_encode(array(
    "pdf_text"  =>  $pdf_text    // Parsed text from four year plan pdf file
    ));

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