// assets/js/create-post/views/meta
define([
    "backbone",
    "../utils/tools",
    "text!../templates/meta.html"
], function( Backbone, Tools, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),

        // Средняя скорость чтения
        SYMBOLS_PER_MINUTE : 2500,

        initialize : function( options ) {
            // При изменения поля "текс" в модели - перерисовывем
            // отображение
            this.listenTo( this.model, "change:text", this.render );
        },

        render : function() {
            var readingTime = Tools.getReadingTimeText( Tools.getReadingTime( this.model.get("text"), this.SYMBOLS_PER_MINUTE ) );

            // Передаем в шаблон время чтения
            this.$el.empty().append( this.template( {
                readingTime : readingTime
            } ) );
            return this;
        }

    });

    return view;
});