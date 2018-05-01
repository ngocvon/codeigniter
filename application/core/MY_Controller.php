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

			$controller = $this->uri->rsegment(1);
			//pre($controller);
			$controller = strtolower($controller);
			$login = $this->session->userdata('login');
			// neu ma chua dang nhap , ma truy cap 1 constroller khac login
			
			if(!$login && $controller !='login'){
				redirect(admin_url('login'));
			}
			// neu ma admin da dang nhap thi khong cho phep vao trag login nua
			if($login && $controller == 'login'){
				redirect(admin_url(''));
			}
		}
	}
?>