import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  answerCount: Ember.computed('question.answers', function(){
    var answerCount = this.get('question.answers.length');
    return answerCount;
  })
});
