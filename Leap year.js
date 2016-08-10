<!DOCTYPE html>
<html>
<head>
	<title>Leap year</title>
</head>
<body>
<script type="text/javascript">
   var x;
   x=prompt("Enter the char");
	
	if(x%4==0 || x%400==0)
	{
		document.write(" This year is Leap ");
	}
	else{
		document.write("This year is not Leap");
	}
</script>
</body>
</html>
