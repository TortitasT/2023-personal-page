---
title: 'Colored message of the day on an Ubuntu machine as a mistake prevention technique'
description: 'A simple way to wake you up when login in into a server terminal'
date: 07/06/2023
draft: true
---

## The problem

You may have opened multiple SSH sessions while working on a feature and left
them open "just in case". Well you may also have used those terminals as if it
were your own local machine.

This, while uncommon, can lead to some issues.

## The solution

My solution was to print a giant sign with the message PRODUCTION when you
log in to the server.

### On Ubuntu

This technique proved to be very easy to implement on Ubuntu thanks to [update-motd](https://manpages.ubuntu.com/manpages/xenial/man5/update-motd.5.html).

If you wanted a message at login you would traditionally edit `/etc/motd` and
type some plain text.

Well, what if you wanted colors? That's where update-motd comes in handy.

By placing a script on `/etc/update-motd.d` Ubuntu will execute it on login automatically.

The following code achieves some red text.

```bash
#!/bin/bash

BG_RED='\033[41m'
RED='\033[0;31m'
YELLOW='\033[0;32m'
BOLD_WHITE='\033[1;37m'
RESET='\033[0m'

echo -e $BG_RED
cat << 'END_CAT'
____________ ___________ _   _ _____ _____ _____ _____ _   _ _
| ___ \ ___ \  _  |  _  \ | | /  __ \_   _|_   _|  _  | \ | | |
| |_/ / |_/ / | | | | | | | | | /  \/ | |   | | | | | |  \| | |
|  __/|    /| | | | | | | | | | |     | |   | | | | | | . ` | |
| |   | |\ \\ \_/ / |/ /| |_| | \__/\ | |  _| |_\ \_/ / |\  |_|
\_|   \_| \_|\___/|___/  \___/ \____/ \_/  \___/ \___/\_| \_(_)
END_CAT

echo -e $RESET
```
