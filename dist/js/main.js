if(/Android/.test(navigator.appVersion)) {
	window.addEventListener("resize", function() {
		if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
			document.activeElement.scrollIntoView();
		}
	});
} 


var block = $('<div>').css({'height':'50px','width':'50px'}),
    indicator = $('<div>').css({'height':'200px'}),
    scrollbarWidth = 0;

$('body').append(block.append(indicator));
var w1 = $('div', block).innerWidth();    
block.css('overflow-y', 'scroll');
var w2 = $('div', block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);


var bodyScrollOptions = {
    reserveScrollBarGap: true
};

function openModal(hrefModal) {
    
    if ($(hrefModal).length > 0){
        $(hrefModal).fadeIn(300);
    
        bodyScrollLock.clearAllBodyScrollLocks();
        bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
    }
}

function closeModals() {
	if (scrollbarWidth > 0) {
		$('.popup-block:not(:hidden)').fadeOut(200, function() {
            bodyScrollLock.clearAllBodyScrollLocks();
        });
	} else {
		$('.popup-block:not(:hidden)').fadeOut(200);
		
		bodyScrollLock.clearAllBodyScrollLocks();
	}
}


$(document.body).on('click','[data-toggle="modal"]',function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	openModal(hrefModal);
});

$(document.body).on('click','.popup-block__overlay',function(e) {
	var closeButton = $(this).children('[data-toggle="dismiss"]');
	
	if (e.target != this) {
//		return false;
	} else {
		closeModals();
	}
});


$(document.body).on('click','[data-toggle="dismiss"]',function(e) {
	e.preventDefault();
	
	closeModals();
});

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $(this).addClass('active');
  $("#header-menu").addClass("active");
});

$("#menu-toggle-active").click(function(e) {
  e.preventDefault();
  $("#header-menu").removeClass("active");
});

$('select').niceSelect();

$.extend($.validator.messages, {
    required: "Incorrect data",
    email: "Incorrect data",
    password: "Incorrect data",
});

$("form").each(function() {
    $(this).validate({
        errorPlacement: function(e, i) {
              e.addClass("error-message"),
              e.appendTo(i.parent("div"))
        },
        highlight: function(e) {
            $('.page-block__input-wrapper').removeClass('success').addClass('error');
        },
        unhighlight: function(e) {
            $('.page-block__input-wrapper').addClass('success').removeClass('error');
        },
        ignore: [],
        rules: {
            name: "required",
            tel: {
                required: !0
            },
            email: {
                required: !0,
                email: true
            },
            password: {
                required: !0,
            },
        },
    });
});

$(document).off('change focusout keydown keypress input', 'input, textarea').on('change focusout keydown keypress input', 'input, textarea', function(e) {
 if ($(this).val() != '') {
  $(this).addClass('not-empty').parent().parent().addClass('not-empty');
 } else {
  $(this).removeClass('not-empty').parent().parent().removeClass('not-empty');
 }
});

$('[data-toggle="tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

$('.page-block__input').on('focusin', function() {
  $(this).parent().addClass('active');
});

$('.page-block__input').on('focusout', function() {
  $(this).parent().removeClass('active');
});

$('.icon--search').hover(function() {
  $(this).parent().toggleClass('active');
});

$('.issue-block__textarea').on("focus", function() {
  $(this).parent().toggleClass('active');
});

$('.issue-block__textarea').mouseout("focus", function() {
  $(this).parent().removeClass('active');
});

$('.issues-block__table-card').hover(function() {
  $(this).prev().toggleClass('hidden');
});

$('.reminder-block__table-card').hover(function() {
  $(this).prev().toggleClass('hidden');
});

$('[data-toggle="expand"]').on('click', function() {
  $(this).toggleClass('active');
  $(this).next().slideToggle(200);
});

$('.manager-block__controls-link').on('click', function () {
  $('.manager-block__wrapper').on('load').removeClass('loaded').toggleClass('loading');
  window.setTimeout(function () {
    $('.manager-block__wrapper').removeClass('loading');
    $('.manager-block__wrapper').toggleClass('loaded');
  }, 500);
});

$.fn.datepicker.language['en'] =  {
  days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  daysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  daysMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
  months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthsShort: ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
  today: 'Today',
  clear: 'clear',
  dateFormat: 'dd.mm.yyyy',
  timeFormat: 'hh:ii',
  firstDay: 1
};

$('.datepicker').datepicker({
  language: 'en'
})