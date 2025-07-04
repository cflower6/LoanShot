import express from 'express';
import { ethers } from 'ethers';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.get('/healthcheck', async (req, res) => {
    res.send({success: true});
    console.log('HEALTHCHECK WAS HIT');
})
app.post('/trigger-flashloan', async (req, res) => {
    try {
        //const { token, amount } = req.body;

        // Setup provider and signer
        // const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
        // const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        //
        // const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, CONTRACT_ABI, wallet);
        //
        // const tx = await contract.requestFlashLoan(token, ethers.utils.parseUnits(amount, 6));
        //res.send({ success: true, txHash: tx.hash });
        res.send({ success: true });
    } catch (err) {
        res.status(500).send({ success: false, error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 LoanShot listening on port ${PORT}`));
