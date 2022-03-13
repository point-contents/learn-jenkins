let has_been_clicked = 0;

function dark() {
	if(has_been_clicked % 2 == 0) {
		document.documentElement.style.setProperty('--main-bg-color', '#000');
		has_been_clicked++;
	} else {
		document.documentElement.style.setProperty('--main-bg-color', '#95c4e6');
		has_been_clicked++;
	}
}
