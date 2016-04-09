'use strict';

function WordProblem(question){
	 var hash = { "multiplied": '*', "plus": '+', "minus": '-', "divided": '/'};
     var arr = ["("];
	var word = question.split(" ");
	
for (var i = 0; i < word.length; i++) {
	 if(arr.length === 4){
		arr.push(")");
	}
	 if (hash.hasOwnProperty(word[i])){
          arr.push(hash[word[i]]);
	}else if(!isNaN(word[i])){
	 	  arr.push(word[i]);
	}else if(word[i].includes("?")){
	 	  arr.push(word[i].slice(0,word[i].length - 1));
	}

};
   
   if(arr.length === 4){
   	arr.push(")");
   }

     this.answer = function(){
     	try{
	return eval(arr.join(" "));
	}catch(err){
	throw new ArgumentError(err);
}
}
	
}

function ArgumentError(err){
	return " Too advanced or irrelevant";
}


