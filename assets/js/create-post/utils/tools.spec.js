require = require('amdrequire');

require( [ "./tools" ], function(Tools) {

    describe("Получение количества значащих символов в строке.", function() {
        it("Только буквы", function() {
            var text = "qwerty";

            expect( Tools.getSymbolsCount( text ) ).toBe( 6 );
        });

        it("Исключение знаков препинания", function() {
            var text = "qwe,,..  ,rty,..!   ";

            expect( Tools.getSymbolsCount( text ) ).toBe( 6 );
        });

        it("Исключение специальных знаков", function() {
            var text = "qwe##r#__t_y_-=*";

            expect( Tools.getSymbolsCount( text ) ).toBe( 6 );
        });
    });

    describe("Вычисление примерного времени чтения поста.", function() {
        it("Пустая строка", function() {
            var text = "";

            expect( Tools.getReadingTime( text, 2500 ) == 0.00 ).toBe( true );
        });

        it("Проверка алгоритма: 6 / 3", function() {
            var text = "qwerty";

            expect( Tools.getReadingTime( text, 3 ) == 2 ).toBe( true );
        });

        it("Значение - вещественное число, округление до 2 знаков: 2 / 2500.", function() {
            var text = "ab";

            expect( Tools.getReadingTime( text, 2500 ) == 0.00 ).toBe( true );
        });
    });

    describe("Получение человеко-читаемого обозначения времени.", function() {
        it("Меньше минуты", function() {
            expect( Tools.getReadingTimeText( 0.5 ) == "меньше минуты" ).toBe( true );
            expect( Tools.getReadingTimeText( 1.5 ) == "меньше минуты" ).toBe( true );
        });

        it("Около трех минут", function() {
            expect( Tools.getReadingTimeText( 1.6  ) == "около трех минут" ).toBe( true );
            expect( Tools.getReadingTimeText( 2.5  ) == "около трех минут" ).toBe( true );
            expect( Tools.getReadingTimeText( 3    ) == "около трех минут" ).toBe( true );
            expect( Tools.getReadingTimeText( 3.5  ) == "около трех минут" ).toBe( true );
        });

        it("Меньше 5 минут", function() {
            expect( Tools.getReadingTimeText( 3.6 ) == "меньше 5 минут" ).toBe( true );
            expect( Tools.getReadingTimeText( 4   ) == "меньше 5 минут" ).toBe( true );
            expect( Tools.getReadingTimeText( 5   ) == "меньше 5 минут" ).toBe( true );
            expect( Tools.getReadingTimeText( 5.5 ) == "меньше 5 минут" ).toBe( true );
        });

        it("Около 10 минут", function() {
            expect( Tools.getReadingTimeText( 5.6 ) == "около 10 минут" ).toBe( true );
            expect( Tools.getReadingTimeText( 7   ) == "около 10 минут" ).toBe( true );
            expect( Tools.getReadingTimeText( 12  ) == "около 10 минут" ).toBe( true );
        });

        it("Стоит запастись терпением", function() {
            expect( Tools.getReadingTimeText( 13 ) == "стоит запастись терпением" ).toBe( true );
            expect( Tools.getReadingTimeText( 30 ) == "стоит запастись терпением" ).toBe( true );
        });
    });

});