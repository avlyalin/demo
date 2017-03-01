module.exports = function(grunt) {
    // Конфигуграция задач
    grunt.initConfig({
        bowerRequirejs : {
            target: {
                // Путь к конфигурационному файлу RequireJS
                rjsConfig: 'assets/js/requirejs-config.js'
            },
            options: {
                // Опция указывающая, что зависимости установленных пакетов так же следует
                // добавлять в конфигурационный файл RequireJS
                // Например: при установке "bootstrap" добавится две записи: "bootstrap" и "jquery"
                transitive: true
            }
        },

        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec'
            },
            all: ['.']
        },

        less: {
            compile: {
                files: {
                    'assets/css/main.css': 'assets/less/main.less'
                }
            }
        },

        cssmin: {
            // Минифицируем все файлы в папке assets/css и
            // добавим им расширение ".min.css"
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: "assets/js",
                    mainConfigFile: "assets/js/requirejs-config.js",
                    name: "app",
                    out: "assets/js/dist.js"
                }
            }
        }

    });

    // Загружаем задачи
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Создаем другое имя задачи по которому мы будем ее вызывать
    grunt.registerTask('update-requirejs', ['bowerRequirejs']);
    grunt.registerTask('test', ['jasmine_node']);
    grunt.registerTask('build', [ 'bowerRequirejs', 'jasmine_node', 'less', 'cssmin', 'requirejs' ]);
}