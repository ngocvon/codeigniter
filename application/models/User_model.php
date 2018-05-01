<?php 
	Class User_model extends CI_Model{

		function __construct(){
			parent:: __construct();
			// neu khong khai bao trong autoload 
			$this->load->database();
		}
		function get_list(){
			$this->db->select('id,name,email,phone');
			/*$where = array('name' => 'von' );
			$this->db->where($where);*/
			$this->db->order_by('id','DESC');
			$this->db->limit(1,0);
			$query = $this->db->get('user');
			return $query->result();
		}
		function create(){
			$data = array();
			$data['name'] = 'hang';
			$data['email']='hang@gmail.com';
			$data['password']='123456';
			$data['phone']='123456';
			$data['created']='123456';
			$this ->db->insert('user',$data);
		}
		function update($id){
			$data = array();
			$data['name'] = 'hang-luoi';
			$this->db->where(array('id' => $id));
			$this->db->update('user',$data);
		}
		function delete(){
			$this->db->where(array('id' => 1));
			$this->db->delete('user');
		}
	}
?>
