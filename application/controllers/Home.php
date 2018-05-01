<?php
	CLass Home extends CI_Controller
	{
		// xu ly database
		function index()
		{
			// dau tien se chay file nay truoc 
			$data = array();
			// each page have TEMP khac nhau
			$data['temp'] = 'site/home/index';
			$this->load->view('site/main_layout',$data);
			
		}
		function test2(){
			$data = array();
			// each page have TEMP khac nhau
			$data['temp'] = 'site/home/test2';
			$this->load->view('site/main_layout',$data);	
		}
		function user(){
			$this->load->model('user_model');
			$user = $this->user_model->get_list();
			echo'<pre>';
			print_r($user);
		}
		function create_user(){
			$this-> load->model('user_model');
			$this->user_model->create();
		}
		function update_user(){
			$this-> load->model('user_model');
			$user_id = 1;
			$this->user_model->update($user_id);
		}
		function delete_user(){
			$this-> load->model('user_model');
			$this->user_model->delete();
		}
		function test(){
			$controller = $this->uri->segment(1);
			$action = $this->uri->segment(2);
			$id= $this->uri->segment(3);
			echo 'xin chao function text:' .$controller. ',Action:' .$action. ',ID' .$id ;
		}
		function view(){
			$data= array();
			$data['title']='xin chao';
			$data['product'] = array('name' => 'Nokia','price' => '1000');
			$this->load->view('site/home/view', $data);
		}

	}
?>
