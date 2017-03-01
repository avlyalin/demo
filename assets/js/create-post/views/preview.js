// assets/js/create-post/views/preview

define([
    "backbone",
    "../views/title",
    "../views/text",
    "../views/meta",
    "text!../templates/preview.html"
], function( Backbone, TitleView, TextView, MetaView, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),

        initialize : function( options ) {

        },

        render : function() {
            this.$el.empty().append( this.template() );

            var titleView = new TitleView({
                model : this.model
            });

            this.$("[data-eid=title-view]").empty().append( titleView.render().$el );

            var textView = new TextView({
                model : this.model
            });

            this.$("[data-eid=text-view]").empty().append( textView.render().$el );

            var metaView = new MetaView({
                model : this.model
            });

            this.$("[data-eid=meta-view]").empty().append( metaView.render().$el );

            return this;
        }

    });

    return view;
});