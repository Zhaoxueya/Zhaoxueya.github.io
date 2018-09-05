let share = new Vue({
	el:'.share',
	data:{
		clickshare:false

	}, 
    methods:{
        sharepassage:function(){
        	if(share.clickshare){
        		share.clickshare = false
        	}
        	else{
        		share.clickshare = true
        	}

        }
    }

});