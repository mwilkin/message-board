import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer1() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
  }

});
