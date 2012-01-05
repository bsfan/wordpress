jQuery( document ).ready( function($) {
	
	//parent window, cross browser
    var win = window.dialogArguments || opener || parent || top;

	//more link
	$('#moreLink a').click( function() {
		for( i=0; i<20; i++ ) {
			$('#row' + i).show();
		}
		$(this).fadeOut();
		return false;
	});
	
	//logout
	$('#storifyLogout').click( function() {
		$('#logoutForm').submit();
		return false;
	});
	
	//insert link
	$('.insertLink a').click( function(){
		html = '<p>' + $(this).parent().siblings('.permalink').text() + '</p>';
		win.tinyMCE.execCommand( "mceInsertContent", false, html );
		tinyMCEPopup.close();
		return false;
	});	
	
	//allow clicking story to triger insert
	$('.story').click( function() {
		$(this).find('.insertLink a').click();
	});
	
	//title fix
	if ( storify.iframe ) {
		win.setTimeout( "jQuery('.mceTop span').html( storify.dialogTitle )", 1 );
	}
	
});