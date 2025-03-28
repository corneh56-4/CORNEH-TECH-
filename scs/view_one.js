const { adams } = require("../Ibrahim/adams");

adams({ nomCom: "vv2", categorie: "General", reaction: "🤪" }, async (dest, zk, commandeOptions) => {

    const { ms, msgRepondu, repondre } = commandeOptions;

    if (!msgRepondu) {
        return repondre("*Mention a view once media.*");
    }

    if (msgRepondu.viewOnceMessageV2) {
        if (msgRepondu.viewOnceMessageV2.message.imageMessage) {
            // Handle view once image message
            var image = await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.imageMessage);
            var texte = msgRepondu.viewOnceMessageV2.message.imageMessage.caption;
    
            await zk.sendMessage(dest, { image: { url: image }, caption: texte }, { quoted: ms });
        } else if (msgRepondu.viewOnceMessageV2.message.videoMessage) {
            // Handle view once video message
            var video = await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.videoMessage);
            var texte = msgRepondu.viewOnceMessageV2.message.videoMessage.caption;
    
            await zk.sendMessage(dest, { video: { url: video }, caption: texte }, { quoted: ms });
        } else if (msgRepondu.viewOnceMessageV2.message.audioMessage) {
            // Handle view once voice message
            var audio = await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.audioMessage);
            var texte = msgRepondu.viewOnceMessageV2.message.audioMessage.caption || "Forwarded voice message";

            await zk.sendMessage(dest, { audio: { url: audio }, mimetype: 'audio/ogg; codecs=opus' }, { quoted: ms });
        }
    } else {
        return repondre("This message is not set to view once.");
    }

});
// const {adams}=require("../Ibrahim/adams") ;



adams({nomCom:"vv",categorie:"General",reaction:"🤪"},async(dest,zk,commandeOptions)=>{

const {ms,msgRepondu,repondre}=commandeOptions;


if(!msgRepondu){return repondre("*Mentionne a view once media* .");}


if(msgRepondu.viewOnceMessageV2)
{
      if(msgRepondu.viewOnceMessageV2.message.imageMessage)
       {
         var image =await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.imageMessage)
        var texte = msgRepondu.viewOnceMessageV2.message.imageMessage.caption
    
     await zk.sendMessage(dest,{image:{url:image},caption:texte},{quoted:ms})
      }else if(msgRepondu.viewOnceMessageV2.message.videoMessage){

    var video = await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.videoMessage)
var texte =msgRepondu.viewOnceMessageV2.message.videoMessage.caption


await zk.sendMessage(dest,{video:{url:video},caption:texte},{quoted:ms})

}
}else
{
   return repondre("this message is not on view once .")
}



})
