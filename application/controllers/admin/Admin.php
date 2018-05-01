<?php 
	Class Admin extends MY_Controller{
		// xu ly database
		function __construct(){
			// khoi tao 1 construct cho toan ham
			parent::__construct();
			$this->load->model('admin_model');

		}
		/*
		* lay danh sach admin
		*/
		function index(){
			$input = array();
			$list = $this->admin_model->get_list($input);

			$this->data['list'] =$list;
			$total = $this->admin_model->get_total();
			$this->data['total'] = $total;
			// lay noi dung cua bien message thi phai index moi goi duoc
			$message = $this->session->flashdata('message');
			$this->data['message'] = $message;

			$this->data['temp'] = 'admin/admin/index';
			$this->load->view('admin/main', $this->data);
		}
		

		/*
		//kiem tra username da ton tai hay chua
		*/
		function check_username(){
			$username=$this->input->post('username');
			$where = array('username'=>$username);
			if($this->admin_model->check_exists($where)){
				// thong bao loi la da ton tai username nay roi
				$this->form_validation->set_message(__FUNCTION__,'tai khoang da ton tai');
				return false;
			}
			return true;
		}

		/*
		*	create form add cho admin
		*/

		function add(){
			// nam tron system 
			$this->load->library('form_validation');
			$this->load->helper('form');
			// neu co du lieu posh len thi kiem tra;
			if($this->input->post()){
				$this->form_validation->set_rules('name','ten','required|min_length[8]');
				$this->form_validation->set_rules('username','tai khoang dang nhap','required|callback_check_username');
				$this->form_validation->set_rules('password','mat khau ','required|min_length[6]');
				$this->form_validation->set_rules('re_password','nhap lai mat khau','matches[password]');
				// nhap lieu chinh xac
				if($this->form_validation->run()){
					$name=$this->input->post('name');
					$username=$this->input->post('username');
					$password=$this->input->post('password');
					$data = array(
						'name' => $name,
						'username' => $username,
						'password' => md5($password)
					);
					if($this->admin_model->create($data)){
						// tao ra noi dung thong bao
						$this->session->set_flashdata('message','Thêm mới dữ liệu thành công');
					}else{
						$this->session->set_flashdata('message','Không thêm được');
					}
					// chuyen toi trang danh sach quan tri vien
					redirect(admin_url('admin'));
				}
			}
			// load form them admin
			$this->data['temp'] = 'admin/admin/add';
			$this->load->view('admin/main', $this->data);
		}

		function edit(){
			// lay thong tin quan tri vien can chinh sua 
			$id = $this->uri->rsegment('3');
			// lay thong tin cua quan tri vien
			$info = $this->admin_model->get_info($id);
			//pre($info);
			$this->load->library('form_validation');
			$this->load->helper('form');
			if(!$info){
				$this->session->set_flashdata('message','Không tồn tại quản trị viên này');
				redirect(admin_url('admin'));
			}
			$this->data['info']= $info;

			if($this->input->post()){
				$this->form_validation->set_rules('name','ten','required|min_length[8]');
				$this->form_validation->set_rules('username','tai khoang dang nhap','required|callback_check_username');
				$password = $this->input->post('password');
				if($password){
					$this->form_validation->set_rules('password','mat khau ','required|min_length[6]');
					$this->form_validation->set_rules('re_password','nhap lai mat khau','matches[password]');
				}
				if($this->form_validation->run()){

					$name=$this->input->post('name');
					$username=$this->input->post('username');
					
					$data = array(
						'name' => $name,
						'username' => $username						
					);
					// neu thay doi mat khau thi moi gan du lieu
					if($password){
						$data['password']=md5($password);
					}
					if($this->admin_model->update($id, $data)){
						// tao ra noi dung thong bao
						$this->session->set_flashdata('message','Cập nhật dữ liệu thành công');
					}else{
						$this->session->set_flashdata('message','Không cập nhật được');
					}
					// chuyen toi trang danh sach quan tri vien
					redirect(admin_url('admin'));

				}
			}
			// load form edit admin
			$this->data['temp'] = 'admin/admin/edit';
			$this->load->view('admin/main', $this->data);
		}

		/*
		// ham xoa du lieu
		*/
		function delete(){
			$id=$this->uri->rsegment(3);
			$id=intval($id);
			// lay thong tin cua quan tri vien
			$info =$this->admin_model->get_info($id);
			if(!$info){
				$this->session->set_flashdata('message','Không tồn tại quản trị viên này');
				redirect(admin_url('admin'));
			}
			// thuc hien xoa
			$this->admin_model->delete($id);
			$this->session->set_flashdata('message','Xóa dữ liệu thành công');
			redirect(admin_url('admin'));
		}

		/*
		* thuc hien dang xuat
		*/
		function logout(){
			if($this->session->userdata('login')){
				$this->session->unset_userdata('login');
			}
			redirect(admin_url('login'));
		}
	}

?>