<?php

class NumberHandler {
    public $numberProperties = [
        'number' => 0,
        'divisors' => 0,
        'sum_divisors_full' => 0,
        'sum_divisors' => 0,
        'summed' => 0,
        'count_divisors' => 0,
        'factorization_text' => ''
    ];

    public function getNumberProperties ($number) {
        $this->setSummedAndDivisors($number);
        return $this->numberProperties;
    }

    private function setSummedAndDivisors($number) {
        //if (this.number > 90000) return;
        $sum = 0;
        $fac = 0;
        $facM = 0;
        $sumdiv = 0;
        $countDivisors = 0;
        $res = [];

        for ($i = 1; $i <= $number; $i++) {
            $sum += $i;
            $fac = $i * $fac;
            $t = $number / $i;
            if (is_int($t)) {
                $sumdiv += $i;
                $countDivisors++;
                $res[] = $i;
            }

            if ($i === $number - 1 && $fac < 100000) $facM = $fac;
        }

        $this->numberProperties['number'] = $number;
        $this->numberProperties['divisors'] = $res;
        $this->numberProperties['sum_divisors_full'] = $sumdiv;
        $this->numberProperties['sum_divisors'] = $sumdiv - $number - 1;
        $this->numberProperties['summed'] = $sum;
        $this->numberProperties['count_divisors'] = $countDivisors;
        $this->numberProperties['factorization_text'] = $this->cleanString($this->factor($number));
    }

    private function cleanString($string) {
        if (substr($string, 1, strlen($string) - 1) === ',') {
            $string = substr($string, 0, strlen($string - 2));

        }

        return $string;
    }

    private function factor($n) {
        if (!is_int($n) || $n % 1 !== 0 || $n === 0) return '' . $n;
        if ($n < 0) return '-' . $this->factor(-$n);
        $minFactor = $this->leastFactor($n);
        if ($n === $minFactor) return '' . $n;
        return $minFactor . '*' . $this->factor($n / $minFactor);
    }

    private function leastFactor ($n) {
        if (!is_int($n)) return null;
        if ($n === 0) return 0;
        if ($n % 1 || $n * $n < 2) return 1;
        if ($n % 2 === 0) return 2;
        if ($n % 3 === 0) return 3;
        if ($n % 5 === 0) return 5;
            $m = sqrt($n);

            for ($i = 7; $i <= $m; $i += 30) {
            if ($n % $i === 0) return $i;
            if ($n % ($i + 4) === 0) return $i + 4;
            if ($n % ($i + 6) === 0) return $i + 6;
            if ($n % ($i + 10) === 0) return $i + 10;
            if ($n % ($i + 12) === 0) return $i + 12;
            if ($n % ($i + 16) === 0) return $i + 16;
            if ($n % ($i + 22) === 0) return $i + 22;
            if ($n % ($i + 24) === 0) return $i + 24;
        }
        return $n;
    }
}