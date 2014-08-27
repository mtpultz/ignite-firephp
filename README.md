# Ignite Firephp

> CodeIgniter FirePHP third party package with helper class for outtputting PHP debug information to your browser console.

##Table of Contents

[TOC]

> NOTE: the hope being that one day soon I'll log on, and this will actually be a table of contents.

## Getting Started

This document quickly outlines how to get your development environment up and running using [FirePHP](http://www.firephp.org/) in [CodeIgniter](https://ellislab.com/codeigniter) for [Google Chrome](https://www.google.ca/chrome/) and [Firefox](https://www.mozilla.org/en-US/firefox/new/).

## Installation

Move the firephp folder from within the distribution folder into your CodeIgniter application's third party folder, manually or using your favourite package manager, for example [Bower](http://bower.io/).

```js
bower install ignite-firephp
```

### CodeIgniter

In your application's autoload configuration file located in applications/config/autoload.php you'll want to autoload the third party package, as well as its library and helper classes.

```php
$autoload['packages'] = array(APPPATH.'third_party/firephp/');
```

```php
$autoload['libraries'] = array('fb');
```

```php
$autoload['helper'] = array('fb');
```

### Browser

#### [Chrome](https://www.google.ca/chrome/)

To use FirePHP in Google Chrome the best solution is [FirePHP4Chrome](https://chrome.google.com/webstore/search/firephp4chrome).  Simply install the Chrome extension, open up Google's debugging tool by pressing ctrl+alt+i, and you'll see a message that says "FirePHP4Chrome logging activated.  You may need to refresh this page.".

#### [Firefox](https://www.mozilla.org/en-US/firefox/new/)

To use FirePHP in FireFox, simply install the [FireBug](http://getfirebug.com/) and [FirePHP](http://www.firephp.org/) plugins.

## Usage

The standard [FirePHP API](http://www.firephp.org/HQ/Use.htm) has been wrapped in a few convenient PHP function for consumption in your CodeIgniter application, and your debugging pleasure.

### Log

fphp_log( object|array|string|int [, string label] )
> General message logging to the console.

### Info

fphp_info( object|array|string|int [, string label] )
> Information message logging to the console.

### Warn

fphp_warn( object|array|string|int [, string label] )
> Warning message logging to the console.

### Error

fphp_error( object|array|string|int [, string label] )
> Error message logging to the console.

### Trace

fphp_trace( string label )
> Backtrace indicating execution path to point at which trace is triggered.

## Suggestions or Comments?

Anything to add?  Any suggestions or comments are always welcome.