//------------------palindrome-------------------

var p = [1221,4321,3523,33433,123,223,434];
var r =0;
var bb=[];
var cc=0;
for(i=0;i<p.length;i++){
	let v = p[i];
	while(p[i]>0){
		q=p[i]%10;
		p[i]=(p[i]-q)/10;
		r=(r*10)+q;
	}
	if(r==v){
		bb[cc]=v;
		cc++;		
	}
	r=0;	
}
console.log(bb);