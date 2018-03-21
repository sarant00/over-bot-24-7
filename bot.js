require('dotenv').load();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  NOTIFY_CHANNEL = client.channels.find('id', process.env.ROOM_SEND_MSG); // Channel to send notification
});

client.on('message', msg => {
	/* setInterval(timer(time , val),60 * 1000); */
	var minTime = msg.content.substring(msg.content.length-2,msg.content.length);
	var msgtext = msg.content.substring(1,msg.content.length-5)
	var isnum = /^\d+$/.test(minTime);
	var d = new Date();
	var dMin =  d.getMinutes();
	if(dMin < 15){
		if(minTime > 15 ){dMin += 60;}
	}
	var calTime = 14-(dMin - minTime);
	if(calTime <= -2 )
		calTime = -2;
	var milleSec = calTime*60 *1000;
	var waitTime = calTime+1;
	
	let marKetRole = msg.guild.roles.find("name", process.env.ROLE_MARKET_NAME);
	
	if(msg.content.startsWith("!") && minTime.length === 2 && isnum){
		if(waitTime < 0 || waitTime >15){
			NOTIFY_CHANNEL.sendMessage(msg.member+"  ฮั่นแน่จะลองของกับบอทโง่หรอเดี๋ยวรู้เลย!!!! ของมันออกไปแล้วเฟ้ย");
		}else{
		msg.reply(msgtext+" อีก "+waitTime+" นาทีเจอกันนะจ๊ะ");
		setTimeout(function(){NOTIFY_CHANNEL.sendMessage(marKetRole+">>>"+msgtext +"  อีก 1 นาทีจะลงตลาด และไอ้คุณ" +msg.member+"อย่าลืมไปบิดของนะเว้ยเห้ยเห้ยเห้ย!!!!!" );},milleSec);
		}
	}
	if (msg.content === 'ตู้') 
		msg.reply('ควยทู่');
	if (msg.content === 'ping') 
		msg.reply('สกุลกาก');
	if (msg.content === 'pong') 
		msg.reply('โคตรหล่ออ่ะ');
	if (msg.content === 'หูย') 
		msg.reply('หยวกขาหญ่ายๆ');
	if (msg.content === 'รายงาน') 
		msg.reply('มีเรื่องแล้วหัวกิล');
	if (msg.content === 'บอทน้อยอวยพรหน่อย') 
		msg.reply('ขอให้ท่าน'+msg.member+'จงโชคดีมีชัยทำอะไรก็ดีไปหมดตีบวกก็ติดสุ่มประดับไม่เกลือด้วยเทอญ ขอให้พลังของบอทน้อยสถิตอยู่กับทั่น');
  
});
//415424251693105161
 client.login(process.env.BOT_TOKEN); 

