const {createLogger,format,transports}= require('winston')
const {combine,timestamp,label,printf} =format

const customFormat= printf(({level,message,timestamp})=>{
    return `${timestamp}: ${level} : ${message}`;
})


const Logger=createLogger({
    format:combine(
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        customFormat
    ),
    transports:[
     // u want your logs to be printed in console also and for later debugging you want 
// them to be stored in some files also ,so u put here all the streams where u want your log
      new transports.Console(),
      new transports.File({filename: 'combined.log'})
    ],
});


module.exports=Logger
