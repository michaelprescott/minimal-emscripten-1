#include <stdio.h>

char* echo(char* str){
    return str;
}

int main(){
    char* res = echo("Hello, World!");
    printf("echo('Hello, World!') = %s\n", res);
    return 0;
}