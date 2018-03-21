require('dotenv').load();

const Discord = require('discord.js');
const client = new Discord.Client();

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

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
	if (msg.content === 'เทพพระเจ้าแกะ') {
		switch (randomIntFromInterval(1, 5)) {
			case 1:
				msg.reply("``` \n \
           __  _ \n \
       .-.'  `; `-._  __  _ \n \
      (_,         .-:'  `; `-._ \n \
    ,'o\"(        (_,           ) \n \
   (__,-'      ,'o\"(            )> \n \
      (       (__,-'            ) \n \
       `-'._.--._(             ) \n \
          |||  |||`-'._.--._.-' \n \
                     |||  ||| ```");
				break;
				
			case 2:
				msg.reply("``` \n \
                     _,._ \n \
                 __.'   _) \n \
                <_,)'.-\"a\ \n \
                  /' (    \ \n \
      _.-----..,-'   (`\"--^ \n \
     //              | \n \
    (|   `;      ,   | \n \
      \   ;.----/  ,/ \n \
       ) // /   | |\ \ \n \
       \ \\`\   | |/ / \n \
        \ \\ \  | |\/ \n \
         `" `"  `"` ```");
				break;
				
			case 3:
				msg.reply("``` \n \
                        _.-.. \n \
                      ,'9 )\)`-.,.--. \n \
                      `-.|           `. \n \
                         \,      ,    \) \n \
                          `.  )._\   (\ \n \
                            |//   `-,// \n \
                            ]||    //\" \n \
                            \"\"    \"\" ```");
				break;
				
			case 4:
				msg.reply("``` \n \
                      __ \n \
            ,'```--'''  ``-''-. \n \
          ,'            ,-- ,-'. \n \
         (//            `\"'| 'a \ \n \
           |    `;         |--._/ \n \
           \    _;-._,    / \n \
            \__/\\   \__,' \n \
             ||  `'   \|\\ \n \
             \\        \\`' \n \
              `'        `' ```");
				break;
				
		  	case 5:
				msg.reply("``` \n \
  ,-''''-. \n \
 (.  ,.   L        ___...__ \n \
 /7} ,-`  `'-==''``        ''._ \n \
//{                           '`. \n \
\_,X ,                         : ) \n \
    7                          ;` \n \
    :                  ,       / \n \
     \_,                \     ; \n \
       Y   L_    __..--':`.    L \n \
       |  /| ````       ;  y  J \n \
       [ j J            / / L ; \n \
       | |Y \          /_J  | | \n \
       L_J/_)         /_)   L_J \n \
      /_)               sk /_) ```");
		  		break;
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

