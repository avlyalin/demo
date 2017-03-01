define( function() {
    return {

        // Считаем скорость чтения
        getReadingTime : function( text, speed ) {
            var symbolsCount = this.getSymbolsCount( text );

            return parseFloat( symbolsCount / speed ).toFixed (2);
        },

        getReadingTimeText : function( minutes ) {
            var text = "стоит запастись терпением";

            if ( minutes <= 1.5 ) {
                return "меньше минуты";
            }

            if ( minutes <= 3.5 ) {
                return "около трех минут";
            }

            if ( minutes <= 5.5 ) {
                return "меньше 5 минут";
            }

            if ( minutes <= 12 ) {
                return "около 10 минут";
            }

            return text;
        },

        // Получаем количество символов в строке
        getSymbolsCount : function( text ) {
            // Предварительно уберем все незначащие символы
            var re;
            var special = " .,!#?-_+*=[]{}()<>$@%^&";

            for( var i = 0; i < special.length; i++ ) {
                var s = special[i];

                re = new RegExp("\\" + s, "g");
                text = text.replace( re, '' );
            };

            var count = text.length
            return count;
        }

    };
} );