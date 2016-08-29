import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    this.get('questions').pushObject(question);
  },
  remove(question) {
    this.get('favoriteQuestions').removeObject(question);
  },
  empty() {
    this.get('favoriteQuestions').clear();
  }
});
