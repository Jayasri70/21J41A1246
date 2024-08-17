const { SerialPort } = require('serialport');

module.exports = {
    scanner: function(){
        const port = new SerialPort({ path: 'COM6', baudRate: 9600, autoOpen: false });
        
        port.open(function (err) {
            if (err) {
                return console.log('Error opening port: ', err.message)
            }
            port.write('main screen turn on')
        })
        
        port.on('open', function() {
            setInterval(function(){
                const portReader = port.read();
                if(portReader != null){
        
                    const sensorVal = Buffer.from(portReader).toString();
               
                    const soap = require('soap');

                    const url = 'http://example.com?wsdl';
                    
                    soap.createClient(url, function(err, client) {
                
                        client.GetProductById({ UserId: "1", ProductId: sensorVal }, function(err, result) {
                            if(err) return console.log(err);
                            console.log(result.GetProductByIdResult);
                            return result.GetProductByIdResult; //returns nothing into index.js
                        });
                    });
                    
                }
            }, 500);
        })
    }
}const { SerialPort } = require('serialport');

module.exports = {
    scanner: function(){
        const port = new SerialPort({ path: 'COM6', baudRate: 9600, autoOpen: false });
        
        port.open(function (err) {
            if (err) {
                return console.log('Error opening port: ', err.message)
            }
            port.write('main screen turn on')
        })
        
        port.on('open', function() {
            setInterval(function(){
                const portReader = port.read();
                if(portReader != null){
        
                    const sensorVal = Buffer.from(portReader).toString();
               
                    const soap = require('soap');

                    const url = 'http://example.com?wsdl';
                    
                    soap.createClient(url, function(err, client) {
                
                        client.GetProductById({ UserId: "1", ProductId: sensorVal }, function(err, result) {
                            if(err) return console.log(err);
                            console.log(result.GetProductByIdResult);
                            return result.GetProductByIdResult; //returns nothing into index.js
                        });
                    });
                    
                }
            }, 500);
        })
    }
}const { SerialPort } = require('serialport');

module.exports = {
    scanner: function(){
        const port = new SerialPort({ path: 'COM6', baudRate: 9600, autoOpen: false });
        
        port.open(function (err) {
            if (err) {
                return console.log('Error opening port: ', err.message)
            }
            port.write('main screen turn on')
        })
        
        port.on('open', function() {
            setInterval(function(){
                const portReader = port.read();
                if(portReader != null){
        
                    const sensorVal = Buffer.from(portReader).toString();
               
                    const soap = require('soap');

                    const url = 'http://example.com?wsdl';
                    
                    soap.createClient(url, function(err, client) {
                
                        client.GetProductById({ UserId: "1", ProductId: sensorVal }, function(err, result) {
                            if(err) return console.log(err);
                            console.log(result.GetProductByIdResult);
                            return result.GetProductByIdResult; //returns nothing into index.js
                        });
                    });
                    
                }
            }, 500);
        })
    }
}
