import Service from '../helpers/helper.service.js'
import Bank    from '../model/model.js'

const ACTION = 'WITHDRAW'

export default Service ({

  withdraw (request) {
    let {account} = request
    let {amount}  = request
    let response  = Bank.withdraw (account, amount)
    let {balance} = response

    return {
      action : ACTION,
      data   : { account, balance }
    }
  }

})