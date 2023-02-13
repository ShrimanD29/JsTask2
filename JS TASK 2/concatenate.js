var arr=[[1,2],[3,4],[5,6]];

var concatenate=function(arr){
   var merge=[];
for(var i=0;i<arr.length;i++)
{
merge=merge.concat(arr[i]);
}
console.log(merge);
}

concatenate(arr);