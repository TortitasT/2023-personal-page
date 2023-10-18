---
title: 'How to get TP-LINK Archer T2U working in Arch Linux'
description: 'Finally solving a lifetime problem with the drivers of this adapter.'
date: 07/06/2023
draft: true
---

## Why

I've always used this adapter in my Windows installation since it has a lot of range and I'm far away from my router.

When using Linux it never works out of the box. This is one of the reasons I liked using FreeBSD so much, it worked from the beginning (even in the installer).

I've recently switched to Arch for my main desktop and I wanted to document how I got this working.

## Make installing from AUR a bit easier

I installed `yay`. I am new to Arch so I cannot tell if this is a good practice. This binary makes installing from the AUR repository a bit easier.

More info [here](https://github.com/Jguer/yay).

## Install necessary packages

Git of course.

```
pacman -S git
```

Basic tools to build packages.

```
pacman -S base-devel
```

## Install linux-headers

In my installation i needed to install `linux-headers`. Found out thanks to [this issue](https://github.com/RinCat/RTL88x2BU-Linux-Driver/issues/34).

```
yay -S linux-headers
```

## Install the driver

Install dkms driver!!

```
yay -S rtl88xxau-aircrack-dkms-git .
```

## Test

I'll leave here some neat commands for testing if this worked out.

Will show all interfaces.

```
ip link
```

Will help you connect to a WiFi network.

```
iwctl
```
