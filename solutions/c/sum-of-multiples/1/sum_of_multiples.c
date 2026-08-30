#include "sum_of_multiples.h"
#include <stdio.h>

// exclusive range
#define range_ex(var, min, max) size_t var = min; var < max; var++

unsigned int sum(const unsigned int *factors, const size_t number_of_factors,
  const unsigned int limit) {
    int sum = 0;

    for(range_ex(i, 1, limit)) {
      for (range_ex(j, 0, number_of_factors)) {
        if (factors[j] == 0) break;
        if (i%factors[j] == 0) {
          sum += i;
          break;
        }
      }
    }
  return sum;
}





#ifndef SUM_OF_MULTIPLES_H
#define SUM_OF_MULTIPLES_H

#include <stddef.h>

unsigned int sum(const unsigned int *factors, const size_t number_of_factors,
                 const unsigned int limit);

#endif