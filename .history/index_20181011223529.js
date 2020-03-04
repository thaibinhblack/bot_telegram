var schedule = require('node-schedule');

var cronExpress = '*/5 * * * * * *';

var j = schedule.scheduleJob(cronExpress, function(fireDate){
  console.log('running job!');
  console.log(fireDate)
});
