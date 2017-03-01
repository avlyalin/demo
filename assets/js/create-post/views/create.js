// assets/js/create-post/views/create

define([
    "backbone",
    "text!../templates/create.html"
], function( Backbone, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),

        events : {
            "input [data-eid=title]" : "update",
            "input [data-eid=text]"  : "update"
        },

        initialize : function( options ) {

        },

        render : function() {
            this.$el.empty().append( this.template() );
            return this;
        },

        update : function() {
            this.model.set( "title", this.$("[data-eid=title]").val() );
            this.model.set( "text" , this.$("[data-eid=text]").val() );
        }

    });

    return view;
});