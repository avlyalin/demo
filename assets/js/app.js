require( [ "create-post/views/main", "bootstrap" ], function( MainView ) {
    var mainView = new MainView();
    $("#content").append( mainView.render().$el );
});