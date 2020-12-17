const nodeSchedule = require('node-schedule');

console.log('inizializzazione')
const firstJob = nodeSchedule.scheduleJob('Test stampa console','10 * * * * *',()=>{
    console.log('Job inizializzato....');
});

module.exports = {
    firstJob
}