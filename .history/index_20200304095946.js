var schedule = require('node-schedule');
var axios = require('axios')
var cronExpress = '0 0 17 * * * *';
schedule.scheduleJob(cronExpress, function(fireDate){
  console.log('running job!');
  axios.post("https://api.telegram.org/bot984384864:AAHL9TTvMytHSHiRJA4eEd5O3fv4njLCbK8/sendMessage",{
        'chat_id': '-1001463887834', //808314484
        'text':   'tesst bot mạnh không?'
    });
  axios.get('http://127.0.0.1:8000/api/auto-nhac-viec')
  .then((response) => {
    console.log(response.data)
    response.data.forEach((element) => {
      var contnet = element.display_name + ' có công viêc' + element.ten_cv + 'sắp hết hạn vào ngày ' + element.han_hoan_thanh +'!'
      axios.post("https://api.telegram.org/bot984384864:AAHL9TTvMytHSHiRJA4eEd5O3fv4njLCbK8/sendMessage",{
          'chat_id': '-1001463887834', //808314484
          'text':   contnet
      });
    
    })
   
  })
  console.log(fireDate)
});

var cronExpress = '0 0 7 * * * *';
schedule.scheduleJob(cronExpress, function(fireDate){
  console.log('running job!');
  axios.post("https://api.telegram.org/bot984384864:AAHL9TTvMytHSHiRJA4eEd5O3fv4njLCbK8/sendMessage",{
        'chat_id': '-1001463887834', //808314484
        'text':   'tesst bot mạnh không?'
    });
  axios.get('http://127.0.0.1:8000/api/auto-nhac-viec')
  .then((response) => {
    console.log(response.data)
    response.data.forEach((element) => {
      var contnet = element.display_name + ' có công viêc ' + element.ten_cv + 'sắp hết hạn vào ngày ' + element.han_hoan_thanh +'!'
      axios.post("https://api.telegram.org/bot984384864:AAHL9TTvMytHSHiRJA4eEd5O3fv4njLCbK8/sendMessage",{
          'chat_id': '-1001463887834', //808314484
          'text':   contnet
      });
    
    })
   
  })
  console.log(fireDate)
});