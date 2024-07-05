import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const sections = [
    { name: "Introduction", path: "/introduction" },
    { name: "Basics of Blockchain and Cryptocurrency", path: "/basics" },
    { name: "Bitcoin: The First Cryptocurrency", path: "/bitcoin" },
    { name: "Altcoins and Tokenization", path: "/" },
    { name: "Blockchain Architecture and Consensus Mechanism", path: "/" },
    { name: "Crypto Wallets and Security", path: "/" },
    { name: "Crypto Exchanges and Trading", path: "/" },
    { name: "Blockchain Scalability and Interoperability", path: "/" },
    { name: "Decentralized Finance (DeFi)", path: "/" },
    { name: "Advanced DeFi Concepts", path: "/advanceddefi" },
    { name: "Non-Fungible Tokens (NFTs)", path: "/" },
    { name: "Blockchain in Enterprise and Governance", path: "/" },
    { name: "Legal and Regulatory Landscape", path: "/" },
    { name: "Environmental and Social Impact", path: "/" },
    { name: "Future of Blockchain and Cryptocurrencies", path: "/" },
    { name: "Major Crypto Events", path: "/" },


];

const Sidebar = () => (
    <List component="nav">
        {sections.map((section) => (
            <ListItem button component={Link} to={section.path} key={section.name}>
                <ListItemText primary={section.name} />
            </ListItem>
        ))}
    </List>
);

export default Sidebar;
