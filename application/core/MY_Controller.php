<?php 
	Class MY_Controller extends CI_Controller
	{
		// bien data de gui du lieu sang view
		public $data  = array();

		function __construct(){
			// ke thua tu CI_Controller 
			parent:: __construct();
			$controller = $this->uri->segment(1);
			switch ($controller) {
				case 'admin':
					$this->load->helper('admin_helper');
					$this -> _check_login();
					break;
				default:
					{
						// xu ly du lieu o trang ngoai
					}
					break;
			}
		}
		/*kiem tra trang thai dang nhap cua admin*/
		private function _check_login(){
				
		}
	}
?>