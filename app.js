// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

module.exports = app

require('./actions')
require('./events')
require('./commands')
require('./views')

// app.command('/hello_world', async ({ ack, payload, context }) => {
//   // Acknowledge the command request
//   ack();

//   try {
//     const result = await app.client.views.open({
//       token: context.botToken,
//       // Pass a valid trigger_id within 3 seconds of receiving it
//       trigger_id: payload.trigger_id,
//       // View payload
//       view: {
//         type: 'modal',
//         // View identifier
//         callback_id: 'view_1',
//         title: {
//           type: 'plain_text',
//           text: 'Modal title'
//         },
//         blocks: [
//           {
//             type: 'section',
//             text: {
//               type: 'mrkdwn',
//               text: 'Welcome to a modal with _blocks_'
//             },
//             accessory: {
//               type: 'button',
//               text: {
//                 type: 'plain_text',
//                 text: 'Click me!'
//               },
//               action_id: 'button_abc'
//             }
//           },
//           {
//             type: 'input',
//             block_id: 'test_input',
//             label: {
//               type: 'plain_text',
//               text: 'What are your hopes and dreams?'
//             },
//             element: {
//               type: 'plain_text_input',
//               action_id: 'dreamy_input',
//               multiline: true
//             }
//           }
//         ],
//         submit: {
//           type: 'plain_text',
//           text: 'Submit'
//         }
//       }
//     });
//     console.log(result);
//   }
//   catch (error) {
//     console.error(error);
//   }
// });

// // Listen for a button invocation with action_id `button_abc` (assume it's inside of a modal)
// // You must set up a Request URL under Interactive Components on your app configuration page
// app.action('button_abc', async ({ ack, body, context }) => {
//   // Acknowledge the button request
//   ack();

//   try {
//     const result = await app.client.views.update({
//       token: context.botToken,
//       // Pass the view_id
//       view_id: body.view.id,
//       // View payload with updated blocks
//       view: {
//         type: 'modal',
//         // View identifier
//         callback_id: 'view_1',
//         title: {
//           type: 'plain_text',
//           text: 'Updated modal'
//         },
//         blocks: [
//           {
//             type: 'section',
//             text: {
//               type: 'plain_text',
//               text: 'You updated the modal!'
//             }
//           },
//           {
//             type: 'image',
//             image_url: 'https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif',
//             alt_text: 'Yay! The modal was updated'
//           }
//         ]
//       }
//     });
//     console.log(result);
//   }
//   catch (error) {
//     console.error(error);
//   }
// });



// All the room in the world for your code
const start_app = async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
}

start_app()