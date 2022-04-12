const PORT = process.env.PORT || 8080 //this is for deployment
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

const blockchains = [
    {
        name: 'solana', 
        address: 'https://docs.solana.com/developing/programming-model/transactions'
        
    },
    {
        name:'solana1',
        address:'https://docs.solana.com/developing/programming-model/accounts',
    },
    {
        name:'solana2',
        address: 'https://docs.solana.com/developing/programming-model/runtime', 
    },

    {
        name: "solana4",
        address: 'https://docs.solana.com/developing/clients/jsonrpc-api',
    },
    {
        name: 'algorand',
        address: 'https://developer.algorand.org/docs/get-details/#transactions',
        base: 'https://developer.algorand.org/docs//'
    }, 
   
    { 
        name: 'algorand1',
    address: 'https://developer.algorand.org/docs/get-details/accounts/create' ,
    },
{
    name: 'algorand2',
    address: 'https://developer.algorand.org/docs/get-details/asa/',
},
    {
        name: 'ethereum',
        address: 'https://ethereum.org/en/developers/docs/transactions',
        base: 'https://ethereum.org/en/developers/docs'
    },       
]
const Format = []
blockchains.forEach(blockchain => {
    axios.get(blockchain.address)
    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)

        $('a:contains("transaction")',html).each(function() {
            const title = $(this).text()
           const url =  $(this).attr('href')
           Format.push({
               title,
               url,
               source:blockchain.name
        })
        })
    })
})
app.get('/', (req, res) => {
    res.json('Welcome to my Boiler Plate-Wiki-API')

})
app.get('/instructions', (req, res) => {
  
 res.json (blockchains)

 app.get('/instructions/:blockchainId' , (req, res) => {
     const blockchainId = req.params.blockchainId 

     const blockchainAddress = blockchains.filter(blockchain => blockchain.name == blockchainId) [0].address
     const blockchainBase = blockchains.filter(blockchain => blockchain.address == blockchainAddress)[0].base
     
     axios.get(blockchainAddress)
     .then(response => {
         const html = response.data.html
          const $ = cheerio.load (html)
          const specificblockchains = []

          $('a:contains("instructions' , html).each(function (){
            const title = $(this).text()
            const url = $ (this).attr('href')   
            specificblockchains.push({
                title,
                url: blockchainBase + url,
                source: blockchainId
            })           
          })
          res.json (specificblockchains)
     }).catch (err => console.log (err))

 })
  


})
  app.listen (PORT ,() => console.log ('server listening on port ${}'))

