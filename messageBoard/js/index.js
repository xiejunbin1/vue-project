;(function () {
	
////	删除
//	$("#ist").on("click",function (e){
//		var deldom = e.target;
//			if(deldom.className === "del"){
//				deldom.parentNode.parentNode.parentNode.removeChild(deldom.parentNode.parentNode)
//			}
//		
//	})
//	
////	发布
//	$(".btn").on("click",function (){
//		$(".msg_blck").show()
//	})
////	关闭发布
//$(".closeBtn").on("click",function () {
//	$(".msg_blck").hide()
//})
////	点击输入textarea
//	$(".tarea").on("click",function (){
//		
//	});
////	确认发布
//	$("#con").on("click",function () {
//		
////		textarea输入值
//		var ta = $(".tarea").val()
////		获取日期
//		function getNow(s) {
//	   		return s < 10 ? '0' + s: s;
//		}
//
//		var myDate = new Date();
//		//获取当前年
//		var year=myDate.getFullYear();
//		//获取当前月
//		var month=myDate.getMonth()+1;
//		//获取当前日
//		var date=myDate.getDate(); 
//		//获取当前时
//		var h=myDate.getHours();      
//		//获取当前分获取当前小时数(0-23)
//		var m=myDate.getMinutes();  
//		//获取当前秒获取当前分钟数(0-59)
//		var s=myDate.getSeconds();  
//
//		var now=year+'-'+getNow(month)+"-"+getNow(date);
////		图片随机
//		var myimg = new Array("1a.jpg","2a.jpg","3a.jpg","4a.jpg");
//      var aDom =Math.floor(Math.random()*5+1
//  );
////	
//		
//		var str = "<li class='msg'>"+
//			"<img class='pic' src='img/" + aDom + "a.jpg' />"+
//			"<p class='msgCont'>"+ ta + "</p>" + 
//			"<div class='date'>" +
//				"<p>"+ now +"</p>"+
//				"<a href='#' class='del' >删除</a>"+
//			"</div>"+
//			"</li>"
//			
//			$(".list").append(str)
//			
//			myClear()
//	});
////	清空值
//	function myClear () {
//		$(".msg_blck").hide();
//		
//		$(".tarea").val("");
//		
//	}
    //获取时间
    function handleCurrentDate () {
		var date = new Date();
		// 年
		var year = date.getFullYear();
		// 月
		var mouth = date.getMonth() + 1;
		// 日
		var nowDate = date.getDate();
		// 小时
		var hour = date.getHours();
		// 分
		var miute = date.getMinutes();
		return year + "-" + mouth + "-" + nowDate + " " + hour + ":" + miute;
	};
    
    function random(){
  	var myimg = new Array("0a.jpg","1a.jpg","2a.jpg","3a.jpg","4a.jpg");
      var aDom = Math.floor(Math.random()* 4);
      console.log("img/" + aDom + "a.jpg");
    	return "img/" + aDom + "a.jpg";
    	
    }
    
    function methods(){
     var app = new Vue({
     	el:"#wrap",
    	data: function(){
    		return{
    			publishedComments:"发表留言",
    			buttonTwo:"X",
    			release:"确认发布",
    			
    			flag:false,
    			buttonValue:"",
    			list:[
    			        
                        {
                            img:"./img/1a.jpg",
                            text:"今天是周一，但是我很瞌睡！",
                            time:handleCurrentDate (),
                            delet:"删除"
                        },
                        {
                            img:"./img/3a.jpg",
                            text:"今天是周一，但是我很瞌睡！",
                            time:handleCurrentDate (),
                            delet:"删除"
                        }
                    
    			],
    		}
    	},
    	//关闭隐藏
    	methods:{
 		theEventClick: function() {
 			this.flag = !this.flag;
 		},
 		 releaseClick:function(){
                    console.log(this.buttonValue);
                    this.textVal = this.buttonValue;
                    this.flag= false; 
                    this.list.push({
                    img:random(),
                    time:handleCurrentDate (),
                    text:this.textVal,
                    delet:"删除",
                    })
                    this.buttonValue =""
                },

              handDelet: function (index){
                  this.list.splice(index,1)
                  console.log( this.list.splice);
                  
              }
 	}
  })     
}
 
	methods();
	
})();
