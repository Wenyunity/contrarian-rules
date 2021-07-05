// Required Items
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

// json
const emoji = require('./emoji.js');
const auth = require('./auth.json');
const userSave = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const ruleList = fs.readdirSync('./rules').filter(file => file.endsWith('.js'));
const ruleOrder = [];
const timeout = [];
const test = true;

for (const rule of ruleList) {
	const command = require(`./rules/${rule}`);
	ruleOrder.push(command);
}

// A log message letting me know this bot is on
client.on('ready', function() {
	console.log(`${client.user.tag} is ready!`);

	client.channels.fetch('857144974189920276')
		.then(channel => console.log(channel.name));
});

// Message send
client.on('message', message => {

  // Only do messages in DMs
  if (message.author.bot || message.guild) {
    return;
  }

  // If message is too long, deny
  if (message.cleanContent.length > 240) {
    message.react('⛔');
		return;
  }

	if (timeout.includes(message.author.id)) {
		message.react('⏰');
    return;
	}

  // Replace extra spaces with one
  const spaceUndoubler = / +/ig;
  const filteredMessage = message.cleanContent.replaceAll(spaceUndoubler, ' ');

  // Grab the reactions
  const ruleCount = [];

	// empty string check
	if (filteredMessage.length < 1) {
		message.react('❓');
		return;
	}

  // Check each rule
	for (const rule in ruleOrder) {
		const ruleX = ruleOrder[rule].check(filteredMessage);
    // React and add.
    if (ruleX) {
      message.react(emoji[ruleX]);
      ruleCount.push(emoji[ruleX]);
    }
  }

	// Create user data
	if (!userSave[message.author.id]) {
		userSave[message.author.id] = { 'numberFree': 10, 'messages': [] };
	}

	if (test) {
		message.reply(filteredMessage + ruleCount.join(' '));
		return;
	}

	// Reply to data
	const data = userSave[message.author.id];
	data.messages.push([filteredMessage, ruleCount]);

	let replyText = '';

	// Push message if old
	if (data.messages.length > data.numberFree) {
			const oldString = data.messages.shift();

			client.channels.fetch('857144974189920276')
				.then(channel => channel.send('<@' + message.author.id +
					'> tested this message: `' + oldString[0] + '`' +
					String.fromCharCode(10) + oldString[1].join(' ')));
	}

	// Grab reply text.
	replyText = data.messages.length.toString() + '/' + data.numberFree.toString()
			+ ' hidden messages used.';

	if (data.messages.length == data.numberFree) {
		replyText += String.fromCharCode(10) + 'Your oldest hidden message `'
				+ data.messages[0][0] + '` will be posted next.';
	}

	message.reply(replyText);

	// Save
	fs.writeFile ('./userData.json', JSON.stringify(userSave, null, 4), function(err) {
		if (err) throw err;
		console.log('completed writing to easterEgg.json');
	});

	timeout.push(message.author.id);

	setTimeout(timeoutSlide, 6000);
});

function timeoutSlide() {
	timeout.shift();
}

client.login(auth.token);
