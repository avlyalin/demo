// assets/js/create-post/views/text

define([
    "backbone",
    "marked",
    "text!../templates/text.html"
], function( Backbone, marked, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),

        initialize : function( options ) {
            // При изменения поля "текст" в модели - перерисовывем
            // отображение
            this.listenTo( this.model, "change:text", this.render );
        },

        render : function() {
            var html = marked( this.model.get("text") );

            // Передаем в шаблон HTML-представление текста
            this.$el.empty().append( this.template( {
                html : html
            } ) );
            return this;
        }

    });

    return view;
});