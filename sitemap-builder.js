require('babel-register');
 
const router = require('./router').default;
const Sitemap = require('./sitemap-routes').default;
 
(
    new Sitemap(router)
        .build('http://theyieldblog.com')
        .save('./sitemap.xml')
);

generateSitemap();
