import Moralis from 'moralis';

const baseUrl = 'https://deep-index.moralis.io/api/v2.2/wallets/:address/net-worth'; // Replace with your actual API base URL

await Moralis.start({
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImM4OGRhOTBiLTY1ZjAtNDYxNi1hMzg5LWJiYjczYThiOWU1NCIsIm9yZ0lkIjoiMzk5OTc4IiwidXNlcklkIjoiNDEwOTkxIiwidHlwZUlkIjoiZTUxOTg2YWMtYmE4Ny00OTJhLTgyN2YtMzhjMTQ4ZmY3YmFmIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjA4NTA5MjYsImV4cCI6NDg3NjYxMDkyNn0.aD5y2MwNJNgr27cd0_p5ZTkp6MC6M7jN-J37LHg9Epg'
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