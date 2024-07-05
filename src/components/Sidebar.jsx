import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const sections = [
    { name: "Introduction", path: "/introduction" },
    { name: "Basics of Blockchain and Cryptocurrency", path: "/basics" },
    { name: "Bitcoin: The First Cryptocurrency", path: "/bitcoin" },
    // Add all other sections here
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
