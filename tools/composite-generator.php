<?php

require_once 'Primes.php';
require_once 'NumberHandler.php';

$primes = new Primes();
$collection = [];
$collectionProperties = [];
// Long search
for ($i = 4; $i <=1000000; $i++) {
   // echo $i. "\n";
    if (false === $primes->isPrime($i)) {
        $numberHandler = new NumberHandler();

        $properties = $numberHandler->getNumberProperties($i);
        $collection [] = $properties['number'];
        $collectionProperties[] = $properties;
    }

    if (count($collection) > 100000) break;

}

file_put_contents('Composites', 'let Composites = '  . json_encode($collection) . ';');
file_put_contents('CompositeProperties', 'let CompositeProperties = '  . json_encode($collectionProperties) . ';');

