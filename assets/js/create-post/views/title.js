// assets/js/create-post/views/title

define([
    "backbone",
    "text!../templates/title.html"
], function( Backbone, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),

        initialize : function( options ) {
            // При изменения поля "заголовок" в модели - перерисовывем
            // отображение
            this.listenTo( this.model, "change:title", this.render );
        },

        render : function() {
            // Передаем данные из модели в шаблон
            this.$el.empty().append( this.template( this.model.toJSON() ) );
            return this;
        }

    });

    return view;
});