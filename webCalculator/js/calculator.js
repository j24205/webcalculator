			var getstr=""
			var flag = false
			function funcin(str){
				getstr=document.getElementById("inputresult");
				if (getstr.value=="0")
					getstr.value=str
				else
					getstr.value +=str
			}
			
			function funceqal(){
				var result=document.getElementById("result");
				// if((isNaN(eval(getstr)))==true)
				// {
				// getstr.value="输入不正确"
				// flag=true
				// }
				// else
				
				result.value=eval(getstr.value)
				getstr.value+="="
			}
			
			function funcbackspace(){
				getstr=document.getElementById("inputresult");
				getstr.value=getstr.value.substr(0,getstr.value.length-1)
				if (getstr.value.length==0)
				getstr.value="已经为空"
				
			}
			function funcAC(){
				getstr=document.getElementById("inputresult")
				getstr.value="0"
			}
			