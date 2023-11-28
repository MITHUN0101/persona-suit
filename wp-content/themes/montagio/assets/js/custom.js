jQuery(window).scroll(function() {

    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 60) {
            jQuery('body').addClass("fixed");
        } else {
            jQuery('body').removeClass("fixed");
        }
    });
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 300) {
        jQuery("section.menu-section").addClass("darkHeader");
    } else {
        jQuery("section.menu-section").removeClass("darkHeader");
    }
});
jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 100) {
        jQuery("section.main-header-address").addClass("darkHeader");
    } else {
        jQuery("section.main-header-address").removeClass("darkHeader");
    }
});
jQuery(document).ready(function() {
    jQuery(".elementor-menu-toggle").click(function() {

        jQuery('body').toggleClass("active_m");

    });
});


jQuery(document).on("click", ".readMore,.readLess", function() {
    //         jQuery(".less_text").toggle("fold", 1000 );
    jQuery(this).parent().find(".less_text").fadeToggle(400);
    if (jQuery(this).hasClass("readMore")) {
        jQuery(this).removeClass("readMore");
        jQuery(this).addClass("readLess");
        jQuery(this).text("Read Less");
    } else {
        jQuery(this).removeClass("readLess");
        jQuery(this).addClass("readMore");
        jQuery(this).text("Read More");
    }

});
jQuery(document).ready(function() {
    /*blogs tabing*/
    jQuery('.blog_archive_loader').hide();
    jQuery(".post_cat_get").click(function(e) {


        e.preventDefault();

        var cat_id = jQuery(this).parent().attr("data-href");

        jQuery("ul.nav.nav-tabs li").removeClass("active");
        jQuery(this).closest('li').addClass("active");

        jQuery.ajax({
            type: 'post',
            url: aek_script_vars.admin_ajax,
            data: {
                action: 'get_posts_with_pagination',
                cat_id: cat_id,
                ajax_call: 1,
            },
            beforeSend: function() {
                jQuery('.blog_archive_loader').show();
            },
            complete: function() {
                jQuery('.blog_archive_loader').hide();
            },
            success: function(res) {
                jQuery(".blogs_post").html(res);
                //         jQuery('html, #scroll-pageination').animate({ scrollTop: 0 }, 'slow');
            }
        })
    });

    jQuery("body").on("click", ".blog_posts_pagination a", function(e) {

        e.preventDefault();

        var catid = jQuery(".post_cat_id").val();
        var current_page = jQuery(".blog_posts_pagination").find("span.current").html();

        if (jQuery(this).hasClass("prev")) {

            var paged = parseInt(current_page) - parseInt(1);

        } else if (jQuery(this).hasClass("next")) {

            var paged = parseInt(current_page) + parseInt(1);

        } else {

            var paged = jQuery(this).html();

        }
        jQuery.ajax({
            type: 'post',
            url: aek_script_vars.admin_ajax,
            data: {
                action: 'get_posts_with_pagination',
                cat_id: catid,
                paged: paged,
                ajax_call: 1,
            },
            beforeSend: function() {
                jQuery('.blog_archive_loader').show();
            },
            complete: function() {
                jQuery('.blog_archive_loader').hide();
            },
            success: function(res) {
                jQuery(".blogs_post").html(res);
                //         jQuery('html, #scroll-pageination').animate({ scrollTop: 0 }, 'slow');
            }
        });

    });

});