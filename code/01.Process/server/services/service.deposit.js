import Service from '../helpers/helper.service.js'
import Bank    from '../model/model.js'

const ACTION = 'DEPOSIT'

export default Service ({

  deposit (request) {
    let {account} = request
    let {amount}  = request
    let response  = Bank.deposit (account, amount)
    let {balance} = response

    return {
      action : ACTION,
      data   : { account, balance }
    }
  }

})