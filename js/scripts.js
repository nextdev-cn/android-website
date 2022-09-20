
var group = new Vue({
  el: '#group',
  data: {
	  datas:[
	  {
		  name:"加载中……",
		  message:"",
		  type:"",
		  owner:"",
		  pic:"",
		  href:""
		}]
  }
 })
 
 var personal = new Vue({
  el: '#personal',
  data: {
	  datas:[
	  {
		  name:"加载中……",
		  message:"",
		  type:"",
		  owner:"",
		  pic:"",
		  href:""
		}]
  }
 })
 
 var testing = new Vue({
  el: '#testing',
  data: {
	  datas:[
	  {
		  name:"加载中……",
		  message:"",
		  type:"",
		  owner:"",
		  pic:"",
		  href:""
		}]
  }
 })

$.getJSON("zh/apps.json", function(data) {
	group.datas=data.group;
	personal.datas=data.personal;
	testing.datas=data.testing;
});
