/**
 * v 0.1
 * https://github.com/psyipm/jquery-tinymceInit
 */

/**
 * remove all instances of tinyMCE
 * @returns {undefined}
 */
jQuery.tinymceRemove = function() {
	try {
        for (var i=0; i<=tinymce.editors.length; i++) {
            tinyMCE.editors[i].remove();
        };
    }
    catch (e) {
        console.log('No TinyMce instances found');
    }
};

/**
 * @param {object} options
 * @returns {jQuery.fn@call;each}
 */
jQuery.fn.tinymceInit = function(options) {
    return this.each(function() {
        var defaults = {
            language: $.cookie("lang") || "en",
            selector: (this.id) ? "#"+this.id : "textarea",
            height: "500",
            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor"
            ],
            toolbar: "forecolor backcolor"
        };
        
        var s = $.extend(true, defaults, options);
        
        //debug
        console.log(s);
        
        try {
            tinymce.init({
                selector: s.selector,
                height: s.height,
                plugins: s.plugins,
                toolbar: s.toolbar,
                language: s.language
            });
        }
        catch(e) {
            console.log(e);
        }
    });
};