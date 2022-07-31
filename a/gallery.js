$(function () {
    var carouselLinks = [
        {
            type: 'text/html',
            title: '认证机构ERP系统 业务范围代码',
            href: '/a/gallery/1.jpg?20220621'
        },
        {
            type: 'text/html',
            title: '认证机构管理系统 业务范围代码',
            href: '/a/gallery/2.jpg?20220621'
        },
        {
            type: 'text/html',
            title: '认证机构业务管理系统 业务范围大类',
            href: '/a/gallery/3.jpg?20220621'
        },
        {
            type: 'text/html',
            title: '认证机构ERP管理系统 业务范围中类',
            href: '/a/gallery/4.jpg?20220621'
        },
        {
            type: 'text/html',
            title: '认证机构ERP系统 业务范围小类',
            href: '/a/gallery/5.jpg?20220621'
        },
        {
            type: 'text/html',
            title: '认证机构管理系统 行政区划代码',
            href: '/a/gallery/6.jpg?20220621'
        },
        {
            type: 'text/html',
            title: '认证机构业务管理系统 国民经济行业分类',
            href: '/a/gallery/7.jpg?20220621'
        },
        {
            type: 'text/html',
            title: '认证机构ERP管理系统 编嘉',
            href: '/a/gallery/8.jpg?20220621'
        },
        {
            type: 'text/html',
            title: '认证机构ERP系统 妙得',
            href: '/a/gallery/9.jpg?20220621'
        },
    ];

    blueimp.Gallery(carouselLinks, {
        container: '#blueimp-image-carousel',
        carousel: true,
        toggleControlsOnSlideClick: false,
        startSlideshow: false,
        slideshowInterval: 6000,
        onslide: function (index, slide) {
            var slide = index + 1;

            // AJAX页面的百度统计 https://tongji.baidu.com/web/help/article?id=235
            if (typeof _hmt !== "undefined") {
                _hmt.push(['_trackPageview', location.pathname + location.search + "&blueimp-image-carousel-slide=" + slide]);
            }

            // AJAX页面的谷歌统计 https://developers.google.com/analytics/devguides/collection/gtagjs/pages
            if (typeof gtag !== "undefined" && typeof GA_TRACKING_ID !== "undefined") {
                gtag('config', GA_TRACKING_ID, {
                    'page_title' : document.title,
                    'page_path': location.pathname + location.search + "&blueimp-image-carousel-slide=" + slide
                });
            }
        }
    });

})
