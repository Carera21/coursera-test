background(0,0,0);

var i=0;
var positions = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8];

for(i=0;i<8;i++){
	if(positions[4]===O){
		positions[0] = X;
		}
	else{
		positions[4] = X;
	}
};