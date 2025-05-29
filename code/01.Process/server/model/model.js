function Model () {

  const Bank = {
    '1234-BC' : 100,
    '2341-AF' : 200,
    '3412-UR' : 300,
    '4123-FK' : 400,
  }

  function balance (account) {
    let balance = Bank[account]
    return { account, balance }
  }

  function deposit (account, amount) {
    Bank[account] = Bank[account] || 0
    Bank[account] = Bank[account] + amount
    let balance = Bank[account]
    return { account, balance }
  }

  function withdraw (account, amount) {
    Bank[account] = Bank[account] || 0
    Bank[account] = Bank[account] - amount
    let balance = Bank[account]
    return { account, balance }
  }

  return {
    balance,
    deposit,
    withdraw
  }

}

export default Model ()