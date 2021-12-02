const app = require('../app')

app.view('modal1', ({ ack, body, view, context }) => {
  // Acknowledge the view_submission event
  ack();
  
  // Do whatever you want with the input data - here we're saving it to a DB then sending the user a verifcation of their submission

  // Assume there's an input block with `test_input` as the block_id and `dreamy_input` as the action_id
  const val = view['state']['values']['test_input']['dreamy_input'];
  const user = body['user']['id'];
  
  // You'll probably want to store these values somewhere
  console.log(val);
  console.log(user);
});