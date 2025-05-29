import Server   from './helpers/helper.server.js'
import Balance  from './services/service.balance.js'
import Deposit  from './services/service.deposit.js'
import Withdraw from './services/service.withdraw.js'

Server (3000)
  .Service (Balance)
  .Service (Deposit)
  .Service (Withdraw)
.Start ()