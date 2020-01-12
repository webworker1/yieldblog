const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
   
function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://theyieldblog.com")
          .save("./public/sitemap.xml")
    );
}

generateSitemap().then(
    () => {
    console.info('Sitemap Generated')
    },
    err => {
    console.info('Error while generating sitemap');
    console.info(err);
    }
    ).finally(
    () => process.exit()
    );
