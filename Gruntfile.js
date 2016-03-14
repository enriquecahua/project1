module.exports = function (grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    
                    engine: 'im',

                    sizes: [{
                        width: 400
                    }, {
                        width: 800
                    }]
                },
                files: [{
                    expand: true,
                    src: ['images/**/*.{gif,jpg,png}'],
                    cwd: 'src/',
                    dest: 'dist/'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask("default", ['responsive_images']);
}