<!DOCTYPE html>
<html>
<head>
	<title>check the progrmme</title>
</head>
<body>
<p id="demo"></p>
<script>
	var x=1;
	if(x>0)
	{
		document.getElementById("demo").innerHTML= "The number is Positive";
	}
	else if(x<0)
	{
		document.getElementById("demo").innerHTML= "The number is Negative";
	}
	else {
		document.getElementById("demo").innerHTML=" The number is Zero"
	}
</script>

</body>
</html>
