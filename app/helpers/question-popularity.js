import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') === 0 ) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-exclamation-sign"></span>');
  } else if (question.get('answers').get('length') === 1 ){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  } else if (question.get('answers').get('length') === 2 ){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>' + '<span class="glyphicon glyphicon-fire"></span>');
  } else if (question.get('answers').get('length') === 3 ){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>' + '<span class="glyphicon glyphicon-fire"></span>' + '<span class="glyphicon glyphicon-fire"></span>');
  } else if (question.get('answers').get('length') > 3 ){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>' + '<span class="glyphicon glyphicon-fire"></span>' + '<span class="glyphicon glyphicon-fire"></span>' + '<span class="glyphicon glyphicon-plus"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
