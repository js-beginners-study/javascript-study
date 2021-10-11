function scope(){
	const a = 0;
	let b = 0;
	var c = 0;

	// Block {} : 증괄호 안에 든 내용
	
	if(a === 0){
		const a = 1;
		let b = 1;
		var c = 1;
		console.log(a, b, c);
	}
	// 앗! c는 값이 변했죠? 
	// 그렇습니다. var는 함수 단위라서 if문 밖에서 선언한 값이 변했어요.
	// let과 const로 선언한 겂은 어떤가요? if문 안쪽 내용이 바깥 내용에 영향을 끼치지 않죠?
	console.log(a, b, c);
}