<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * FirePHP Helper Classes
 * @see http://www.sitepoint.com/debugging-php-code-with-firephp/
 * @see http://www.firephp.org/HQ/Use.htm
 * @see https://chrome.google.com/webstore/search/firephp4chrome
 */

if ( ! function_exists('fphp_log'))
{
    /**
     * Debug Info
     * Logs PHP information to the console in Chrome or Firefox, as a log
     * @param object|array|string|int
     * @param string
     */
    function fphp_log($data = '', $title = '')
    {
        FB::log( $data, $title );
    }
}

if ( ! function_exists('fphp_info'))
{
    /**
     * Debug Info
     * Logs PHP information to the console in Chrome or Firefox. as information
     * @param object|array|string|int
     * @param string
     */
    function fphp_info($data = '', $title = '')
    {
        FB::info( $data, $title );
    }
}

if ( ! function_exists('fphp_warn'))
{
    /**
     * Debug Info
     * Logs PHP information to the console in Chrome or Firefox, as a warning
     * @param object|array|string|int
     * @param string
     */
    function fphp_warn($data = '', $title = '')
    {
        FB::warn( $data, $title );
    }
}

if ( ! function_exists('fphp_error'))
{
    /**
     * Debug Info
     * Logs PHP information to the console in Chrome or Firefox, as an error
     * @param object|array|string|int
     * @param string
     */
    function fphp_error($data = '', $title = '')
    {
        FB::error( $data, $title );
    }
}

if ( ! function_exists('fphp_trace'))
{
    /**
     * Debug Info
     * Logs PHP trace information to the console in Chrome or Firefox
     * @param string
     */
    function fphp_trace($title = 'Default Trace')
    {
        FB::trace( $title );
    }
}


/* End of file debug_info_helper.php */
/* Location: ./application/helper/debug_info_helper.php */