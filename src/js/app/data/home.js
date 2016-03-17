define('data/home', function () {
  /**
   * A module representing a home dataset.
   * @exports data/home
   * @type {{title: string, lead: string, body: string}}
   */
  var homeData = {
    title: 'Home Page',
    lead: 'A \'living\' style guide for Bootstrap components implemented through Handlebars via RequireJS.',
    body: 'This is a modular micro-MVC single-page web app serving Bootstrap components through Handlebars with ' +
    'RequireJS (via ExpressJS). A minimal stack that renders a "living template" of Bootstrap GUI widgets ' +
    '(components) using the HandlebarsJS template system. All thanks to RequireJS.'
  };

  return homeData;
});
