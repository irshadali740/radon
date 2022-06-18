let axios = require("axios")


let getStates = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// ================================================ Assighnments Starts from Here ==================================================== //


let getBydistrict = async function (req, res) {
    try {
        let districtid = req.query.district_id
        let date = req.query.date
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtid}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



let temperatureofLondon = async function (req, res) {
    try {
        let city = req.query.q
        let app_id = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_id}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: "The temperature of London is" + " " + result.data.main.temp + " " + "in Kelvin" })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



let getsortedofcities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Moscow", "Chennai", "London"]
        let cityObjArray = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=5c73ea4995196e0c0b025e329c3ce7aa`)
            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, data: sorted })
    } catch (error) {
        res.status(500).send({ status: false, msg: "server error" })
    }

}



let meme = async function (req, res) {
    try {
        let memeid = req.query.template_id
        let firsttext = req.query.text0
        let secondtext = req.query.text1
        let user = req.query.username
        let password1 = req.query.password
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeid}&text0=${firsttext}&text1=${secondtext}&username=${user}&password=${password1}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getBydistrict = getBydistrict
module.exports.temperatureofLondon = temperatureofLondon
module.exports.getsortedofcities = getsortedofcities
module.exports.meme = meme
