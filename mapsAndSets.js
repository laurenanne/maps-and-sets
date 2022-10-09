

//  Ques 1: returns [1,2,3,4]


// Ques 2: returns 'ref'


// Ques 3:  
// m = {
// 	[1,2,3]: true,
// 	[1,2,3]: false
// } 
	


function hasDuplicates(arr){
	return [...new Set(arr)].length !== arr.length ? true: false;
};


function vowelCount(str){
	let newStr = str.toLowerCase();
	let m = new Map ();
	let vow = 'aeiou';
	for(let charac of newStr){
		let count =1;
			if(vow.includes(charac)){
			if(!m.has(charac)){
				m.set(charac, count);
			}
			else{
				m.set(charac, m.get(charac)+1);
			};
		}
	}
return m;
}

	
	
	
