
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="description" content="A contact form for your own website - create your own contact form quickly and easily - with anti-spam protection and, of course, completely free!" />
<meta name="keywords" content="TXT_kewy" /> 
<meta name="author" content="Author" /> 
<script src='//www.google.com/recaptcha/api.js'></script>
<style type="text/css">
	body {
		zoom: 1;
		padding: 10px;
		padding-top: 0;
  		background-color: #ffffff;
  		font-family: Arial, sans-serif;
		color: #000000;
		font-size: 12px;
	}	
	
	p, td{
		margin: 8px 0 0 0; 
		border: 0px;
	}
	
	p.formklein{
		margin: 5px 0 0 0;
		font-family: Arial, sans-serif;
		color: #000000;
		font-size: 10px;
	}

	input, textarea {
		width: 100%;
	}

	textarea {
		height: 102px;
	}

	input.form, input.formsubmit, select.form, option.form, textarea.form, input.captcha {
		color: #000000;
		font-size: 12px;
		border: 1px solid #C8C8C8;
		padding: 2px;
		background: #fafafa url(layout/img04.gif) repeat-x;
		margin:0px;
		margin-top: 5px;
		font-family: Arial, sans-serif;
	}

	input.form:hover, input.form:focus, select.form:hover, textarea.form:hover, select.form:focus, textarea.form:focus {
		border: 1px solid #000000;
	}

	input.radio {
		width: auto;
	}

	option.form	{
		padding: 0px;
		width: auto;
		border: 0px;
	}

	input.formsubmit {
		width: 115px;
		margin-left: 3px;
		cursor: pointer;
	}

	input.captcha{
		width: 60px;
		margin-left: 15px;
		margin-right: 0px;
	}	
	
	p.error	{
		background: #ffffff url(layout/delete.png) no-repeat;
		height: 30px;
		padding-left: 45px;
		padding-top: 10px;
		margin: 10px 10px -5px 10px;
		color: #ce2c09;
	}
	span.error2	{
		color: #ce2c09;
		background: #ffd4d9 !important;
	}
	p.success	{
		background: #ffffff url(layout/check.png) no-repeat;
		height: 30px;
		padding-left: 45px;
		padding-top: 10px;
		margin: 10px 10px -5px 10px;
		color: #248200;
	}

	input[type=submit]{
		margin-top: 0;
	}
	
	.highlight	{
		border: 1px solid #ce2c09 !important;
		background: #ffd4d9 !important; 
	}
	
	#bottom{
		text-align: center;
	}
</style>
<title>A free contact form for your website - Foxyform.com</title>
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-17691221-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
</head>
<body>
			<div class="form">
				<form accept-charset="utf-8" action="form.php?id=923186&mail=send&sec_hash=dee21e1344d&PHPSESSID=0b45587a3c4ed81c03a5dc0f8423a733" method="post" style="width: 100%;" novalidate><input type="hidden" name="c563580e62040373f952706438f0fdda1b982293" value="2c0fa37e5384768af04022689eb713fbdb3e739bdcf3c59492ebebc8d26a6fa8" /><p class="form">Name:  <br /><input type="text" class="form"  name="name" value="" /></p><p class="form">E-Mail: <span style="font-weight: bolder; color: red;">*</span> <br /><input type="email" class="form"  name="email" value="" /></p><p class="form">Message: <span style="font-weight: bolder; color: red;">*</span> <br /><textarea name="nachricht" rows="9" class="form"></textarea></p><div class="g-recaptcha" data-sitekey="6LfgNfoSAAAAABItyuRsaNmRFAs4peXVJxT0_Cag"></div>
				<div id="bottom">
					<input type="submit" value="Send message!" class="formsubmit" /> 
					<p class="formklein">All fields marked with <span style="font-weight: bolder; color: red;">*</span> are required.</p>
				</div>
				</form>
			</div></body>
</html>