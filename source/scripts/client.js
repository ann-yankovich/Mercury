$('.b-log-forms__tab-link').click( function(){
	var indx = $('.b-log-forms__tab-link').index(this);
	$('.b-log-forms__tab-link').removeClass('b-log-forms__tab-link_active');
	$(this).addClass('b-log-forms__tab-link_active');
	$('.b-log-forms').find('.b-form').removeClass('b-form_active').eq(indx).addClass('b-form_active');
});
