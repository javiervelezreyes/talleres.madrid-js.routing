import Service from '../helpers/helper.service.js'
import Bank    from '../model/model.js'

const ACTION = 'BALANCE'

export default Service ({

  balance (request) {
    let {account} = request
    let response  = Bank.balance (account)
    let {balance} = response

    return {
      action : ACTION,
      data   : { account, balance }
    }
  }

})