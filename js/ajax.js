
	$("#form").submit(function() {

		$.ajax({
			type:"POST",
			url: "mail.php",
			data: $(this).serialize(),
			cash: false,
			datatype: 'html',
			success: function(data) {
				if (data) {
					$("#modalContactForm").modal('hide');
					$("#modalOK").modal('show');
				} else {
					$("#modalContactForm").modal('hide');
					$("#modalError").modal('show');
				}
				
			}
		})

	return false;

	});
