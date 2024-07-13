import Moralis from 'moralis';

const baseUrl = 'https://deep-index.moralis.io/api/v2.2/wallets/:address/net-worth'; // Replace with your actual API base URL

await Moralis.start({
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjdlMDVkYmEzLWZiZGUtNDc5Ni05YTBhLTQ3ZTU0NTE5NTc0NSIsIm9yZ0lkIjoiMzk5OTYyIiwidXNlcklkIjoiNDEwOTc1IiwidHlwZUlkIjoiNzQ0YTkzZGUtNzFkOS00NGY3LWIwZmMtODJmMzJiZjdmNTk0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjA4MzgzNjEsImV4cCI6NDg3NjU5ODM2MX0.Tf4GLnZyWeMpDhrFsA0eCiznSnq5cMTxp0bYTAk-xQw'
});

export const getBossman = async () => {
    try {
        const response = await Moralis.EvmApi.wallets.getWalletNetWorth({
            "excludeSpam": true,
            "excludeUnverifiedContracts": true,
            "address": "0x3C736854AC7Cf8f24070aa3ceC72B8471d1f9781"
        })
        return response.raw;
    } catch (error) {
        console.error('Error fetching bossman:', error);
        // You can handle errors here by throwing a custom error or returning an empty array
        throw new Error('Failed to fetch bossman');
    }
};