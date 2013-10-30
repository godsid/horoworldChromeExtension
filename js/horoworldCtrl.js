function hotLottoCtrl($scope){
}

function checkLottoCtrl($scope){
	$scope.lotto = {currentDate:'16 ตุลาคม 2556',first:'xxxxxx',three:'xxx xxx xxx xxx',two:'xx',search:''};
	$scope.lotto.dates = [
			{value:'2013-10-16',text:'16 ตุลาคม 2556'},
			{value:'2013-10-01',text:'1 ตุลาคม 2556'},
		];
	$scope.checkLotto = function(){
		var lotto = $scope.lotto;
		if(lotto.search==''){
			alert("กรุณากรอกหมายเลขด้วยค่ะ");
		}else if(typeof lotto.dateSelect=='undefined'){
			alert("คุณไม่ได้เลือกงวดที่ต้องการค่ะ");
		}else{
			if(confirm("ว้าย!.. ไม่ถูก งวดหน้ามาดูเลขเด็ดที่ Hotoworld สิ\nลองไปดูเลยไหม ")){
				window.open('http://lotto.horoworld.com');
			}
		}
	};
}
function newsCtrl($scope){
	$scope.news = {test:""};
	$scope.news.items = [{title:"ภัตตาคารหลิวเซียงฟง",desc:"ภัตตาคารหลิวเซียงฟง ความอร่อยครั้งแรกในเมืองไทยแบบนี้ไม่พิสูจน์ไม่ได้แล้ว!",url:"http://review.edtguide.com/404732_",thumb:"http://ed.files-media.com/ud/review/1/136/405793/01.jpg",create:"ประมาณ 1 ชั่วโมงที่แล้ว"}];
	$scope.gotoLink = function(){
		return false;
	};
}

function horoscopeCtrl($scope){
}


