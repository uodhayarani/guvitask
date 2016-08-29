<!DOCTYPE html>
<html>
<head>
    <title>sum of Natural no</title>
</head>
<body>

<script type="text/javascript">
  
    
    function output(n){
        var i;
        var sum=0;
        for(i=1; i<=n; i++){
            sum = sum+i;
        }
        return (sum);

    }
      var num=prompt("Enter the numbers");
    var n=parseInt(num);
     result=output(n);
    document.write("The sum of "+ num + "Natural number is  "+ result);
</script>


</body>
</html>
