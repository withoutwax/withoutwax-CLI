'use strict';
// const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, { wait: false });

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
    {
        label: 'Website',
        url: 'https://withoutwax.me'
    },
    {
        label: 'Twitter',
        url: 'https://twitter.com/_withoutwax'
    },
    {
        label: 'GitHub',
        url: 'https://github.com/withoutwax'
    },
    {
        label: 'Quit',
        action() {
            process.exit();
        }
    }
];

module.exports = () => (
	<div>
        <br/>
        <div>
            <Text>Hi!, I'm a My name is Will and I am an UX Designer who also enjoys studying the boundaries of Computer Science, Software Engineering, UIUX, Graphic and Product Design. Thanks for visiting!</Text>
        </div>
        <br/>
        <SelectInput items={items} onSelect={handleSelect} />
    </div>
);
