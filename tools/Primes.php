<?php

class Primes {
    public function __construct() {

    }

    public function isPrime($n) {
        //if ( $n%1 || $n<2) return false;
        if ($n % 2 === 0) return false;

        $m=sqrt($n); //returns the square root of the passed value

    for ($i=2;$i<=$m;$i++) if ($n%$i === 0) return false;
        return true;
    }
}
