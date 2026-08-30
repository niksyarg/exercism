#include "two_fer.h"
#include <stdio.h>

void two_fer(char *buffer, const char *name) {
  const char you[] = "you";

  if (!name) name = (char*)&you;

  snprintf(buffer, 100, "One for %s, one for me.", name);
}





#ifndef TWO_FER_H
#define TWO_FER_H

void two_fer(char *buffer, const char *name);

#endif