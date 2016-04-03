var express = require('express')
var fs = require('fs')
var request = require('request')
var cheerio = require('cheerio')
var app = express()

var scrape = function(url){
  app.get('/scrape', function(req, res) {
    // url = 'http://www.amazon.com/b/ref=lp_3400371_ca_ln_1_0?node=1258595011&ie=UTF8&qid=1459544863'
    // var json = { title : "", release : "", rating : ""}
    request(url, function(error, response, html) {
      if (!error) {
        // console.log(html)
        var $ = cheerio.load(html)
        // var scrapeStuff = $('h1').text()
        // for ( var i = 0; i < scrapeStuff.length; i++ ) {
        //   console.log(scrapeStuff[i])
        // }
        $('a h2').filter(function(){
          var data = $(this)
          // console.log(data)
          array = data.text().split('\n')
          console.log(array)
          // console.log(data.text())
        })

      res.send(html)
    }
    })
  })
}
var url = 'http://www.amazon.com/b/ref=lp_3400371_ca_ln_1_0?node=1258595011&ie=UTF8&qid=1459544863'

scrape(url)

// app.get('/scrape', function(req, res) {
//   url = 'http://www.amazon.com/b/ref=lp_3400371_ca_ln_1_0?node=1258595011&ie=UTF8&qid=1459544863'
//   var json = { title : "", release : "", rating : ""};
//
//   request(url, function(error, response, html) {
//     if (!error) {
//       console.log(html)
//       var $ = cheerio.load(html)
//       var links = $('a')
//       for ( var i = 0; i < links.length; i++ ) {
//         console.log(links[i]);
//       }
//     res.send(html)
//   }
//   })
// })

app.listen('8081',function () {
  console.log("running on port 8081")
})
