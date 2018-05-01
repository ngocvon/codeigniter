<!DOCTYPE html>
<html>
<head>
	<?php $this->load->view('site/head') ?>
</head>
<body>
	<div class="wrapper">
		<div id="header"><?php $this->load->view('site/layout/header'); ?></div>
		<div id="container">
			<div class="left">
				<?php $this->load->view('site/layout/left'); ?>
			</div>
			<div class="content">
				<?php $this->load->view($temp); ?>
			</div>
			<div class="right">
				<?php $this->load->view('site/layout/right'); ?>
			</div>
		</div>
		<center>
			<img src="<?php echo public_url()?>site/images/bank.png"> 
		</center>
		<div id="footer">
			<?php $this->load->view('site/layout/footer'); ?>
		</div>
	</div>
	<a href="#" id="back_to_top">
		<img src="<?php echo public_url()?>site/images/top.png">
	</a>
</body>
</html>

