// JavaScript Document

var header_height = 90;
var min_header_height_scroll = 57;
var min_header_height_sticky = 60;
var scroll_amount_for_sticky = 85;
var min_header_height_fixed_hidden = 45;
var content_height_default = 60;
var default_content_padding = 42; /* padding top 21 + padding bottom 21 */
var default_content_icon_size = 24;
var content_height_with_icon = content_height_default + default_content_icon_size;
var header_bottom_border_weight = 1;
var scroll_amount_for_fixed_hiding = 200;
var menu_item_margin = 0;
var large_menu_item_border = 0;
var paspartu_width_init = 0.02;
var add_for_admin_bar = 0;
header_height = 90;
min_header_height_sticky = 90;
scroll_amount_for_sticky = 20000000;



var logo_height = 130; // cayman logo height
var logo_width = 280; // cayman logo width
	    logo_width = 280;
    logo_height = 130;

	
	
var header_top_height;
	header_top_height = 0;
var loading_text;
loading_text = 'Loading new posts...';
var finished_text;
finished_text = 'No more posts';

var piechartcolor;
piechartcolor	= "#e6ae48";
	piechartcolor = "#ffffff";

var no_ajax_pages = [];
var mkd_root = 'https://www.fitnesspark.fr/';
var theme_root = 'https://www.fitnesspark.fr/wp-content/themes/fitnesspark_siege_v2.1/';
var header_style_admin = "";
if(typeof no_ajax_obj !== 'undefined') {
no_ajax_pages = no_ajax_obj.no_ajax_pages;
}





	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;
	
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');
	
			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};
			


    jQuery(function($){

		

		
		  $(".mask_codepostal").focus(
			function(){
				//$(this).select();
				//$(".mask_codepostal").mask("99999",{placeholder:""});
				$(this).val("");
			}
		  );
		  $(".mask_date").focus(
			function(){
				//$(this).select();
				$(".mask_date").mask("99/99/9999",{placeholder:"."});
				//$(this).val("");
			}
		  );
		  $(".mask_telephone").focus(
			function(){
				//$(this).select();
				$(".mask_telephone").mask("99 99 99 99 99",{placeholder:"-"});
				//$(this).val("");
			}
		  );
	
			$("#VIL_CP").focus(
			function(){
				$(this).mask("99999",{placeholder:""});
			}

			);

			$("#CLI_GSM").focus(
			function(){
				$(this).mask("99 99 99 99 99",{placeholder:"."});
			}
			);

			$("#VTE_CLI_IBAN").focus(
			function(){
				$(this).mask("**** **** **** **** **** **** ***",{placeholder:"- "});
			}
			);
		
			$("#CBNUM").focus(
			function(){
				$(this).mask("9999 9999 9999 9999",{placeholder:"."});
			}
			);
		
			$("#CBCRYPTO").focus(
			function(){
				$(this).mask("999",{placeholder:"."});
			}
			);
		
		
		
			 var $window = $(window);

			function checkWidth() {
				var windowsize = $window.width();
				if (windowsize <1401) {
					//if the window is greater than 440px wide then turn on jScrollPane..
					$(".fullwidth_at_1400").each(
						function(){
							$(this).removeClass("grid_section");	
							$(this).addClass("fullwidth_section");
							$(".container_home_bloc.bloc_1").css("margin-left","21px");	
							$(".container_home_bloc.bloc_3").css("margin-left","21px");	
							$(".container_home_bloc.bloc_2").css("margin-right","21px");	
							$(".container_home_bloc.bloc_4").css("margin-right","21px");	
						}
					);
				}else {
					$(".fullwidth_at_1400").each(
						function(){
							$(this).addClass("grid_section");	
							$(this).removeClass("fullwidth_section");	
							$(".container_home_bloc.bloc_1").css("margin-left","0px");	
							$(".container_home_bloc.bloc_3").css("margin-left","0px");	
							$(".container_home_bloc.bloc_2").css("margin-right","0px");	
							$(".container_home_bloc.bloc_4").css("margin-right","0px");	
						}
					);
				}
				
				// MAJ 31/01/2018 - #HEADERV2
				//if (windowsize <=768) {
					$(document.body).append( $('#menu_microsite.on_mobile_only_microsite').detach() );
				//} 
				
				
				/*$(".container_home_bloc").each(
					function(){
						var $width = $(this).width();
						//alert($width);
						$(".content", this).css("width","100px");
					}
				);*/
			}
			// Execute on load
			checkWidth();
			// Bind event listener
			$(window).resize(checkWidth);

			$(".container_home_bloc").click(
				function(){
					var $url = $("a",this).attr("href");
					location.href= $url ;
			}
			);

		
		
			$("#mobile_menu_social").appendTo("#menu-menu-mobile").css("display","block");
		
			$(".content").click(
				function(){
					if ($(".mobile_menu ul").is(":visible")){
						$(".mobile_menu_button img").trigger("click");
					}
				}
			);
		
        
    });

 jQuery(function($){
  	$(".FPARK_overflow").hide().css("visibility","visible");
  	
	 
		 $(".grid_masonry_fpark .arx-grid-item").mouseenter(
			function(){
				$(".FPARK_overflow", this).show();
				$(".FPARK_overflow_block", this).delay( 100 ).hide(
					function(){
						 $(".FPARK_overflow_content_0 .titre, .FPARK_overflow_content_0 .prix, .FPARK_overflow_content_0 .cta").click(
							function (){
								var $id = $(this).attr("data-src");
								var $num = $(this).attr("data-num");

								$("."+$id+" .FPARK_overflow_content_0").hide();
								$("."+$id+" .FPARK_overflow_content_"+$num).show();

							}
						 );

					}

				);
			}
		);

		$(".grid_masonry_fpark .arx-grid-item").mouseleave(
			function(){
				$(".FPARK_overflow", this).hide();
				//$(".FPARK_overflow_content_1", this).hide();
				//$(".FPARK_overflow_content_2", this).hide();		
				//$(".FPARK_overflow_content_0", this).show();		
				//$(".FPARK_overflow_block", this).show();
			}
		);
	 
	 $(".FPARK_overflow_content_1").each(
		 function(){
			 $(this).hide();
		 }
	);
	 $(".FPARK_overflow_content_2").each(
		 function(){
			 $(this).hide();
		 }
	);
	 
	/*$(".container_puce li").click(
		function(){
			var $id = $(this).attr("data-src");
			var $num = $(this).attr("data-num");
			if ($num==2){
				var $afficher = 2;
				var $masquer = 1;
				$("."+$id+" .FPARK_overflow_content_"+$afficher).animate({"left":"0px"}, "slow");
				$("."+$id+" .FPARK_overflow_content_"+$masquer).animate({"left":"-500px"}, "slow");
			}else {
				var $afficher = 1;
				var $masquer = 2;
				$("."+$id+" .FPARK_overflow_content_"+$masquer).animate({"left":"500px"}, "slow");
				$("."+$id+" .FPARK_overflow_content_"+$afficher).animate({"left":"0px"}, "slow");
			}
			
		}
	);*/
	 
	 
	 
	 $(".FPARK_overflow_content_1 .fermer,.FPARK_overflow_content_2 .fermer").click(
	 	function(){
			$(".FPARK_overflow_content_1").hide();
			$(".FPARK_overflow_content_2").hide();
			$(".FPARK_overflow_content_0").show();
		}
	 );
	 
	 
	 
	 /* MAJ FPMAG */
	 
	 $(document).on("click", ".container_reponse_sondage",
	 	function(e){
			//alert("ok");
			e.preventDefault();
		 
		 	if (!$("#container_ajax_sondage").hasClass("avote")){
				var $url = $(this).attr("data-url");
				var $id = $(this).attr("data-id");
				var $num = $(this).attr("data-num");
				var $container = $(this).attr("id");
				$("#container_ajax_sondage").load($url+"?id="+$id+"_"+$num+" #container_ajax_sondage",
					function(){
						$("#container_ajax_sondage").addClass("avote");	
						//alert("ok");
					}							  
				);
				history.pushState({},$url,$url);
			}
		}
	 );
	 
	 
	 /* MAJ RECRUTEMENT */
	 $(".recrutement_item").click(
	 	function(){
			var $url = $(this).attr("data-url");
			window.open($url);
		}
	 );
	 
	 $(".container_champ_recherche select").change(
	 	function(){
			var $equipe = $("#rech_equipe").val();
			var $lieu = $("#rech_lieu").val();
			var $contrat = $("#rech_contrat").val();
			var $nb_result = 0;
			$(".recrutement_item").each(
				function(){
					if (!$(this).hasClass("no_result")){
						var $has_equipe  = true;
						var $has_lieu  = true;
						var $has_contrat  = true;

						var $data_equipe = $(this).attr("data-equipe");
						var $data_lieu = $(this).attr("data-lieu");
						var $data_contrat = $(this).attr("data-contrat");

						if ($equipe!="Index0" && $equipe!=$data_equipe){
							$has_equipe=false;
						}
						if ($lieu!="Index0" && $lieu!=$data_lieu){
							$has_lieu=false;
						}
						if ($contrat!="Index0" && $contrat!=$data_contrat){
							$has_contrat=false;
						}

						if ($has_equipe && $has_lieu && $has_contrat){
							$(this).show();
							$nb_result ++;
						}
						else {
							$(this).hide();
						}
					}
				}
			);
			
			if ($nb_result <= 0){
				$(".recrutement_item.no_result").css("visibility","visible");
			}
			else {
				$(".recrutement_item.no_result").css("visibility","hidden");
			}
			
		}
	 );
	 
	 $(".container_champ_recherche #rech_mot_cle").keyup(
	 	function(){
			var $mot_cle = $(this).val();
			var $nb_result = 0;
			$(".recrutement_item").each(
				function(){
					if (!$(this).hasClass("no_result")){
						var $has_title  = true;
						var $has_equipe  = true;
						var $has_lieu  = true;
						var $has_contrat  = true;

						var $data_title = $(this).attr("data-title");
						var $data_equipe = $(this).attr("data-equipe");
						var $data_lieu = $(this).attr("data-lieu");
						var $data_contrat = $(this).attr("data-contrat");

						if ($data_title.toLowerCase().indexOf($mot_cle.toLowerCase()) == -1){
							$has_title=false;
						}
						if ($data_equipe.toLowerCase().indexOf($mot_cle.toLowerCase()) == -1){
							$has_equipe=false;
						}
						if ($data_lieu.toLowerCase().indexOf($mot_cle.toLowerCase()) == -1){
							$has_lieu=false;
						}
						if ($data_contrat.toLowerCase().indexOf($mot_cle.toLowerCase()) == -1){
							$has_contrat=false;
						}

						if ($has_title || $has_equipe  ||  $has_lieu  || $has_contrat){
							$(this).show();
							$nb_result ++;
						}
						else {
							$(this).hide();
						}
					}
				}
			);
			
			if ($nb_result <= 0){
				$(".recrutement_item.no_result").css("visibility","visible");
			}
			else {
				$(".recrutement_item.no_result").css("visibility","hidden");
			}
			
		}
		 
	 );	 
	 
	$("#responsive-form-recrutement input").each(
		function(){
			if ($(this).attr("aria-invalid")=="true"){
				$(this).addClass("invalid");
			}
		}

	);

	$("#responsive-form-recrutement label.file").each(
		function(){
			if ($("input ", this).attr("aria-invalid")=="true"){
				$(this).addClass("invalid");
			}
		}

	);

	 
	$("#responsive-form-recrutement select").each(
		function(){
			
			if ($(this).attr("aria-invalid")=="1"){
				$(this).addClass("invalid");
			}
		}

	);

	 
	 $("#responsive-form-recrutement label.club").hide();
	 var $equipe = $("#responsive-form-recrutement select[name=equipe]").val();
	 if ($equipe=="RESPONSABLE_DE_CLUB" || $equipe=="COMMERCIAL"){
	 	$("#responsive-form-recrutement label.club").show();
		//$("#club_select select").prop("selectedIndex", 0);	
		//$("#club_select select option[value=\'AUCUN\']").remove(); 
	 }else {
		$("#responsive-form-recrutement label.club").hide(); 
	 }
	 
	 $("#responsive-form-recrutement select[name=equipe]").change(
	 	function(){
	 		var $equipe = $(this).val();		
			 if ($equipe=="RESPONSABLE_DE_CLUB" || $equipe=="COMMERCIAL"){
				$("#responsive-form-recrutement label.club").show();
			 }else {
				$("#responsive-form-recrutement label.club").hide(); 
			 }
		}
	 );
	 
	 
	$(".arx_carousel_col article").css("cursor","pointer").click(
		function(){
		 var $url = $('h3 a ',this).attr("href");
		location.href = $url;
		}
	);

	$(".container_hub_item").click(
		function(){
		 	var $url = $('a',this).attr("href");
			location.href = $url;		}
	);
	 
	 
	 //MAJ COVID OFFRE
	 $(".offre_covid .container_phases .type_2_phase_item.current").css("cursor","pointer").click(
	 	function(){
			var $url =  $(".offre_covid .container_phases").attr("data-href");
			location.href=$url;
		}
	 );

	 
	 //MAJ HUB CONTENT
	 $(".hub_content_activite_item .lire_plus").click(
	 	function(){
			var $num = $(this).attr("data-num");
			$(".hub_content_activite_item .texte[data-num="+$num+"]").css("max-height","500px");
			$(this).hide();
			$(".hub_content_activite_item .lire_moins[data-num="+$num+"]").show();
		}
	 );

	 $(".hub_content_activite_item .lire_moins").click(
	 	function(){
			var $num = $(this).attr("data-num");
			$(".hub_content_activite_item .texte[data-num="+$num+"]").css("max-height","50px");
			$(this).hide();
			$(".hub_content_activite_item .lire_plus[data-num="+$num+"]").show();
		}
	 );


	 
		function displayFirefoxPermissionRequest(){ 

			if(navigator.userAgent.indexOf("Firefox") !== -1) { 

			   batchSDK(function(api){api.ui.show('native', true)});
			}
		}
	
		$(".close-cookie-banner").click(
			function(){
				displayFirefoxPermissionRequest();
			}
		);	 

	 
	 // MAJ INFOS OFFRE HEADER
	 $(".arx_sticker_offre_head img").click(
	 	function(){
			$(".arx_sticker_offre_head").hide();
			$.cookie('arx_sticker_offre_head', 'masquer', { expires: 1, path: '/', secure:true ,httponly:true});
			$(".header_top_bottom_holder").removeClass("has_banniere_offre_header");
			$("#home_video_background").addClass("nopadding");
			$(".arx_main_content.content").addClass("nomargin");
			$(".content").removeClass("arx_decalage_top");
			$(".mobile_menu").removeClass("arx_decalage_top");
		}
	 );

	 //MAJ FOOTER
			var $window = $(window);
		function arxIsMobile() {
			var windowsize = $window.width();
			if (windowsize <= 990) {
				return true;
			}
			else {
			  return false;
			}
		}

	 if ( arxIsMobile() ){
		 $(".arx_menu_footer").click(
			function(){
				if (!$(this).hasClass("opened")){
					$("li", this).show();
					$(this).addClass("opened");
				}
				else {
					$("li", this).each(
						function(){
							if ($(this).index()>0){
								$(this).hide();
							}	
						}
					);
					$(this).removeClass("opened");

				}
			}
		 );
	 }
	 

	 
	// 2021-01-18 MAJ FORMULAIRE PARRAINAGE
	 $("#cta_parrainer").click(
	 	function(){
			if (!$("#responsive-form.form_parrainage").is(":visible")){
				$("#responsive-form.form_parrainage").slideDown();
				$(".form_parrainage_col").addClass("active");
			}	
		}
	 );
	 
	// MAJ DATACOLLECT POPUP
	 $("#datacollect_popup_container").load("/arx-datacollect-popup.php");


	// ARX Shortcode arx_audio_player_widget 
	 if ($(".arx_audio_player_widget_outter").length){
		$(".arx_audio_player_widget_outter").prependTo('body');
	 }



	var timer;
	var percent = 0;
	var audio = document.getElementById("arx_audio_source");
	var duration = 0;
	var animationFrameId;

	var slider = document.getElementById("arx_audio_player_slider");
	if (slider) {
		audio.addEventListener("playing", function(_event) {
				duration = _event.target.duration;
				slider.max = duration;
				startTimer(duration, audio);
				updateTimer();
		});

		audio.addEventListener("pause", function(_event) {
				clearTimeout(timer);
				cancelAnimationFrame(animationFrameId);
		});

		slider.addEventListener("input", function() {
		audio.currentTime = parseFloat(this.value);
		advance(duration, audio);
		});

		var advance = function(duration, element) {
		var timeRemaining = document.getElementById("arx_audio_player_time_remaining");

		// Mettre à jour le temps restant
		var remainingTime = duration - element.currentTime;
		timeRemaining.textContent = formatTime(remainingTime);

		startTimer(duration, element);
		}

		var startTimer = function(duration, element) {
				if (percent < 100) {
						timer = setTimeout(function () {
								advance(duration, element)
						}, 100);
				}
		}

		// Fonction pour mettre à jour le temps restant en utilisant requestAnimationFrame
		function updateTimer() {
		var timeRemaining = document.getElementById("arx_audio_player_time_remaining");

		// Mettre à jour le temps restant
		var remainingTime = duration - audio.currentTime;
		timeRemaining.textContent = formatTime(remainingTime);

		// Mise à jour de la position du slider
		slider.value = audio.currentTime;

		// Demander une nouvelle frame d'animation
		animationFrameId = requestAnimationFrame(updateTimer);
		}

		// Fonction pour formater le temps au format mm:ss
		function formatTime(timeInSeconds) {
				var minutes = Math.floor(timeInSeconds / 60);
				var seconds = Math.floor(timeInSeconds % 60);
				return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
		}

		$(".arx_audio_player_widget_icon_box").hover(function() {
				$('.arx_audio_player_widget_player').addClass('slide_in');
				$('.arx_audio_player_widget_player').removeClass('slide_out');

				$('.arx_audio_player_widget_icon').addClass('lecture_icon');
		}, function() {
				if (!$(this).hasClass('clicked')) {
						$('.arx_audio_player_widget_player').addClass('slide_out');
						$('.arx_audio_player_widget_player').removeClass('slide_in');

						$('.arx_audio_player_widget_icon').removeClass('lecture_icon');
				}
		});

		$(".arx_audio_player_widget_icon_box").click(function() {
				arx_play_audio();

				if ($('.arx_audio_player_widget_icon').hasClass('lecture_icon')) {

						$('.arx_audio_player_widget_icon').addClass('pause_icon');
						$('.arx_audio_player_widget_icon').removeClass('lecture_icon');

				} else if ($('.arx_audio_player_widget_icon').hasClass('pause_icon')) {

						$('.arx_audio_player_widget_icon').addClass('lecture_icon');
						$('.arx_audio_player_widget_icon').removeClass('pause_icon');

				}

				$(this).addClass('clicked');

				$(this).off('mouseenter mouseleave');
		});

		function arx_play_audio(e) {
				e = e || window.event;
				var btn = e.target;
				if (!audio.paused) {
						btn.classList.remove("active");
						audio.pause();
				} else {
						btn.classList.add("active");
						audio.play();
				}
		}
	}






	// DÉBUT KÉVIN - FORM JEU CONCOURS JO 2024
	
	function formatDate(input) {
    // Récupérer la valeur entrée par l'utilisateur
    let value = input.val();
    
    // Supprimer tous les caractères non numériques
    value = value.replace(/\D/g, '');
    
    // Insérer les séparateurs de date
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '/' + value.slice(5, 9);
    }
    
    // Mettre à jour la valeur du champ
    input.val(value);
  }

if ($('#concours_jo2024_date_naissance').length>0){
  const concours_jo2024_date_naissance = $('#concours_jo2024_date_naissance');
  concours_jo2024_date_naissance.on('input', function() {
    formatDate($(this));
  });

	$('#concours_jo2024_date_prenom').on('input', function() { 
    this.value = this.value.replace(/[0-9\.]/g,'');
	});

	$('#concours_jo2024_date_nom').on('input', function() { 
    this.value = this.value.replace(/[0-9\.]/g,'');
	});

	$('#concours_jo2024_mobile').on('input', function() { 
    this.value = this.value.replace(/\s/g, '');
	});

	$('#concours_jo2024_code_postal').on('input', function() { 
		this.value = this.value.replace(/[^\d]/g, '');
	});

	function toggleClubSelect() {
    var adherentValue = $('input[name="is_adherent"]:checked').val();
    if (adherentValue === 'Oui') {
        $('#club_select').show();
        $('#club_select select').addClass('wpcf7-validates-as-required');
    } else {
        $('#club_select').hide();
        $('#club_select select').removeClass('wpcf7-validates-as-required');
    }
}

	// Écouteur d'événements pour les changements dans le groupe de boutons radio
	$('input[name="is_adherent"]').on('change', function() {
			toggleClubSelect();
	});

	// Appel initial de la fonction pour afficher ou masquer le champ de sélection du club en fonction de la valeur initiale
	toggleClubSelect();
	
	$(".form_jeu_jo_2024 input[type=submit]").attr("disabled","disabled");
	$(".form_jeu_jo_2024 input[name=is_adherent]").click(
		function(){
			const $value = $(this).attr("value");
			if ($value=="Oui"){
				$(".form_jeu_jo_2024 input[type=submit]").removeAttr("disabled");	
			}else {
				$(".form_jeu_jo_2024 input[type=submit]").attr("disabled","disabled");				
			}
		}
	);
	
	$(".form_jeu_jo_2024 input[type=submit]").mouseover(
		function(){
			if ($(this).attr("disabled")=="disabled") {
				$("#adherents_only_message").css("visibility","visible");
			}
			else {
				$("#adherents_only_message").css("visibility","hidden");
			}
		}
	);
	$(".form_jeu_jo_2024 input[type=submit]").mouseout(
		function(){
			$("#adherents_only_message").css("visibility","hidden");
		}
	);
	
	
	$('.arx_section_concours_jo form').submit(function(event) {
		// Empêcher l'envoi du formulaire par défaut
		//event.preventDefault();

		$(".error-message-concours-jo").remove();

		var formData = new FormData();

		error = false;
		
		nom = $('#concours_jo2024_nom').val();
		prenom = $('#concours_jo2024_prenom').val();
		date_naissance = $('#concours_jo2024_date_naissance').val();
		email = $('#concours_jo2024_email').val();
		mobile = $('#concours_jo2024_mobile').val();
		adresse_postale = $('#concours_jo2024_adresse_postale').val();
		code_postal = $('#concours_jo2024_code_postal').val();
		ville = $('#concours_jo2024_ville').val();
		pays = $('#concours_jo2024_pays').val();
		is_adherant_radio = $('input[name="is_adherent"]:checked').val();
		mail_actus_offres = $('#concours_jo2024_actus_offres input[type="checkbox"]').prop('checked');
		mail_news_partenaires = $('#concours_jo2024_news_partenaires input[type="checkbox"]').prop('checked');
		reglement_check = $('#concours_jo2024_acceptance').prop('checked');


		if (nom === "") {
			error = true;
			//$('#concours_jo2024_nom').after('<p class="error-message-concours-jo">Veuillez saisir votre nom.</p>');
		}

		if (prenom === "") {
			error = true;
			//$('#concours_jo2024_prenom').after('<p class="error-message-concours-jo">Veuillez saisir votre prénom.</p>');
		}

		if (date_naissance === "") {
			error = true;
			
			//$('#concours_jo2024_date_naissance').after('<p class="error-message-concours-jo">Veuillez saisir votre date de naissance.</p>');
		} else {
			if (!valDate(date_naissance)) {
				error = true;

				//$('#concours_jo2024_date_naissance').after('<p class="error-message-concours-jo">Date de naissance incorrecte. ( JJ/MM/YYYY )</p>');
				$('#concours_jo2024_date_naissance').val("");
			}
		}

		if (email === "") {
			error = true;
			//$('#concours_jo2024_email').after('<p class="error-message-concours-jo">Veuillez saisir votre adresse mail.</p>');
		}

		
		if (mobile === "") {
			error = true;
			//$('#concours_jo2024_mobile').after('<p class="error-message-concours-jo">Veuillez saisir votre numéro de téléphone.</p>');
		} else if (mobile.length < 9) {
			error = true;
			//$('#concours_jo2024_mobile').after('<p class="error-message-concours-jo">Le format est incorrect.</p>');
			$('#concours_jo2024_mobile').val("");
		}

		if (adresse_postale === "") {
			error = true;
			//$('#concours_jo2024_adresse_postale').after('<p class="error-message-concours-jo">Veuillez saisir votre adresse mail.</p>');
		}

		
		if (code_postal === "") {
			error = true;
			//$('#concours_jo2024_code_postal').after('<p class="error-message-concours-jo">Veuillez saisir votre code postal.</p>');
		}

		
		if (ville === "") {
			error = true;
			//$('#concours_jo2024_ville').after('<p class="error-message-concours-jo">Veuillez saisir votre ville.</p>');
		}

		
		if (pays === "") {
			error = true;
			//$('#concours_jo2024_pays').after('<p class="error-message-concours-jo">Veuillez saisir votre pays.</p>');
		}

		if (is_adherant_radio == "Oui") {
			is_adherant = true;
			club_name = $('#concours_jo2024_club option:selected').text();
			club_id = $('#concours_jo2024_club').val();

			if (club_id === "") {
				error = true;
				$('#concours_jo2024_club').after('<p class="error-message-concours-jo">Veuillez choisir un club dans la liste.</p>');
			}
		} else if (is_adherant_radio == "Non") {
			is_adherant = false;
			error = true;
		} else {
			error = true;
			//$('input[name="is_adherent"]').closest('.wpcf7-form-control').after('<p class="error-message-concours-jo">Veuillez choisir un statut.</p>');
		}

		if (!error) {

			if (reglement_check) {

				// formData.append('nom', nom);
				// formData.append('prenom', prenom);
				// formData.append('date_naissance', date_naissance);
				// formData.append('email', email);
				// formData.append('mobile', mobile);
				// formData.append('adresse_postale', adresse_postale);
				// formData.append('code_postal', code_postal);
				// formData.append('ville', ville);
				// formData.append('pays', pays);
				// formData.append('is_adherant_radio', is_adherant_radio);
				// if (is_adherant) {
				// 	formData.append('club_name', club_name);
				// 	formData.append('club_id', club_id);
				// }
				// formData.append('mail_actus_offres', mail_actus_offres);
				// formData.append('mail_news_partenaires', mail_news_partenaires);

				// Envoie du formulaire
				// $api_response_is_true = true;
				// Je simule temporairement un true en réponse d'API

				//$('#arx_section_form_jo2024').remove();
				// $('#arx_section_confirmation_jo2024').show();
				// $('#arx_section_confirmation_jo2024').animate({ scrollTop: elementOffset }, 200);

			} else {
				event.preventDefault();
				//$('.wpcf7-submit').after('<p class="error-message-concours-jo">Veuillez accepter le règlement du jeu.</p>');
			}

		} else {
			event.preventDefault();
			//$('.wpcf7-submit').after('<p class="error-message-concours-jo">Veuillez remplir tous les champs.</p>');
		}


		//console.log(formData);

	});

	// CHECK DATE FORMAT DD/MM/YYYY
	function valDate(date) {
    let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;

    // Matching the date through regular expression      
    if (date.match(dateformat)) {
        let operator = date.split('/');

        // Extract the string into month, date and year      
        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }
        let day = parseInt(datepart[0]);
        let month = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        // Create a list of days of a month      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //to check if the date is out of range    
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) {
                return false;
            }
            else
                if ((leapYear == true) && (day > 29)) {

                    return false;
                }
        }
    } else {
        return false;
    }
    return true;
	}
}
	// FIN KÉVIN - FORM JEU CONCOURS JO 2024


	// 2024-04 MAJ HUB ITEMS
	$(".ah2_horaires_salle, .ah2_horaires_accueil").click(
		function(){
			$(this).toggleClass("opened");
		}

	);

	/* MAJ 2024-06-25 AUDIO PLAYER HOME PAGE */
	//if ( arxIsMobile()){
		if ($("#arx_hp_audio").length){
			$("#arx_hp_audio").prependTo('body');
		 }
	
	
	//}

	$(document).ready(function() {
		var arx_hp_audio = document.getElementById("arx_hp_audio");
		var audio_div = document.getElementById("arx_audio_source");
		if (arx_hp_audio) {
			
			$(".adaph_button").click(function() {
				$(this).toggleClass("adaph_button_active");
				arx_play_audio_hp();
			});

			function arx_play_audio_hp(e) {
					e = e || window.event;
					var btn = e.target;
					if (!audio.paused) {
							audio.pause();
							dataLayer.push({event: "audio_stop"});
					} else {
							audio.play();
							audio.volume = 0.5;
							dataLayer.push({event: "audio_start"});
					}
			}
		
		}

		// audio_div.play();
		// audio_div.volume = 0.5;
		// dataLayer.push({event: "audio_start"});

		function isHomePage() {
			return window.location.pathname === "/";
		}

		function playAudioAfterInteraction() {
			if ($(".adaph_button").length) {
				audio_div.play();
				audio_div.volume = 0.5;
				dataLayer.push({event: "audio_start"});
				$(".adaph_button").addClass('adaph_button_active');
			}

			// Remove the event listener after audio starts playing
			document.removeEventListener('click', playAudioAfterInteraction);
			document.removeEventListener('keydown', playAudioAfterInteraction);
		}

		document.addEventListener('click', playAudioAfterInteraction);
		document.addEventListener('keydown', playAudioAfterInteraction);

		var iframewatcher = setInterval(function(){
			var activeE = document.activeElement;
			if(activeE && activeE.tagName == 'IFRAME'){
				clearInterval(iframewatcher);
				audio.pause();
				dataLayer.push({event: "audio_stop"});
				$(".adaph_button").removeClass('adaph_button_active');
			}
		}, 100);

		// $(document).ready(function() {
		// 	function simulate_click() {
		// 		$(".adaph_button").trigger('click');
		// 	};
		// 	window.setTimeout( simulate_click, 5000 );
		// });
	});

	$(window).scroll(function() {
	if ($("#adaph_button").length) {
		var fixedDiv = $('#adaph_button');
		var targetDiv = $('.arx_container_form_newsletter');
		var targetDiv2 = $('.cta_jaune');

		var fixedDivBottom = fixedDiv.offset().top + fixedDiv.outerHeight();
		var targetDivTop = targetDiv.offset().top;
		var targetDivTop2 = targetDiv2.offset().top;
		var targetDivBottom = targetDivTop + targetDiv.outerHeight();
		var targetDivBottom2 = targetDivTop2 + targetDiv2.outerHeight();

			if (
				(fixedDivBottom > targetDivTop && fixedDiv.offset().top < targetDivBottom)
				||
				(fixedDivBottom > targetDivTop2 && fixedDiv.offset().top < targetDivBottom2)
			
			) {
				if (!fixedDiv.hasClass('play-top')) {
						fixedDiv.addClass('play-top');
				}
			} else {
					if (fixedDiv.hasClass('play-top')) {
							fixedDiv.removeClass('play-top');
					}
			}
	}


});


	// MAJ NAVBAR 08/2024
	$("#arx_mobile_menu_open").click(
		function(){
			$("#arx_mobile_slidein").addClass("opened");
		}

	);

	$("#arx_mobile_menu_close").click(
		function(){
			$("#arx_mobile_slidein").removeClass("opened");
		}

	);

	$("#mobile_nav_container > ul > li.has_sub > a").click(function(event) {
        event.preventDefault(); // Empêche le comportement par défaut (rechargement de la page)
    });

	//$("ul.sub_menu").hide();

	$("#mobile_nav_container > ul > li.has_sub > a").click(
		function(){
			$(this).parent().find("> ul.sub_menu").slideToggle();
		}

	);


	$(document).ajaxComplete(function(event, xhr, settings) {
		$('#responsive-form.club_projet input[type="submit"]').removeAttr('disabled');
	});

    $(window).on('scroll', function() {
        var headerContainer = $('body.home #arx_header_container');

        // Vérifier si la page a été scrollée de 400px ou plus
        if ($(window).scrollTop() > 100) {
            headerContainer.addClass('scrolled');
        } else {
            headerContainer.removeClass('scrolled');
        }
    });
	 
	 /*BF*/
	 $(".titre_mention").click(function() {          

            $(".description_mention").slideToggle(300);
            $('.titre_mention img').toggleClass("rotate");
        });

});


