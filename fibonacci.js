/* function f(term, value = 1, previous = 0) */
f=($,_=+!!{},_$=+[])=>
/*
	if(term == 0)
		return previous
	if(term == 1)
		return value;
*/
!$ 			/* if(term == 0) */
?_$ 		/*	return previous */
: 			/* else */
f(			/* calling function 'f' with parameters: */
	~{}+$,	/*	term: 		term - 1 */
	_+_$,	/*	value: 		value + previous */
	_		/*	previous: 	value */
);