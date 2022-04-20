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
   name: 'algorand3',
    address:'https://developer.algorand.org/docs/get-details/dapps/smart-contracts/smartsigs/walkthrough/',
},

{ name: 'algorand4',
    address: 'https://developer.algorand.org/docs/get-details/dapps/smart-contracts/ABI/',
},

{name: 'algorand5',
    address:'https://developer.algorand.org/docs/get-details/dapps/smart-contracts/frontend/apps/' ,
},
{name: 'algorand6',
address: 'https://developer.algorand.org/docs/get-details/dapps/smart-contracts/frontend/smartsigs/',
},
{name: 'algorand7',
address: 'https://developer.algorand.org/docs/get-details/dapps/smart-contracts/',
},
{name: 'algorand8',
address: 'https://developer.algorand.org/docs/get-details/dapps/avm/',
},
{name: 'algorand9',
address: 'https://developer.algorand.org/docs/get-details/dapps/avm/teal/',
},
{name: 'algorand10',
address: 'https://developer.algorand.org/docs/get-details/dapps/avm/teal/specification/',
},
{
    name: 'algorand11',
address: 'https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/',
},
{
    name: 'algorand12',
address: 'https://developer.algorand.org/docs/get-details/dapps/avm/teal/guidelines/',
},
{
    name: 'algorand13',
address: 'https://developer.algorand.org/docs/archive/build-apps/setup/',
},
{
    name: 'algorand14',
address: 'https://developer.algorand.org/docs/archive/build-apps/connect/',
},
{
    name: 'algorand15',
address: 'https://developer.algorand.org/docs/archive/build-apps/apps/',
},
{ name: 'algorand16',
address:'https://developer.algorand.org/docs/archive/migration/' ,
},

   {
        name: 'ethereum',
        address: 'https://ethereum.org/en/developers/docs/transactions',
        base: 'https://ethereum.org/en/developers/docs'
    },  
   
    { 
        name: 'ethereum 2',
    address:'https://ethereum.org/en/developers/docs/data-and-analytics/block-explorers/',
},
    
{ 
    name: 'ethereum 3',
address:'https://ethereum.org/en/developers/docs/storage/',
},


{ 
    name: 'ethereum 4',
address:'https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/',
},


{ 
    name: 'ethereum 5',
address:'https://ethereum.org/en/developers/docs/smart-contracts/security/',
},
{ 
    name: 'ethereum 6',
address:'https://ethereum.org/en/developers/docs/programming-languages/dart/',
},


{ 
    name: 'ethereum 7',
address:'https://ethereum.org/en/developers/docs/programming-languages/delphi/',
},
{ 
    name: 'ethereum 8',
address:'https://ethereum.org/en/developers/docs/programming-languages/dot-net/',
},

{ 
    name: 'ethereum 9',
address:'https://ethereum.org/en/developers/docs/programming-languages/golang/',
},
{ 
    name: 'ethereum 10',
address:'https://ethereum.org/en/developers/docs/programming-languages/java/',
},
{ 
    name: 'ethereum 11',
address:'https://ethereum.org/en/developers/docs/programming-languages/javascript/',
},
{ 
    name: 'ethereum 12',
address:'https://ethereum.org/en/developers/docs/programming-languages/python/',
},
{ 
    name: 'ethereum 13',
address:'https://ethereum.org/en/developers/docs/programming-languages/ruby/',
},
{ 
    name: 'ethereum 14',
address:'https://ethereum.org/en/developers/docs/programming-languages/rust/',
},
{ 
    name: 'ethereum 15',
address:'https://ethereum.org/en/developers/docs/oracles/',
},
{ 
    name: 'ethereum 16',
address:'https://ethereum.org/en/developers/docs/mev/',
}

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

