$( '#rescue-training' ).click( function( e ) {
	e.preventDefault();
	$.swipebox( [
		{ href:'./images/training1.jpg', title:'Specialized Rescue Training' }, 
        { href:'./images/training2.jpg', title:'Specialized Rescue Training' },
        { href:'./images/training3.jpg', title:'Specialized Rescue Training' },
        { href:'./images/training4.jpg', title:'Specialized Rescue Training' }
	] );
} );