(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['quiz'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<div class=\"question\">\n  <div id=\"question-text\">\n	<em>"
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "</em>\n  </div>\n  </div class=\"radio-buttons\">\n    <fieldset id=\"answers\">\n      <legend>Choose your answer</legend>\n      <div>\n        <input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\" id=\"first-answer\" value=\""
    + alias4(((helper = (helper = helpers.firstAnswer || (depth0 != null ? depth0.firstAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstAnswer","hash":{},"data":data}) : helper)))
    + "\">\n        <label for=\"firstAnswer\">"
    + alias4(((helper = (helper = helpers.firstAnswer || (depth0 != null ? depth0.firstAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstAnswer","hash":{},"data":data}) : helper)))
    + "</label>\n      </div>\n      <div>\n        <input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\" id=\"second-answer\" value=\""
    + alias4(((helper = (helper = helpers.secondAnswer || (depth0 != null ? depth0.secondAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondAnswer","hash":{},"data":data}) : helper)))
    + "\">\n        <label for=\"secondAnswer\">"
    + alias4(((helper = (helper = helpers.secondAnswer || (depth0 != null ? depth0.secondAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondAnswer","hash":{},"data":data}) : helper)))
    + "</label>\n      </div>\n      <div>\n        <input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\" id=\"third-answer\" value=\""
    + alias4(((helper = (helper = helpers.thirdAnswer || (depth0 != null ? depth0.thirdAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thirdAnswer","hash":{},"data":data}) : helper)))
    + "\">\n        <label for=\"thirdAnswer\">"
    + alias4(((helper = (helper = helpers.thirdAnswer || (depth0 != null ? depth0.thirdAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thirdAnswer","hash":{},"data":data}) : helper)))
    + "</label>\n      </div>\n      <div>\n        <input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\" id=\"fourth-answer\" value=\""
    + alias4(((helper = (helper = helpers.fourthAnswer || (depth0 != null ? depth0.fourthAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fourthAnswer","hash":{},"data":data}) : helper)))
    + "\">\n        <label for=\"fourthAnswer\">"
    + alias4(((helper = (helper = helpers.fourthAnswer || (depth0 != null ? depth0.fourthAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fourthAnswer","hash":{},"data":data}) : helper)))
    + "</label>\n      </div>\n    </fieldset>\n  </div>\n</div>\n";
},"useData":true});
})();
