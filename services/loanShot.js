export async function executeMock(pair, profit) {
    console.log(`💥 Executing mock LoanShot on pair: ${pair}`);
    console.log(`📈 Estimated profit: $${profit}`);

    await new Promise(res => setTimeout(res, 1000));

    return {
        success: true,
        txHash: "0xmockedtransactionhash123",
        simulatedProfit: profit
    };
}
