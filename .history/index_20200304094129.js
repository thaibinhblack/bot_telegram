var schedule = require('node-schedule');
var axios = require('axios')
var cronExpress = '*/5 * * * * * *';

schedule.scheduleJob(cronExpress, function(fireDate){
  console.log('running job!');
  axios.get('http://127.0.0.1:8000/api/auto-nhac-viec')
  .then((response) => {
    console.log(response.data)
    axios.post("https://api.telegram.org/bot984384864:AAHL9TTvMytHSHiRJA4eEd5O3fv4njLCbK8/sendMessage",{
        'chat_id': '-1001463887834', //808314484
        'text':   'test 5s nhắc 1 lần'
    });
  })
  console.log(fireDate)
});
