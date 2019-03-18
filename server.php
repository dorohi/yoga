<?php 
for ($i=0; $i < 100000000; $i++) { 
	$i++;
}
echo $_SERVER[‘REMOTE_ADDR‘];