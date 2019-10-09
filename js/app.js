$(function() {
	
	


    /* --------------------------------------------------------------------- */
    /* 	01. Date Picker;
    /* --------------------------------------------------------------------- */
    // if ($('#datepicker').length >= 1) {
    //
    //     $.fn.datepicker.language['en'] = {
    //         days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    //         daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    //         daysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    //         months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //         monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //     };
    //
    //     $('#datepicker').datepicker({
    //         language: 'en',
    //         dateFormat: 'MM dd, yyyy',
    //         keyboardNav: true,
    //     });
    // }




    /* --------------------------------------------------------------------- */
    /* 	02. Modal Close
    /* --------------------------------------------------------------------- */
    $(".inerestFeeModal").on("click", function() {
        $(".lp-hint").removeClass("lp-hint-active");
        $("#inerestFeeModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    });


    var greenDot;

    $(".ifmodal .close").on("click", function() {

        // Reset times;
        clearTimeout(greenDot);

        $(".lp-hint").addClass("lp-hint-active");
        greenDot = setTimeout(
            function() {
                $(".lp-hint").removeClass("lp-hint-active");
            },
            6000);
    });




    /* --------------------------------------------------------------------- */
    /* 	02. Animated Progress Circle;
    /* --------------------------------------------------------------------- */
    /*if ($(".loading-screen").length > 0) {
        $(".progress-bar1").loading();

        setTimeout(
			function() {
				if ($(".lp-checkout-frm").length === 1) {
					$(".loading-screen").addClass("hide-loadscreen");
					$(".lp-checkout-frm").removeClass("frm-hide");
				}
			},
			3500);
    }*/



    /* --------------------------------------------------------------------- */
    /* 	03. Trigger LP checkout options;
    /* --------------------------------------------------------------------- */


    $(".preloaded-card").click(function() {
        $(this).addClass("preloaded-card-active");
    });

    // $(".accordion .payment-card").each(function() {
    //     if ($(this).find("input").prop("checked") === true) {
    //         $(this).find("input").prop("checked", false);
    //         $(".accordion .payment-card").first().find(".change-card input").prop("checked", true);
    //     }
    // });

    // $(".lp-radio-options .lp-item").first().addClass("active-lp-item");
    // var onePayment = $(".lp-radio-options .lp-radio[data-target='flexible-card-option-1']").length;
    //alert(onePayment);
    // if (onePayment >= 1) {
    //     $(".frm-footer").hide();
    // }

    // $(".lp-radio-options .lp-item").each(function() {
    //
    //     if ($(this).find("input").prop("checked") === true) {
    //         $(this).find("input").prop("checked", false);
    //         $(".lp-radio-options .lp-item").first().find("input").prop("checked", true);
    //     }
    //
    //     $(this).find("label").click(function() {
    //
    //         var targetCardId = $(this).attr("data-target");
    //
    //         $(".lp-item").removeClass("active-lp-item");
    //         $(".lp-item").removeAttr("style");
    //         $(".flexible-card-options .flexible-card-option").removeClass("active-lp-payment");
    //         $(this).parent(".lp-item").addClass("active-lp-item");
    //         $("#" + targetCardId).addClass("active-lp-payment");
    //         $(this).parent(".lp-item").prev().css("border-bottom", 0);
    //
    //
    //         // Hide footer for One Payment;
    //         $(".frm-footer").show();
    //
    //         if (targetCardId === "flexible-card-option-1") {
    //             $(".frm-footer").hide();
    //         }
    //     });
    //
    //     // First Child click;
    //     $(".lp-radio-options .lp-item").first().find("label").click(function() {
    //         $(".lp-radio-options .lp-item").first().css("border-bottom", "1px #3399ff solid");
    //     });
    //
    //
    //     // Last Child click if mor than 3 items;
    //     $(".lp-radio-options .lp-item").last().find("label").click(function() {
    //         // $(".lp-radio-options .lp-item").first().css("border-bottom", "1px #8a95a9 solid");
    //     });
    // });




    /* --------------------------------------------------------------------- */
    /* 	04. Cards Formats;
    /* --------------------------------------------------------------------- */
    // if ($('.card-n').length >= 1) {
    //     $('.card-n').payment('formatCardNumber');
    // }
    // if ($('.c-exp-date').length >= 1) {
    //     $('.c-exp-date').payment('formatCardExpiry');
    // }
    // if ($('.c-cvc').length >= 1) {
    //     $('.c-cvc').payment('formatCardCVC');
    // }




    /* --------------------------------------------------------------------- */
    /* 	05. Debug Credit Cards Numbers;
    /* --------------------------------------------------------------------- */

    // $(".flexible-card-options .flexible-card-option").each(function() {
    //     if ($(this).find('.card-n').length >= 1) {
    //         $(this).find('.card-n').validateCreditCard(function(result) {
    //             if (result.card_type !== null) {
    //                 //console.log(result.card_type);
    //                 // VISA ;
    //                 if (result.card_type.name === "visa") {
    //
    //                     //$(this).siblings(".cards").css("border","1px red solid");
    //
    //                     $(this).siblings(".cards").find("img").removeClass("visiable-card");
    //                     $(this).siblings(".cards").find("img").addClass("hide-card");
    //                     $(this).siblings(".cards").find(".visa").addClass("visiable-card");
    //                 }
    //
    //                 // Mastercard;
    //                 else if (result.card_type.name === "mastercard") {
    //                     $(this).siblings(".cards").find("img").removeClass("visiable-card");
    //                     $(this).siblings(".cards").find("img").addClass("hide-card");
    //                     $(this).siblings(".cards").find(".mastercard").addClass("visiable-card");
    //                 }
    //
    //                 // AMEX;
    //                 else if (result.card_type.name === "amex") {
    //                     $(this).siblings(".cards").find("img").removeClass("visiable-card");
    //                     $(this).siblings(".cards").find("img").addClass("hide-card");
    //                     $(this).siblings(".cards").find(".amex").addClass("visiable-card");
    //                 }
    //
    //                 // All;
    //                 else {
    //                     $(this).siblings(".cards").find("img").removeClass("hide-card");
    //                     $(this).siblings(".cards").find("img").removeClass("visiable-card");
    //                 }
    //             }
    //         });
    //     }
    // });




    /* --------------------------------------------------------------------- */
    /* 	06. Vertically Center Notification;
    /* --------------------------------------------------------------------- */
    if ($(".lp-notice").length > 0) {
        var windowHeight = $(window).height() - 125;
        $(".lp-notice").height(windowHeight);
        $(".lp-notice").addClass('lp-verify-visible'); // Visible

        $(window).resize(function() {
            var windowHeight = $(window).height() - 125;

            $(".lp-notice").height(windowHeight);
            $(".lp-notice").addClass('lp-verify-visible'); // Visible
        });
    }




    /* --------------------------------------------------------------------- */
    /* 	07. Init Popover
    /* --------------------------------------------------------------------- */
    $('.clickable').popover({
        html: true,
        trigger: 'hover',
        show: true,
        placement: 'bottom',
        offset: '-92px 10px',
        content: function() {
            return $(this).siblings('.popover-content').html();
        }
    });




    /* --------------------------------------------------------------------- */
    /* 	08. Orverwrite OS;
    /* --------------------------------------------------------------------- */
    var ditectOS = window.ui.os;
    if (ditectOS === "Mac OS X") {
        $("body").addClass("lp-macos");
    }




    /* --------------------------------------------------------------------- */
    /* 	08. Toggle swicther
    /* --------------------------------------------------------------------- */

    //alert($(".switch").find("input").prop('checked'));

     if ($(".switch").find("input").prop('checked') == true) {
         $(".switch").find("input").prop('checked', false);
     }

     $(".switch").click(function() {
		var checkedTest = $(this).find("input").prop('checked');

		if (checkedTest == true) {
		$(".pay-later-extra, .pay-later-actions").show();
		} else {
		$(".pay-later-extra, .pay-later-actions").hide();
		}

		if($(".popover-active").length >=1 ){
		$(".popover-reset").removeClass("popover-active");
		}
     });




    /* --------------------------------------------------------------------- */
    /* 	07. Init Popover
    /* --------------------------------------------------------------------- */
    /*$('.clickable-paylater').popover({
        html: true,
        trigger: 'click',
        show: true,
        placement: 'bottom',
        container: '.pay-later',
        content: function() {
            return $(this).siblings('.popover-content').html();
        }
    });*/
	$('.clickable-paylater').click(function(){
		$(".popover-reset").toggleClass("popover-active");
		if ($(".switch").find("input").prop('checked') == true) {
			// $(".switch").find("input").prop('checked', false);

			var checkedTest = $(".switch").find("input").prop('checked');

			if (checkedTest == true) {
			$(".pay-later-extra, .pay-later-actions").show();
			} else {
			$(".pay-later-extra, .pay-later-actions").hide();
			}
		}
	});




    
    $('.hover-payment-part').hover(
        function () {
            $(".payment-hint-actions").show();
        }, 
        function () {
            $(".payment-hint-actions").hide();
        }
    );
    
	/* --------------------------------------------------------------------- */
    /* 	08. Loader
    /* --------------------------------------------------------------------- */
	// setTimeout(function() {
    //    //$(".loader").fadeOut(200);
	// 	if($(".order-msg").length >=1 ){
	// 		$(".order-msg").fadeIn(500);
	// 		$(".loader .spin").css("animation-play-state","paused");
	// 		$(".lp-checkout-frm-reset").css("opacity",1);
    //
	// 		setTimeout(function() {
	// 			$(".loader").fadeOut(200);
	// 		}, 3000);
    //
	// 	}
	// 	else if($(".processing-msg").length >=1 ){
	// 		$(".processing-msg").fadeIn(500);
	// 		$(".lp-checkout-frm-reset").css("opacity",1);
    //
	// 		setTimeout(function() {
	// 			$(".loader").fadeOut(200);
	// 		}, 3000);
	// 	}
	// 	else{
	// 		$(".loader").fadeOut(200);
	// 		$(".lp-checkout-frm-reset").css("opacity",1);
	// 	}
    //
    // }, 3000);



	/* --------------------------------------------------------------------- */
    /* 	09. Phone Number input mask
    /* --------------------------------------------------------------------- */
	// $('#phoneNumber').inputmask("(999) 999-9999");


	/* --------------------------------------------------------------------- */
    /* 	10. Terms
    /* --------------------------------------------------------------------- */
	$(".form-item .terms").click(function(){
		if ($(this).find("input").prop("checked") === true) {
			$(".form-action .btn").removeAttr("disabled");
			$(".form-action .btn").removeClass("disabled");
		}
		else if ($(this).find("input").prop("checked") === false) {
			$(".form-action .btn").attr("disabled","disabled");
			$(".form-action .btn").addClass("disabled");
		}
	});
	
	
	/* --------------------------------------------------------------------- */
    /* 	11. Timeline Events;
    /* --------------------------------------------------------------------- */
	$(".form-item .terms").find("input").prop("checked", false);
	$(".form-item .submit-order").find("input").attr("disabled");
	
	$(".form-item .terms-line").click(function(){
		if($(this).find("input").prop('checked') == true){
			//clearTimeout(resetss);
			$(this).addClass("checkmark-term-active");
			$(".submit-order").addClass("submit-process");
			
			setTimeout(
            function() {
                $(".short-text").hide(100);
				$(".awaiting, .long-text").show(500);
				$(".submit-order input").removeAttr("disabled");
            },
            2000);
		}
		else if($(this).find("input").prop('checked') == false){
			//clearTimeout(reset);
			$(this).removeClass("checkmark-term-active");
			$(".submit-order").removeClass("submit-process");
			
			setTimeout(
            function() {
                $(".short-text").show(100);
				$(".awaiting, .long-text").hide(500);
				$(".submit-order input").attr("disabled");
            },
            2000);
		}
	});

});
