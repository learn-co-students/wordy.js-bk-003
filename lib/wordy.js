'use strict';

function WordProblem(question){
	this.question = question;
}

function ArgumentError(){}

WordProblem.prototype.answer = function(first_argument) {
	var problem = this.question.substring(0,this.question.length-1).split(" ").slice(2);
	var result = parseInt(problem[0]);
	
	if (problem.length<=2) {throw new ArgumentError(); return;};

	for (var i = 2; i < problem.length; i+=2) {
		//check if number
		var current_num = parseInt(problem[i]);

		//check if symbol
		var symbol = problem[i-1];
		switch (symbol){
			case 'multiplied':
				current_num = parseInt(problem[i + 1]);
				i++;
				result *= current_num;
				break;
			case 'minus':
				result -= current_num;
				break;	
			case 'plus':
				result += current_num;
				break;
			case 'divided':
				current_num = parseInt(problem[i + 1]);
				i++;
				result /= current_num;
				break;
			default:
				throw new ArgumentError();
				break;	
		}
	};
	//if even length error
	return result;
};
