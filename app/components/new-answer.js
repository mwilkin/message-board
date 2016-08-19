import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        author: this.get('user') ? this.get('user'):"",
        content: this.get('content') ? this.get('content'):"",
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2',params);
    }
  }

});
