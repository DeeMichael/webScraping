var express = require('express')
var fs = require('fs')
var request = require('request')
var cheerio = require('cheerio')
var app = express()

var scrape = function(url,num){
    app.get('/scrape', function(req, res) {
      // var json = { title : "", release : "", rating : ""}
      request(url, function(error, response, html) {
        if (!error) {
          var $ = cheerio.load(html)

          $('a h2').filter(function(){
            var data = $(this)
            array = data.text().split('\n')
            console.log(array)
          })

          var nextPageRoute = $('#pagnNextLink').attr('href')
          var nextPageURL = 'http://www.amazon.com' + nextPageRoute
          // res.send(html)
          if (num >= 0){
            console.log('Before -= num is: ', num)
            num -= 1
            console.log('After -= num is : ', num)
            console.log('nextPageURL is: ', nextPageURL)
            console.log(scrape(nextPageURL,num))
            console.log('after recursive scrape call')
          }
          res.send("Check console!")
        }
      })
    })
  }
var url = 'http://www.amazon.com/b/ref=lp_3400371_ca_ln_1_0?node=1258595011&ie=UTF8&qid=1459544863'

// scrape(url,5)


app.listen('8081',function () {
  console.log("running on port 8081")
})

scrape(url,5)
