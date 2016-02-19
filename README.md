#Fibonacci Recursive Tail

Implemantation of fibonacci algorithms using a tail recursive for better performance, explanation:

###Algorithm recursive

```javascript
f(5); // call
f(5) = f(4) + f(3); // 3 + 2 = 5
f(4) = f(3) + f(2); // 2 + 1 = 3
f(3) = f(2) + f(1); // 1 + 1 = 2
f(2) = f(1) + f(0); // 1 + 0 = 1
f(1) = f(0); 		// 1 	 = 1
f(0) = 1
```

having 9 calling of the function.


###Algorithm with tail recursive

```javascript
f(term, value = 1, previous = 0);

f(5); // call
f(5, 1, 0) = f(4, 1, 1);
f(4, 1, 1) = f(3, 2, 1);
f(3, 2, 1) = f(2, 3, 2);
f(2, 3, 2) = f(1, 5, 3);
f(1, 5, 3) = 5;
```
* case term = 1 return value
* case term = 0 return value + previous

having only 4 calling of the function.


##Usage

```html
<script src="fibonacci.min.js"></script>
<script>
	var result = f(5); 
	alert(result);
</script>
```