 const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message',async message => {
    const moment = require('moment'); //npm i moment
const ms = require('ms') //npm i ms
    var prefix = '.' //Bot Prefix !
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "شغل")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **اكتب الروم او اكتب !كيف لمعرفة كيفية استخدام البوت بشكل صحيح :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| ** اختر وقت المسابقة  **').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**البوت لا يدعم هاذا الوقت اكتب !كيف لمعرفة كيفية استخدام البوت**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **الان ارسل الجائزة **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **انا لا املك صلاحيات**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});











client.on('message', message => {
     if (message.content === (prefix + "كيف")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("شوف خاصك ")
  message.channel.sendEmbed(embed);
    }
});
client.on("message", message => {
    if (message.content === (prefix + "كيف")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
   
   **
 
           ***كيفية استخدام البوت***
           ** اولا عليك كتابة '' ليبدأ البوت معك  **
            ** ثانيا عليك اختيار روم القيف اواي بدون اضافة رمز الهاشتاق اكتب اسم الروم الذي تريد ان يكتب **
			** اذا لم يشتغل معك البوت تأكد من انك تعطي صلاحيات للبوت للتكلم في الروم ** 
			** ثالثا يجب عليك ان تختار الوقت **
			** اختر رقم من 1 الى 60 وبعدها اختار الحرف ادناه **
			** m= دقيقة **
			** d= يوم **
			** s= ثانية ** 
			** h= ساعة ** 
			** وكما هو موضح في الصورة المصغرة ادناه **
         
        [!clear]  --> {مسح الشات }
        [!ban]  --> {حظر عضو من السيرفر }
        [!kick]  --> {طرد عضو من السيرفر }
        [!bc]  --> {رساله لجميع اعضاء السيرفر }
*-*-*-*-*-*-*-*  *-*-*-*-*-*-*-*    *-*-*-*-*-*-*-*  *-*-*-*-*-*-*-*    
          
   لدخول سيرفر الدهم للبوت --> !سيرفر 
   !support --> دخول سيرفر الدعم
             _ _---------------- _ _
  BOT By: | Abdellhadi #6969  |
   **
   `)
   message.author.sendEmbed(embed)
   
   }
   });  
   

client.on('message', message => {
  if (true) {
if (message.content === (prefix + "سيرفر")) {
     message.author.send('https://discord.gg/v7gFN85').catch(e => console.log(e.stack));
    }
   } 
  });
  




















client.login(process.env.BOT_TOKEN);