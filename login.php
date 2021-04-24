<?php
$errors=array();
$form_data=array();

if($POST['username']!=""){
    $form_data['success']=false;
    $form_data['errors']='Name cannot be blank';
    $username=$POST['username'];
    $password=$POST['password'];
}

if ((($POST['password'])== 'lab123') && (($POST['username']) == 'nzh2729')) {
    $form_data['posted']='Login is successful';
    $form_data['success']=true;
    } else {
        $form_data['success']=true;
        $form_data['errors']='Login is NOT successful';
    }
echo json_encode($form_data);
?>

