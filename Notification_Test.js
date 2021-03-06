(function() {
	'use strict';
	if("Notification" in window){
		const permission = Notification.permission;
		
		console.log(permission);
		//すでに承認または拒否されていたら何も返さない
		if(permission === "denied" || permission === "granted"){
			return;
		}
		
		//以前に許可のリクエストをしていなければここでユーザーに許可を求める
		Notification.requestPermission();
	}
})();