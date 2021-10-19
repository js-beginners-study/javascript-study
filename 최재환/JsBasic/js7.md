## Scope
Scope 란, 어떤 변수를 선언했을 떄, 그 변수를 사용할 수 있는 유효범위를 말한다. 
> 변수에 접근할 수 있는 범위! 
### var, let, const

#### Mutable Type / read & write
- **var** : 함수 단위
- **let** : block 단위 ('변수' - let으로 선언한 변수는 값이 변할 수 있다.)
#### Immutable Type / read only
- **const** : block 단위 ('상수' - 한 번 선언한 값은 바꿀 수 없다.)
```javascript
function scope(){
	const a = 0;
	let b = 0;
	var c = 0;

	// Block {} : 증괄호 안에 든 내용
	
	if(a === 0){
		const a = 1;
		let b = 1;
		var c = 1;
		console.log(a, b, c); // 1 1 1
	}
	// c는 값이 변했다.
	// var는 함수 단위라서 if문 밖에서 선언한 값이 변한다.
	// let과 const로 선언한 겂은 if문 안쪽 내용이 바깥 내용에 영향을 끼치지 않는다.
	console.log(a, b, c); //  0 0 1
}
```
> **var**는   더 이상 사용하지 않는다!

- hoisting(호이스팅) :어디에 선언했는지와 상관없이 선언을 항상 제일 위로 끌어올려주는 것
보통 let으로 변수를 선언할 때, 변수의 이름을 먼저 선언한 후 값을 할당한다. 그런데 var는 선언하기 이전에 값을 할당할 수가 있다. 심지어 값을 할당하기도 전에 출력까지 할 수 있다(당연히 값은 undefine으로 출력). 이런 현상을 var hoisting 이라고 하는데, 이 같은 이유로 var를 이용하면 오류가 생길 여지가 많다.

- block scope을 무시한다.
> **let** : 변수 선언용!
***
## function ()
함수는 어떤 코드의 묶음이고, 
```javascript
function do_something() {...}
```
do_something() 처럼 ()을 붙여주면 {...} 안에 미리 만들어둔 코드 묶음이 실행된다.
- **함수 선언식**
```javascript
function do_something() {...}
```
- **함수 표현식**
```javascript
let do_something = function 함수이름() {...}
```
- **화살표 함수**

함수 표현식의 단축형
```javascript
let do_something = () =>  { return ...}
```
> 화살표(=>) 뒤의 괄호가 중괄호( {} )일 때는 중괄호 안에 반드시 retrun 이 포함되어야 한다. const 뒤의 변수에 return 되는 값이 들어가기 때문에, 만약 return 값이 비어있다면 변수 do_something 에는 undefined 가 들어가게 된다.
```
const do_something = () => ( ... )
```
> 화살표 뒤의 { return ... }을 위 처럼 ( ... )로 줄여서 쓸 수도 있다.
***
## Class
객체 지향 프로그래밍에서 클래스는 특정 객체를 생성하기 위해 변수와 함수를 정의하는 일종의 틀을 일컫는다. 객체를 정의하기 위한 상태와 함수로 구성. 객체 단위로 코드를 그룹화하고 쉽게 재사용하기 위해 활용한다.
