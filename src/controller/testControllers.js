const testControllers = (req,res)=>{

    if (Math.random()>0.5?true:false) 
        {
            let orders = []
            for (let i = 1; i < Math.floor(Math.random()*20); i++) {
                let order = {
                    order_id:parseFloat(Math.ceil(Math.random()*(4000-1000)+1000)),
                    arrive_at_utc:parseFloat(Math.floor((Date.now() + (Math.random()*(7-(-7)*86400*1000))))),
                    paid_with:Math.round()*10 > 2  ? "Cash" :'Wallet',
                    total_Paid:parseFloat((Math.random()*(99-10)+10).toFixed(2)),
                    

                }

            orders = [...orders, order]
                
            }

            

            res.status(200).json(orders)
            
        }
    else
        {
          res.status(503).send({
            msg:"Bad Server Request"
          })  
        }

}

module.exports={
    testControllers
}