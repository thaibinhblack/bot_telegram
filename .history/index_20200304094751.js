var schedule = require('node-schedule');
var axios = require('axios')
var cronExpress = '*/5 * * * * * *';

schedule.scheduleJob(cronExpress, function(fireDate){
  console.log('running job!');
  axios.get('http://127.0.0.1:8000/api/auto-nhac-viec')
  .then((response) => {
    console.log(response.data)
    response.data.forEach((element) => {
      var contnet = element.display_name + ' có công viêc' + element.ten_cv + 'sắp hết hạn vào ngày ' + element.ngay_hoan_thanh +'!'
    })
  })
  console.log(fireDate)
});
