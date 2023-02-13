var x=321;
const evenorodd=(a)=>{
    var ans=0;
    while(a>0){
        var r=a%10;
        ans=ans+r;
        a=Math.round(a/10);
    }
    if(ans%2==0){
        console.log("Evenish");
    }else{
        console.log("Oddish");
    }
}
evenorodd(x);