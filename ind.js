setInterval(()=>{
	d = new Date();
	htime= d.getHours();
	mtime= d.getMinutes();
	stime=d.getSeconds();
	hr=30*htime + mtime/2;
	mr=6*mtime;
	sr=6*stime;
	hour.style.transform=`rotate(${hr}deg)`;
	minute.style.transform=`rotate(${mr}deg)`;
	second.style.transform=`rotate(${sr}deg)`;
	// console.log(";lkjh");
},1000);
