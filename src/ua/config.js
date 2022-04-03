const fs = require('fs') 
const ua = require('./client')

const ClientCfg = []

const GetClient = () => {
    return ClientCfg
}

const SaveConfiguration = () => {
    console.log("save this")

    // var data = fs.readFileSync('./tmp/clconfig.json')
    // obj = JSON.parse(data)
    const data = {
        table: []
    }

    ClientCfg.map((cl)=>{
    
        data.table.push({
            id: cl.id,
            url: cl.url
        }); //add some data
    
    })

    json = JSON.stringify(data, null, 2); //convert it back to json
    fs.writeFileSync('./tmp/clconfig.json', json, function (err){
        console.log(err)
    })
}

const ReadConfiguration = () => {
    var data = fs.readFileSync('./tmp/clconfig.json')
    obj = JSON.parse(data)

    obj.table.map((data)=>{
        // session = ua.CreateSession(data.url)
        
        ClientCfg.push({
            id: data.id,
            url: data.url,
            // session: session
        })
    })
}

module.exports  = {
    GetClient,
    SaveConfiguration,
    ReadConfiguration
}