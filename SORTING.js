 'use strict';

 var arr = [3 , 6 , 5, 4, 2];

 function sorting(arr){
 	 var len = arr.length;
 	 for (var i =0; i < len; i++){
 	 	 for(var j = 0; j<len-1; j++){
 	 	 	if(arr[j]>arr[j+1]){
                var temp = arr[j]
 	 	 		arr[j] = arr[j+1];
 	 	 		arr[j+1] = temp;
 	 	 		
 	 	 	}
 	 	 }
 	 }
 	 return arr;
 	 //console.log(arr);
 }




var result = sorting(arr);

console.log(result);