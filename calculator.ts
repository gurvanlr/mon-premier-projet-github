// calculator.ts

export function add( a: any, b: any): number {
	if(typeof a !== 'number' || typeof b !== 'number') {
		throw new TypeError("Arguments must be numbers");
	}
	return a + b;
}

export function subtract(a: any, b: any): number {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new TypeError("Arguments must be numbers");
	}
	return a - b;
}
