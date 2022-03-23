class calculator {
	constructer(previousOperandtextElement, currentOperandTextElement) {
		this.previousOperandtextElement = previousOperandtextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}
	clear() { //clears screen for user to type a new number onto screen, but doesn't lose progress
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}
	delete() { //completely clears screen for user to begin a new calculation
	}
	appendNumber(number) { //adds number to the display once user clicks on it
		this.currentOperand = number;
	}
	chooseOperation(operation) {}
	compute() {}
	updateDisplay() {
		this.currentOperandTextElement.innerText = this.currentOperand;
	}
}
const numberButtons = document.querySelectorAll('[data-number]'); //querying all elements that match a certain string, in this case [data-number]
const operationButtons = document.querySelectorAll('[data-operation]'); //querying all elements that match a certain string, in this case [data-operation]
const equalsButtons = document.querySelector('[data-equals]'); //quering a single element that matches a certain string, in this case [data-equals]
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandtextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const calculator = new calculator(previousOperandtextElement, currentOperandTextElement);
numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});