<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
header("Content-Type: application/json; charset=UTF-8");

?>

<?php


class WebServiceReader {

	private $postdata;
	private $request;
	private $mysqli;


	public function __construct() {
		$this->postdata = file_get_contents("php://input");
		$this->request = json_decode($this->postdata);

	}

	public function initializeConnection() {
		$this->mysqli = new mysqli("fake", "fake", "fake", "fake");

		if (mysqli_connect_errno()) {
	        printf("Connect failed: ", mysqli_connect_error());
	        exit();
    	}
	}

	public function addToDatabase() {
		$this->initializeConnection();

		$first = $this->mysqli->escape_string($this->request->first);
		$phone = $this->mysqli->escape_string($this->request->phone);
		$email = $this->mysqli->escape_string($this->request->email);
		$message = $this->mysqli->escape_string($this->request->message);

		if($this->mysqli->query("INSERT into users (fullname,phone,email,message) VALUES ('$first', '$phone', '$email', '$message')")){
			$res = true;
		}

		else {
			$res = false;
		}

		return $res;

	}


	public function encodeResponse() {

		$result = $this->addToDatabase();
		return json_encode($result);
	}

}

$serviceObj = new WebServiceReader();
echo $serviceObj->encodeResponse();
?>