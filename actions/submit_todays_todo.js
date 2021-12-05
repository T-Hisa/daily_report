const app = require('../app')

app.view("submit_todays_todo", ({ ack, body, view, context }) => {
  // Acknowledge the view_submission event
  ack();
  console.log('submit received!!')
  // Do whatever you want with the input data - here we're saving it to a DB then sending the user a verifcation of their submission

  // Assume there's an input block with `test_input` as the block_id and `dreamy_input` as the action_id
  // const val =
  //   view["state"]["values"]["sample_input"]["plain_text_input_action"];
  // const user = body["user"]["id"];

  // You'll probably want to store these values somewhere
  console.log("context");
  console.log(context);
  console.log('view');
  console.log(view);
  console.log('body');
  console.log(body);
  console.log("------------------------------------");
});