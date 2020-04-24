// $(document).ready(function() {

	$("#form").submit(function() {

		// data = JSON.stringify( $(form).serializeArray() );
		// obj = JSON.parse(data);

		// message = `Имя:  ${obj[0].value}%0AПочта:  ${obj[1].value}%0AНомер:  ${obj[2].value}`;

		// token = '1145720258:AAE0szNFmoarRicI44asUlwhWZ4Uqce8Pqk';
		// url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=392119679&text=${message}`;

		// fetch(url);

		$.ajax({
			type:"POST",
			url: "mail.php",
			data: $(this).serialize(),
			//dataType : 'jsonp',   //you may use jsonp for cross origin request
        	// crossDomain:true,
			cash: false,
			datatype: 'html',
			success: function(data) {
				alert(data);
			}
		})
		// .done(function() {
		// 	alert("Спасибо за заявку! Скоро мы с вами свяжемся.")
		// });

	return false;

	});

// });