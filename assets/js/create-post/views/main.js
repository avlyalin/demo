define([
    "backbone",
    "../models/post",
    "../views/create",
    "../views/preview",
    "text!../templates/main.html"
], function( Backbone, PostModel, CreateView, PreviewView, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),

        initialize : function( options ) {
            this.model = new PostModel();
        },

        render : function() {
            this.$el.empty().append( this.template() );

            //Отрисовка формы создания блог-поста
            var createView = new CreateView({
                model : this.model
            });

            this.$("[data-eid=create-view]").empty().append( createView.render().$el );

            //Отрисовка preview
            var previewView = new PreviewView({
                model : this.model
            });

            this.$("[data-eid=preview-view]").empty().append( previewView.render().$el );

            return this;
        }

    });

    return view;
});