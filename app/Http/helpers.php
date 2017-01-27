<?php

function base_uri($url)
{
    return parse_url($url, PHP_URL_PATH);
}