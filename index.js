const redis = require("redis");

//const client = redis.createClient("redis://32b5c5ac0e16:10910");


const client = redis.createClient({
    host: '192.168.60.113',
    port: '6379'
  });


client.on('connect', function(){
    console.log("Redis client connected.")
});