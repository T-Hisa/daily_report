// {
// 	"type": "modal",
// 	"submit": {
// 		"type": "plain_text",
// 		"text": "Submit",
// 		"emoji": true
// 	},
// 	"close": {
// 		"type": "plain_text",
// 		"text": "Cancel",
// 		"emoji": true
// 	},
// 	"title": {
// 		"type": "plain_text",
// 		"text": "Today's Actions",
// 		"emoji": true
// 	},
// 	"blocks": [
// 		{
// 			"type": "divider"
// 		},
// 		{
// 			"dispatch_action": true,
// 			"type": "input",
// 			"element": {
// 				"type": "plain_text_input",
// 				"action_id": "plain_text_input-action"
// 			},
// 			"label": {
// 				"type": "plain_text",
// 				"text": "Label",
// 				"emoji": true
// 			}
// 		},
// 		{
// 			"dispatch_action": true,
// 			"type": "input",
// 			"element": {
// 				"type": "plain_text_input",
// 				"dispatch_action_config": {
// 					"trigger_actions_on": [
// 						"on_character_entered"
// 					]
// 				},
// 				"action_id": "plain_text_input-action"
// 			},
// 			"label": {
// 				"type": "plain_text",
// 				"text": "Label",
// 				"emoji": true
// 			}
// 		},
// 		{
// 			"type": "input",
// 			"element": {
// 				"type": "plain_text_input",
// 				"multiline": true,
// 				"action_id": "plain_text_input-action"
// 			},
// 			"label": {
// 				"type": "plain_text",
// 				"text": "Label",
// 				"emoji": true
// 			}
// 		}
// 	]
// }