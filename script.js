//your code here!

const element=document.querySelector('#infi-list');

let c=1;
function getInformation(){
	for(let i=0;i<10;i++){
		const Li=document.createElement('li');
		Li.innerHTML=`Item ${c}`;
		c++;

		element.appendChild(Li);
	}
}


element.addEventListener('scroll',()=>{
	console.log('event')
	if(element.scrollTop + element.clientHeight >=element.scrollHeight){
getInformation();
	}
});
getInformation();
