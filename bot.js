const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  NOTIFY_CHANNEL = client.channels.find('id', '415424251693105161'); // Channel to send notification
});

client.on('message', msg => {
	/* setInterval(timer(time , val),60 * 1000); */
	var minTime = msg.content.substring(msg.content.length-2,msg.content.length);
	var msgtext = msg.content.substring(1,msg.content.length-5)
	var isnum = /^\d+$/.test(minTime);
	var d = new Date();
	var dMin =  d.getMinutes();
	if(dMin < 15)
		if(minTime > 15 )
			dMin += 60;
	var calTime = 14-(dMin - minTime);
	if(calTime < -1 )
		calTime = -1;
	var milleSec = calTime*60 *1000;
	var waitTime = calTime+1;
	if(msg.content.startsWith("!") && minTime.length === 2 && isnum){
		if(waitTime <= 0){
			msg.reply("อย่ามั่วสิเดี๋ยวโปรแกรมบัค");
		}else{
		msg.reply(msgtext+" อีก "+waitTime+" นาทีเจอกันนะจ๊ะ");
		setTimeout(function(){NOTIFY_CHANNEL.sendMessage(msgtext +"  อีก 1 นาทีจะลงตลาด");},milleSec);
		}
	}
	if (msg.content === 'ping') {
		msg.reply('สกุลกาก');
  }
});

 client.login(process.env.BOT_TOKEN); 

