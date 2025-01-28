// JavaScript Document
jQuery(function($){
	var $window = $(window);
	var windowsize = $window.width();
	if (windowsize <= 1000) {
		$(".hide_on_mobile #formulaire_dqe_newsletter").remove();
	}
	$('.btn_dqe').on('click' , function(e){
		$( '#formulaire_dqe_newsletter #message_info_processus' ).hide();
		var hasError = false;
		var email = $('#formulaire_dqe_newsletter #dqe_email').val();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(email == ''){

			$( '#formulaire_dqe_newsletter #message_info_processus' ).empty();
			$( '#formulaire_dqe_newsletter #message_info_processus' ).append('<p>Champ mail vide, merci de le remplir</p>');
			$( '#formulaire_dqe_newsletter #message_info_processus' ).show();
			hasError = true;
	   	}
		else if(!emailReg.test(email)){
			$( '#formulaire_dqe_newsletter #message_info_processus' ).empty();
			$( '#formulaire_dqe_newsletter #message_info_processus' ).append('<p>Mail invalide</p>');
			$( '#formulaire_dqe_newsletter #message_info_processus' ).show();
			hasError = true;
		}
		
		hasError = false;
		
		if(hasError !== true){
			$.ajax({
				url : adminAjax.url,
				type : 'POST',
				data : {
					action : 'save_email',
					nonce : adminAjax.nonce,
					email: email,

				},
				beforeSend: function(){
					$('#formulaire_dqe_newsletter .chargement_ajax').show();
				},
				complete: function(){
					$('#formulaire_dqe_newsletter .chargement_ajax').hide();
				},
				success : function( datajson ) {
					if ( datajson.success ) {
						var $reponse = datajson.data.response;
						var $code = $reponse.substring(0,3);
						if ($code =="001"){
							 $reponse =  $reponse.replace("001","");
							
							 $("#formulaire_dqe_newsletter .hide_on_succes").hide();
								window.dataLayer = window.dataLayer || []; 
								dataLayer.push({ 
								event: "newsletter_subscription" 
								}); 
							console.log("DQE Success");

								
						}
						
						
						$( '#formulaire_dqe_newsletter #message_info_processus' ).empty();
						$( '#formulaire_dqe_newsletter #message_info_processus' ).append('<p>'+$reponse+'</p>');
						$( '#formulaire_dqe_newsletter #message_info_processus' ).show();
						//$( '#dqe_email').val('');


					} else {
						console.log( datajson.data );
					}
				},
				error : function( datajson ) {
					console.log( 'Erreur…' );
				},
			});

		}
	});
//	$('.btn_dqe_popup').on('click' , function(e){
//		alert("ok");
//		$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).hide();
//		var hasError = false;
//		var email = $('#formulaire_dqe_newsletter_popup #dqe_email').val();
//		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//		if(email == ''){
////			alert('Champ mail vide, merci de le remplir');
//			$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).empty();
//			$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).append('<p>Champ mail vide, merci de le remplir</p>');
//			$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).show();
//			hasError = true;
//	   	}
//		else if(!emailReg.test(email)){
//			$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).empty();
//			$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).append('<p>Mail invalide</p>');
//			$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).show();
//			hasError = true;
//		}
//		
//		hasError = false;
//		
//		if(hasError !== true){
////			alert('aucune erreur');
//			$.ajax({
//				url : adminAjax.url,
//				type : 'POST',
//				data : {
//					action : 'save_email',
//					nonce : adminAjax.nonce,
//					email: email,
//		//			id_contact : id_contact // en vrai, récupérer l'id du contenu en variable ;-)
//				},
//				beforeSend: function(){
//					$('#formulaire_dqe_newsletter_popup .chargement_ajax').show();
//				},
//				complete: function(){
//					$('#formulaire_dqe_newsletter_popup .chargement_ajax').hide();
//				},
//				success : function( datajson ) {
//					if ( datajson.success ) {
//		//				alert(datajson.data.formule);
//						var $reponse = datajson.data.responses;
//						var $code = $reponse.substring(0,3);
//						if ($code =="001"){
//							 $reponse =  $reponse.replace("001","");
//							 $("#formulaire_dqe_newsletter_popup .hide_on_succes").hide();
//						}
//						
//						
//						$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).empty();
//						$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).append('<p>'+$reponse+'</p>');
//						$( '#formulaire_dqe_newsletter_popup #message_info_processus' ).show();
//						//$( '#dqe_email').val('');
//
//
//					} else {
//						console.log( datajson.data );
//					}
//				},
//				error : function( datajson ) {
//					console.log( 'Erreur…' );
//				},
//			});
//
//		}
//	});
	
	
});